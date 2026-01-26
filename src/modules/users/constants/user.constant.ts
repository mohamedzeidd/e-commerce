import { FindOptionsSelect } from 'typeorm';
import { User } from '../entities/user.entity';
import { env } from 'src/config/env';


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


export const DEFAULT_PROFILE_IMAGE_ID = '908c84cc-c6d6-4428-b3e3-c817a80c6249';
export const DEFAULT_PROFILE_IMAGE_URL = `${env().apiUrl}/api/v1/attachments/${DEFAULT_PROFILE_IMAGE_ID}`;
