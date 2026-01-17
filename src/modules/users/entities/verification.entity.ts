import { ENTITY_VERIFICATION } from "src/global/constants/entities.constant";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { VerificationReason } from "../constants/user.constant";


@Entity(ENTITY_VERIFICATION)
export class Verification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'verification_expire_at', type: 'timestamp', nullable: true })
  verificationExpireAt: Date;

  @Column({
    name: 'verification_reason',
    type: 'enum',
    enum: VerificationReason,
    nullable: true,
  })
  verificationReason: VerificationReason | null;

  @Column({
    name: 'verification_code',
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  verificationCode: string;

  @Column({
    name: 'verification_temp_email',
    type: 'varchar',
    nullable: true,
  })
  verificationTempEmail: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @OneToOne(() => User, (user) => user.verification, { onDelete: 'CASCADE' })
  user: User;
}
