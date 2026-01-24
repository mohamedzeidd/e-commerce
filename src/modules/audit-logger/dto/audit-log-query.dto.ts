import { IsDateString, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { PaginationDto } from 'src/global/pagination/pagination.dto';
import { AuditMethod } from '../constants/audit-logger.constant';
import { Transform } from 'class-transformer';

export class AuditLogQueryDto extends PaginationDto {
  @IsOptional()
  @IsUUID('4')
  userId?: string;

  @IsOptional()
  @IsEnum(AuditMethod)
  method?: AuditMethod;

  @IsOptional()
  @IsString()
  module?: string;

  @IsOptional()
  @IsString()
  action?: string;

  @IsOptional()
  @IsString()
  targetId?: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
  
@IsOptional()
@Transform(({ value }) => {
  if (value === undefined) return undefined;   // keep undefined if not sent
  return String(value).toLowerCase() === 'true';  // case-insensitive
})
includeUser?: boolean;
}
