import { Injectable, NestMiddleware } from '@nestjs/common';
import { LanguageCodes } from '../constants/language-codes.constants';

@Injectable()
export class LanguageMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.language = req.headers['x-language'] || LanguageCodes.English;
    next();
  }
}
