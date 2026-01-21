import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  search?: string;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Transform(({ value }) => (value ? Number(value) : undefined))
  page: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => (value ? Number(value) : undefined))
  limit: number;

  skip: number;
}
