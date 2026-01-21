import { IsBoolean, IsOptional } from 'class-validator';

export class FindPermissionsDto {
  @IsBoolean()
  @IsOptional()
  groupBy: boolean;
}
