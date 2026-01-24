
import { IsBoolean, IsOptional } from 'class-validator';
import { PaginationDto } from 'src/global/pagination/pagination.dto';

export class FindRoleDto extends PaginationDto {
  @IsBoolean()
  @IsOptional()
  assignableOnly?: boolean;
}
