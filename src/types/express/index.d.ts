import { LanguageCodes } from 'src/global/constants/language-code.constant';

declare module 'express' {
  interface Request {
    language: LanguageCodes;
    loggedUser: LoggedUser;
  }
}
