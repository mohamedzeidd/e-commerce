import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { env } from './config/env';
import { AttachementsModule } from './modules/attachements/attachements.module';
import { PostgresModule } from './postgres/postgres.module';
import { JwtModule } from '@nestjs/jwt';
import { RolesModule } from './modules/roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true, load: [env] }),
    JwtModule.register({
      global: true,
      secret: env().jwt.secret,
    }),
    UsersModule,
    AttachementsModule,
    PostgresModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
