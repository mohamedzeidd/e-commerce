import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findLoggedUserById(id: string) {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: {
        profileImage: true,
      },
      select: {
        id: true,
        name: true,
        defLanguage: true,
        email: true,
        emailVerified: true,
        phoneNumber: true,
        profileImage: {
          id: true,
        },
        roleKey: true,
      },
    });
    console.log(user)
    if (!user) return null;
    return {user};
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
