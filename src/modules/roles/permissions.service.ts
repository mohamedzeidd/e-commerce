import { Injectable } from '@nestjs/common';
import { FindPermissionsDto } from './dto/find-permissions.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { groupBy } from 'rxjs';
import { permissionData, PERMISSIONS } from 'src/global/constants/permissions.contant';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepo: Repository<Role>,
  ) {}

  getAllPermissions(query?: FindPermissionsDto) {
    if (query?.groupBy) {
      return permissionData.reduce(
        (acc, permission) => {
          if (!acc[permission.module]) acc[permission.module] = [];
          acc[permission.module].push(permission);
          return acc;
        },
        {} as Record<string, { key: PERMISSIONS; module: string; title: string }[]>,
      );
    }
    return permissionData
  }
}
