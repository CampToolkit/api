export class DBError extends Error {
  public readonly code: string;
  public readonly details: string;

  constructor(
    message: string,
    options: {
      code?: string;
      details?: string;
    },
  ) {
    super(message);
    this.code = options.code ?? 'DB_ERROR';
    this.details = options.details ?? '';
  }
}

export class DuplicationError extends DBError {
  public readonly duplicateIds: number[];
  public readonly duplicateEntity: string;

  constructor(
    message: string,
    options: {
      code?: string;
      details?: string;
      duplicate: {
        duplicateIds: number[];
        duplicateEntity: string;
      };
    },
  ) {
    super(message, {
      code: options.code,
      details: options.details,
    });
    this.duplicateEntity = options.duplicate.duplicateEntity;
    this.duplicateIds = options.duplicate.duplicateIds;
  }
}
