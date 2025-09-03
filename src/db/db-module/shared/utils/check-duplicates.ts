import { Repository, FindOptionsWhere, ObjectLiteral } from 'typeorm';
import { DuplicationError } from '../../../../shared/errors/db-errors.error';

interface DuplicateOptions<T extends ObjectLiteral> {
  repository: Repository<T>;
  where: FindOptionsWhere<T> | FindOptionsWhere<T>[];
  entityName: string;
  uniqueFields: (keyof T)[];
}

/**
 * Проверяет наличие дубликатов в базе по указанным условиям и набору уникальных полей.
 *
 * @template T - Тип сущности (обязательно с полем `id`).
 *
 * @param {Object} options - Опции проверки.
 * @param {Repository<T>} options.repository - Репозиторий TypeORM для работы с сущностью.
 * @param {FindOptionsWhere<T> | FindOptionsWhere<T>[]} options.where - Условие поиска дубликатов.
 * @param {string} [options.entityName] - Имя сущности (для сообщения об ошибке).
 *                                        Если не указано, берётся из `repository.metadata.name`.
 * @param {(keyof T)[]} options.uniqueFields - Список полей, которые должны быть уникальными.
 *
 * @throws {DuplicationError} - Если найдены дубликаты.
 * В `error.duplicate.duplicateIds` будут id найденных записей,
 * а в `error.duplicate.duplicateEntity` — ссылка на сущность.
 *
 * @example
 * await checkDuplicates({
 *   repository: practiceGroupRepository,
 *   where: {
 *     name: params.name,
 *     parent: { id: params.parentId },
 *     camp: { id: params.campId },
 *   },
 *   entityName: 'PracticeGroup',
 *   uniqueFields: ['name', 'camp', 'parent'],
 * });
 */
export async function checkDuplicates<T extends ObjectLiteral>({
  repository,
  where,
  entityName,
  uniqueFields,
}: DuplicateOptions<T>): Promise<void> {
  const existing = await repository.find({ where });

  if (existing.length > 0) {
    const ids = existing.map((item: T & { id: number }) => item.id);

    const duplicates = existing.map((item) =>
      uniqueFields
        .map((field) => `${String(field)}=${String(item[field])}`)
        .join(', '),
    );

    throw new DuplicationError(
      `${entityName} with ${duplicates.join(' | ')} already exist`,
      {
        duplicate: {
          duplicateEntity: entityName,
          duplicateIds: ids,
        },
      },
    );
  }
}
