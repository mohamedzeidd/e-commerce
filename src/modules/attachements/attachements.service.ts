import { Injectable } from '@nestjs/common';
import { CreateAttachementDto } from './dto/create-attachement.dto';
import { UpdateAttachementDto } from './dto/update-attachement.dto';
import { LoggedUser } from 'src/global/logged-user/logged-user.interface';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';
import { BadRequestException } from 'src/global/exceptions/bad-request.exception';
import { ERR_CODES } from 'src/global/constants/error-codes.constant';
import { InjectRepository } from '@nestjs/typeorm';
import { Attachement } from './entities/attachement.entity';
import { Repository } from 'typeorm';
import { env } from 'src/config/env';
import * as fs from 'fs';
import { AuditLoggerQueueService } from 'src/bullmq/audit-logger-queue.service';
import { AuditMethod } from '../audit-logger/constants/audit-logger.constant';
import { ENTITY_ATTACHEMENT } from 'src/global/constants/entities.constant';
@Injectable()
export class AttachementsService {
  constructor(
    @InjectRepository(Attachement) private readonly attachementRepo: Repository<Attachement>,
    private readonly auditLoggerQueue: AuditLoggerQueueService,
  ) {}

  async uploadFile(file: Express.Multer.File, loggedUser: LoggedUser, language: LanguageCodes) {
    if (!file) {
      throw new BadRequestException(language, ERR_CODES.FILE_NOT_FOUND);
    }
    const fileName = file.filename;
    const filePath = file.path;

    try {
      const attachement = this.attachementRepo.create({
        originalName: file.originalname,
        fileName: fileName,
        filePath: filePath,
        mimeType: file.mimetype,
        fileSize: file.size,
        createdBy: { id: loggedUser.id },
      });
      const savedAttachement = await this.attachementRepo.save(attachement);

      this.auditLoggerQueue.addAuditLog(
        AuditMethod.INSERT,
        ENTITY_ATTACHEMENT,
        'UPLOAD',
        `File uploaded ${file.originalname}`,
        loggedUser.id,
        attachement.id,
      );

      return {
        id: savedAttachement.id,
        originalName: savedAttachement.originalName,
        fileName: savedAttachement.fileName,
        mimeType: savedAttachement.mimeType,
        fileSize: attachement.fileSize,
        description: attachement.description,
        createdAt: attachement.createdAt,
        url: `${env().apiUrl}/v1/attachements/${attachement.id}`,
      };
    } catch (error) {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      throw error;
    }
  }

  async uploadImage(image: Express.Multer.File, loggedUser: LoggedUser, language: LanguageCodes) {
    if (!image) {
      throw new BadRequestException(language, ERR_CODES.FILE_NOT_FOUND);
    }
    const fileName = image.filename;
    const filePath = image.path;

    try {
      const attachement = this.attachementRepo.create({
        originalName: image.originalname,
        fileName: fileName,
        filePath: filePath,
        mimeType: image.mimetype,
        fileSize: image.size,
        createdBy: { id: loggedUser.id },
      });
      const savedAttachement = await this.attachementRepo.save(attachement);

      this.auditLoggerQueue.addAuditLog(
        AuditMethod.INSERT,
        ENTITY_ATTACHEMENT,
        'UPLOAD',
        `Image uploaded ${image.originalname}`,
        loggedUser.id,
        attachement.id,
      );

      return {
        id: savedAttachement.id,
        originalName: savedAttachement.originalName,
        fileName: savedAttachement.fileName,
        mimeType: savedAttachement.mimeType,
        fileSize: attachement.fileSize,
        description: attachement.description,
        createdAt: attachement.createdAt,
        url: `${env().apiUrl}/v1/attachements/${attachement.id}`,
      };
    } catch (error) {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      throw error;
    }
  }

  create(createAttachementDto: CreateAttachementDto) {
    return 'This action adds a new attachement';
  }

  findAll() {
    return `This action returns all attachements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attachement`;
  }

  update(id: number, updateAttachementDto: UpdateAttachementDto) {
    return `This action updates a #${id} attachement`;
  }

  remove(id: number) {
    return `This action removes a #${id} attachement`;
  }
}
