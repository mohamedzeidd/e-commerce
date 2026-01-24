import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { env } from './config/env';
import { AttachementsModule } from './modules/attachements/attachements.module';
import { PostgresModule } from './postgres/postgres.module';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from './modules/roles/roles.module';
import { LanguageMiddleware } from './global/language/language.middleware';
import { AuthenticationMiddleware } from './global/logged-user/authentication.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './modules/roles/entities/role.entity';
import { AuditLoggerModule } from './modules/audit-logger/audit-logger.module';
import { BullMQModule } from './bullmq/bullmq.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role]),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true, load: [env] }),
    JwtModule.register({
      global: true,
      secret: env().jwt.secret,
    }),
    UsersModule,
    AttachementsModule,
    PostgresModule,
    RolesModule,
    AuditLoggerModule,
    BullMQModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LanguageMiddleware, AuthenticationMiddleware).forRoutes('*');
  }
}
