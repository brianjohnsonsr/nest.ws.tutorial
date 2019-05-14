import { Module } from '@nestjs/common';
import { ChatGateway } from './chat/chat.gateway';
import { AlertGateway } from './alert/alert.gateway';
import { AlertController } from './alert/alert.controller';

@Module({
  imports: [],
  controllers: [AlertController],
  providers: [ChatGateway, AlertGateway],
})
export class AppModule {}
