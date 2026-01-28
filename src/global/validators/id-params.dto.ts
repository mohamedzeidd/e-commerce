import { IsUUID } from 'class-validator';

export class IdParamsDto {
  @IsUUID(4, { message: 'ID must be a valid UUID' })
  id: string;
}
