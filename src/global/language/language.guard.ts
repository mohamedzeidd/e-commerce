import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LanguageCodes } from '../constants/language-codes.constants';
import { ERR_CODES } from '../constants/error-codes.constant';

@Injectable()
export class LanguageGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { headers } = request;

    // Read header
    const acceptLanguage = headers['x-language']?.toString().toLowerCase();

    // Optional: if no header, default to English
    const language = acceptLanguage || LanguageCodes.English;

    // Validate
    if (!Object.values(LanguageCodes).includes(language as LanguageCodes)) {
      throw new BadRequestException(
        LanguageCodes.English,
        ERR_CODES.INVALID_LANGUAGE_HEADER,
      );
    }

    // Store in request for decorator
    request.language = language;

    return true;
  }
}
