import { ENTITY_AUDIT_LOGS } from 'src/global/constants/entities.constant';
import { User } from 'src/modules/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { AuditMethod } from '../constants/audit-logger.constant';

@Entity(ENTITY_AUDIT_LOGS)
export class AuditLogger {
  @PrimaryGeneratedColumn('identity')
  id: string;

  @Column({ name: 'user_id', nullable: true, type: 'uuid' })
  userId: string;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'enum',
    enum: AuditMethod,
    nullable: false,
  })
  method: AuditMethod;

  @Column({ type: 'varchar', nullable: false })
  module: string;

  @Column({ type: 'varchar', nullable: false })
  action: string;

  @Column({ type: 'text', nullable: true })
  message: string;

  @Column({ name: 'target_id', type: 'varchar', nullable: true })
  targetId: string;

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
