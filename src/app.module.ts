import { Module } from '@nestjs/common';
import { AppConfigurationModule } from './infrastructure/configuration/app-configuration.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppConfigurationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
