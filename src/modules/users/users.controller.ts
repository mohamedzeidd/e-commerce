import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthenticationGuard } from 'src/global/logged-user/authentication.guard';
import { AuthorizationGuard } from 'src/global/logged-user/authorization.guard';
import { PERMISSIONS } from 'src/global/constants/permissions.contant';
import { GetUser } from 'src/global/logged-user/get-user.decorator';
import type { LoggedUser } from 'src/global/logged-user/logged-user.interface';
import { GetLanguage } from 'src/global/language/get-language.decorator';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';

@Controller('users')
@UseGuards(AuthenticationGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}




  @Post()
  @UseGuards(new AuthorizationGuard(PERMISSIONS.create_user))
  createUser(@Body() createUserDto: CreateUserDto , @GetUser() loggedUser:LoggedUser , @GetLanguage() language:LanguageCodes) {
    return this.usersService.createUser(createUserDto , loggedUser , language);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
