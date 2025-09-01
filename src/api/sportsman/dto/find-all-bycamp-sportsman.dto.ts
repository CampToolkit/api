import { IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class FindSportsmanByCampDto {
  @Type(() => Number) // преобразует строку в число
  @IsInt({ message: 'campId должен быть целым числом' })
  @Min(1, { message: 'campId должен быть больше 0' })
  id: number;
}
