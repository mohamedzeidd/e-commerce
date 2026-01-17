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