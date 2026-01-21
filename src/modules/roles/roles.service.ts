import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';
import { LoggedUser } from 'src/global/logged-user/logged-user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { BadRequestException } from 'src/global/exceptions/bad-request.exception';
import { ERR_CODES } from 'src/global/constants/error-codes.constant';
import { UserPopulatedFields, UserPopulatedFieldsSelect } from '../users/constants/user.constant';
import { NotFoundException } from 'src/global/exceptions/not-found.exception';
import { PERMISSIONS } from 'src/global/constants/permissions.contant';
import { PermissionsService } from './permissions.service';
import { FindRoleDto } from './find-role.dto';
import { PaginationDto } from 'src/global/pagination/pagination.dto';
import { Roles } from 'src/global/constants/roles.constant';
import { BulkDeleteRoleDto } from './dto/bulk-delete-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly roleRepo: Repository<Role>,
    private readonly permissionsService: PermissionsService,
  ) {}

  async create(createRoleDto: CreateRoleDto, language: LanguageCodes, loggedUser: LoggedUser) {
    const existingRole = await this.roleRepo.findOne({
      where: {
        key: createRoleDto.key,
        isDeleted: false,
      },
    });

    if (existingRole) throw new BadRequestException(language, ERR_CODES.ENTITY_ALREADY_EXISTS);

    const role = await this.roleRepo.save({
      key: createRoleDto.key,
      title: createRoleDto.title,
      permissions: createRoleDto.permissions,
      createdBy: { id: loggedUser.id },
    });

    //TODO Add Logger here

    return this.findOne(role.key, language);
  }

  async findAll(findRoleDto: FindRoleDto, paginationDto: PaginationDto) {
    const { page, limit, search } = paginationDto;
    const skip = (page - 1) * limit;
    const queryBuilder = this.roleRepo.createQueryBuilder('roles');

    queryBuilder.leftJoin('roles.createdBy', 'createdBy');
    queryBuilder.addSelect(UserPopulatedFieldsSelect.map((field) => `createdBy.${field}`));
    queryBuilder.leftJoin('createdBy.profileImage', 'profileImage');
    queryBuilder.addSelect('profileImage.id');
    queryBuilder.where('roles.isDeleted = :isDeleted', { isDeleted: false });

    if (findRoleDto.assignableOnly) queryBuilder.andWhere('roles.key != :key', { key: Roles.SUPERADMIN });

    if (search) queryBuilder.andWhere('roles.title ILIKE :search', { search: `%${search}%` });

    const [roles, totalItems] = await queryBuilder
      .orderBy('roles.createdAt', 'DESC')
      .skip(skip)
      .take(limit)
      .getManyAndCount();

    const rolesWithPermissionsCount = roles.map((role) => ({
      ...role,
      permissions: undefined,
      permissionsCount: role.permissions ? role.permissions.length : 0,
    }));

    return {
      meta: {
        totalItems,
        itemsCount: roles.length,
        itemsPerPage: Number(limit),
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
      },
      data: rolesWithPermissionsCount,
    };
  }

  async findOne(key: string, language: LanguageCodes) {
    const role = await this.roleRepo.findOne({
      where: {
        key,
        isDeleted: false,
      },
      select: {
        createdBy: UserPopulatedFields,
      },
      relations: {
        createdBy: {
          profileImage: true,
        },
      },
    });

    if (!role) throw new NotFoundException(language);

    const permissions: {
      key: PERMISSIONS;
      module: string;
      title: string;
    }[] = this.permissionsService.getAllPermissions() as any;

    return {
      ...role,
      permissions: permissions.map((permission) => ({
        ...permission,
        isActive: role.permissions.includes(permission.key),
      })),
    };
  }

  async update(key: string, updateRoleDto: UpdateRoleDto, language: LanguageCodes, loggedUser: LoggedUser) {
    const role = await this.roleRepo.findOne({
      where: {
        key,
        isDeleted: false,
      },
    });

    if (!role) throw new NotFoundException(language);

    await this.roleRepo.update(role.key, updateRoleDto);

    return this.findOne(role.key, language);
  }

  async remove(key: string, language: LanguageCodes, loggedUser: LoggedUser) {
    const role = await this.roleRepo.findOne({
      where: {
        key,
        isDeleted: false,
      },
    });

    if (!role) throw new NotFoundException(language);

    await this.roleRepo.update(role.key, { isDeleted: true });

    //TODO Add Logger here

    return {
      message: 'Role deleted successfully',
    };
  }

  async bulkDelete(bulkDeleteRoleDto: BulkDeleteRoleDto, language: LanguageCodes, loggedUser: LoggedUser) {
    const { keys } = bulkDeleteRoleDto;

    const roles = await this.roleRepo.find({ where: keys.map((key) => ({ key, isDeleted: false })) });

    if (roles.length == 0) throw new NotFoundException(language);

    await this.roleRepo.update(keys, { isDeleted: true });

    //TODO Add Logger here

    return {
      message: `Successfully deleted ${roles.length} roles`,
    };
  }
}
