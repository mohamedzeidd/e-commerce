import { IsArray, IsEnum, IsString, MinLength } from 'class-validator';
import { permissionKeys, PERMISSIONS } from 'src/global/constants/permissions.contant';

export class CreateRoleDto {
  @IsString()
  title: string;

  @IsString()
  @MinLength(2)
  key: string;

  @IsArray()
  @IsEnum(permissionKeys, { each: true })
  permissions: PERMISSIONS[];
}
