import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AuthenticationGuard } from 'src/global/logged-user/authentication.guard';
import { AuthorizationGuard } from 'src/global/logged-user/authorization.guard';
import { PERMISSIONS } from 'src/global/constants/permissions.contant';
import { GetLanguage } from 'src/global/language/get-language.decorator';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';
import { GetUser } from 'src/global/logged-user/get-user.decorator';
import type { LoggedUser } from 'src/global/logged-user/logged-user.interface';
import { FindRoleDto } from './dto/find-role.dto';
import { PaginationDecorator } from 'src/global/pagination/pagination.decorator';
import { PaginationDto } from 'src/global/pagination/pagination.dto';
import { BulkDeleteRoleDto } from './dto/bulk-delete-role.dto';

@Controller('roles')
@UseGuards(AuthenticationGuard)
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(new AuthorizationGuard(PERMISSIONS.create_role))
  create(
    @Body() createRoleDto: CreateRoleDto,
    @GetLanguage() language: LanguageCodes,
    @GetUser() loggedUser: LoggedUser,
  ) {
    return this.rolesService.create(createRoleDto, language, loggedUser);
  }

  @Get()
  @UseGuards(new AuthorizationGuard(PERMISSIONS.read_role))
  findAll(@Query() findRoleDto: FindRoleDto, @PaginationDecorator() paginationDto: PaginationDto) {
    return this.rolesService.findAll(findRoleDto, paginationDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.rolesService.findOne(+id);
  // }

  @Patch(':key')
  @UseGuards(new AuthorizationGuard(PERMISSIONS.update_role))
  update(
    @Param('key') key: string,
    @Body() updateRoleDto: UpdateRoleDto,
    @GetLanguage() language: LanguageCodes,
    @GetUser() loggedUser: LoggedUser,
  ) {
    return this.rolesService.update(key, updateRoleDto, language, loggedUser);
  }

  @Delete(':key')
  @UseGuards(new AuthorizationGuard(PERMISSIONS.delete_role))
  remove(@Param('key') key: string, @GetLanguage() language: LanguageCodes, @GetUser() loggedUser: LoggedUser) {
    return this.rolesService.remove(key, language, loggedUser);
  }

  @Delete()
  @UseGuards(new AuthorizationGuard(PERMISSIONS.delete_role))
  async bulkDelete(
    @Body() bulkDeleteRoleDto: BulkDeleteRoleDto,
    @GetLanguage() language: LanguageCodes,
    @GetUser() loggedUser: LoggedUser,
  ) {
    return this.rolesService.bulkDelete(bulkDeleteRoleDto, language, loggedUser);
  }
}
