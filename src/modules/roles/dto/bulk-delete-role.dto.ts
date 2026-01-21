import { ArrayNotEmpty, IsArray, IsString } from 'class-validator';

export class BulkDeleteRoleDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  keys: string[];
}
