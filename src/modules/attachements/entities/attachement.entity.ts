import { ENTITY_ATTACHEMENT } from 'src/global/constants/entities.constant';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity(ENTITY_ATTACHEMENT)
export class Attachement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'original_name', type: 'varchar', nullable: false })
  originalName: string;
  
  @Column({ name: 'file_name', type: 'varchar', nullable: false })
  fileName: string;

  @Column({ name: 'file_path', type: 'varchar', nullable: false })
  filePath: string;

  @Column({ name: 'mime_type', type: 'varchar', nullable: false })
  mimeType: string;

  @Column({ name: 'file_size', type: 'bigint', nullable: false })
  fileSize: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'created_by' })
  createdBy: User;
  
  @Column({ name: 'is_deleted', type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({ name: 'is_public', type: 'boolean', default: false })
  isPublic: boolean;








  
}
