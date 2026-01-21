import { FindOptionsSelect } from 'typeorm';
import { User } from '../entities/user.entity';


export enum AuthProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  EMAIL_PASSWORD = 'email_password',
}


export enum VerificationReason {
  SIGNIN = 'signin',
  SIGNUP = 'signup',
  UPDATE_PHONE_NUMBER = 'updatePhoneNumber',
  FORGOT_PASSWORD = 'forgotPassword',
  UPDATE_EMAIL = 'updateEmail',
  EMAIL_VERIFICATION = 'emailVerification',
  PHONE_VERIFICATION = 'phoneVerification',
  PASSWORD_RESET = 'passwordReset',
}



export const UserPopulatedFields:FindOptionsSelect<User> = {
  id:true,
  name:true,
  profileImage:{
    id:true
  }
}

export const UserPopulatedFieldsSelect = ['id', 'name'];
