import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { env } from './config/env';
import { LanguageGuard } from './global/language/language.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );

  app.useGlobalGuards(new LanguageGuard());

  await app.listen(env().port);

  if (env().environment === 'production') {
    console.log(
      `Application is running on ${await app.getUrl()} ${env().environment}`,
    );
  }
}
bootstrap();
