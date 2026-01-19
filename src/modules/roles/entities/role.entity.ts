import { ENTITY_ROLE } from 'src/global/constants/entities.constant';
import { PERMISSIONS } from 'src/global/constants/permission.constant';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity(ENTITY_ROLE)
export class Role {
  @PrimaryColumn({ type: 'varchar' })
  key: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'boolean', name: 'is_created_by_system', default: false })
  isCreatedBySystem: boolean;

  @Column({ type: 'boolean', name: 'is_deleted', default: false })
  isDeleted: boolean;

  @Column({ type: 'text', array: true, default: [] })
  permissions: PERMISSIONS[];

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'created_by' })
  createdBy: User;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({
    type: 'numeric',
    name: 'min_order_amount',
    precision: 10,
    scale: 2,
    default: 0,
  })
  minOrderAmount: number;
}
