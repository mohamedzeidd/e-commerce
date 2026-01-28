import { ENTITY_USER } from 'src/global/constants/entities.constant';
import { Attachement } from 'src/modules/attachements/entities/attachement.entity';
import {
  AfterLoad,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AuthProvider, DEFAULT_PROFILE_IMAGE_URL } from '../constants/user.constant';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';
import { CountryCodes } from 'src/global/constants/country-codes.constant';
import { Roles } from 'src/global/constants/roles.constant';
import { Verification } from './verification.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { env } from 'src/config/env';

@Entity(ENTITY_USER)
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 20, nullable: true })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @ManyToOne(() => Attachement, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'profile_image_id' })
  profileImage: Attachement;

  @Column({
    name: 'auth_provider',
    type: 'enum',
    enum: AuthProvider,
    nullable: true,
  })
  authProvider: AuthProvider;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ name: 'fcm_token', type: 'text', nullable: true })
  fcmToken: string;

  @Column({ name: 'token', type: 'varchar', nullable: true })
  token: string;

  @Column({
    name: 'def_language',
    type: 'enum',
    enum: LanguageCodes,
    default: LanguageCodes.English,
  })
  defLanguage: LanguageCodes;

  @Column({
    name: 'def_country',
    type: 'varchar',
    length: 20,
    default: CountryCodes.UNITED_ARAB_EMIRATES,
  })
  defCountry: CountryCodes;

  @Column({
    name: 'role_key',
    type: 'varchar',
    nullable: false,
    default: Roles.CUSTOMER,
  })
  roleKey: string;

  @ManyToOne(() => Role, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'role_key', referencedColumnName: 'key' })
  role: Role;

  @Column({ name: 'email_verified', type: 'boolean', default: false })
  emailVerified: boolean;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @Column({ name: 'is_blocked', type: 'boolean', default: false })
  isBlocked: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({
    name: 'verification_id',
    type: 'uuid',
    nullable: true,
    unique: true,
  })
  verificationId: string;

  @OneToOne(() => Verification, (verification) => verification.user, {
    cascade: true,
  })
  @JoinColumn({ name: 'verification_id' })
  verification: Verification;

  // @Column({
  //   type: 'numeric',
  //   name: 'min_order_amount',
  //   precision: 10,
  //   scale: 2,
  //   default: 0,
  // })
  // minOrderAmount: number;

  @AfterLoad()
  setProfileImageUrl() {
    if (this.profileImage?.id) {
      console.log(env().apiUrl);
      this.profileImage = `${env().apiUrl}/api/v1/attachments/${this.profileImage.id}` as any;
    } else {
      this.profileImage = DEFAULT_PROFILE_IMAGE_URL as any;
    }
  }
}
