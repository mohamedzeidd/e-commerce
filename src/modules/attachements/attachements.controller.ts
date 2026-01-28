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
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { AttachementsService } from './attachements.service';
import { CreateAttachementDto } from './dto/create-attachement.dto';
import { UpdateAttachementDto } from './dto/update-attachement.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
import { diskStorage } from 'multer';
import path, { extname } from 'path';
import * as fs from 'fs';
import { v4 as uuid } from 'uuid';
import { AuthenticationGuard } from 'src/global/logged-user/authentication.guard';
import { AuthorizationGuard } from 'src/global/logged-user/authorization.guard';
import { PERMISSIONS } from 'src/global/constants/permissions.contant';
import { GetLanguage } from 'src/global/language/get-language.decorator';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';
import { GetUser } from 'src/global/logged-user/get-user.decorator';
import type { LoggedUser } from 'src/global/logged-user/logged-user.interface';
import { BadRequestException } from 'src/global/exceptions/bad-request.exception';
import { ERR_CODES } from 'src/global/constants/error-codes.constant';
import { IdParamsDto } from '../../global/validators/id-params.dto';

export const multerGeneralConfig = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(process.cwd(), 'uploads');
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const fileExtention = extname(file.originalname);
      const fileName = `${uuid()}${fileExtention}`;
      cb(null, fileName);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
};

export const multerImageConfig = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(process.cwd(), 'uploads/images');
      if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const fileExtention = extname(file.originalname);
      const fileName = `${uuid()}${fileExtention}`;
      cb(null, fileName);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max for images
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
      throw new BadRequestException(LanguageCodes.English, ERR_CODES.IMAGE_ONLY);
    }
    cb(null, true);
  },
};

@Controller('attachements')
export class AttachementsController {
  constructor(private readonly attachementsService: AttachementsService) {}

  @Post('upload-file')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthenticationGuard, new AuthorizationGuard(PERMISSIONS.upload_attachment))
  @UseInterceptors(FileInterceptor('file', multerGeneralConfig))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @GetLanguage() language: LanguageCodes,
    @GetUser() loggedUser: LoggedUser,
  ) {
    return this.attachementsService.uploadFile(file, loggedUser, language);
  }

  @Post('upload-image')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthenticationGuard, new AuthorizationGuard(PERMISSIONS.upload_attachment))
  @UseInterceptors(FileInterceptor('image', multerImageConfig))
  async uploadImage(
    @UploadedFile() image: Express.Multer.File,
    @GetLanguage() language: LanguageCodes,
    @GetUser() loggedUser: LoggedUser,
  ) {
    return this.attachementsService.uploadImage(image, loggedUser, language);
  }

  @Get(':id')
  @UseGuards(new AuthorizationGuard(PERMISSIONS.read_attachment))
  @HttpCode(HttpStatus.OK)
  async preview(
    @Param() params: IdParamsDto,
    @GetLanguage() language: LanguageCodes,
    @GetUser() loggedUser: LoggedUser,
  ) {
    return this.attachementsService.getFileForPreview(params, loggedUser, language);
  }

  @Post()
  create(@Body() createAttachementDto: CreateAttachementDto) {
    return this.attachementsService.create(createAttachementDto);
  }

  @Get()
  findAll() {
    return this.attachementsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.attachementsService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttachementDto: UpdateAttachementDto) {
    return this.attachementsService.update(+id, updateAttachementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attachementsService.remove(+id);
  }
}
