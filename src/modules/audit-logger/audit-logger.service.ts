import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { AuditLogger } from './entities/audit-logger.entity';
import { AuditLogQueryDto } from './dto/audit-log-query.dto';
import { QueryBuilder } from 'typeorm/browser';
import { UserPopulatedFieldsSelect } from '../users/constants/user.constant';
@Injectable()
export class AuditLoggerService {
  constructor(@InjectRepository(AuditLogger) private readonly auditLoggerRepository: Repository<AuditLogger>) {}

  async create(createAuditLoggerDto: AuditLogger): Promise<AuditLogger> {
    const auditLog = this.auditLoggerRepository.create(createAuditLoggerDto);
    return await this.auditLoggerRepository.save(auditLog);
  }

  async findAll(queryDto: AuditLogQueryDto) {
    const queryBuilder = this.auditLoggerRepository.createQueryBuilder('audit_logs');

    // Include user relation if required
    if (queryDto.includeUser) {
      queryBuilder.leftJoin('audit_logs.user', 'user');
      queryBuilder.addSelect(UserPopulatedFieldsSelect.map((field) => `user.${field}`));
      queryBuilder.leftJoin('user.profileImage', 'profileImage');
      queryBuilder.addSelect('profileImage.id');
    }

    // Apply other filters
    this.applyFilters(queryBuilder, queryDto);

    // Apply pagination
    const page = queryDto.page || 1;
    const limit = queryDto.limit || 10;
    const skip = (page - 1) * limit;

    queryBuilder.orderBy('audit_logs.createdAt', 'DESC').skip(skip).take(limit);

    const [auditLogs, total] = await queryBuilder.getManyAndCount();

    return {
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      data: {
        auditLogs,
      },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} auditLogger`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditLogger`;
  }

  private applyFilters(queryBuilder: SelectQueryBuilder<AuditLogger>, queryDto: AuditLogQueryDto) {
    if (queryDto.method) {
      queryBuilder.andWhere('audit_logs.method =:method', { method: queryDto.method });
    }

    if (queryDto.module) {
      queryBuilder.andWhere('audit_logs.module =:module', { module: queryDto.module });
    }

    if (queryDto.action) {
      queryBuilder.andWhere('audit_logs.action =:action', { action: queryDto.action });
    }

    if (queryDto.targetId) {
      queryBuilder.andWhere('audit_logs.targetId =:targetId', { targetId: queryDto.targetId });
    }
    if (queryDto.startDate) {
      queryBuilder.andWhere('audit_logs.createdAt >=:startDate', { startDate: queryDto.startDate });
    }
    if (queryDto.action) {
      queryBuilder.andWhere('audit_logs.createdAt <=:endDate', { endDate: queryDto.endDate });
    }
  }
}
