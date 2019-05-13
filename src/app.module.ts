import { Module } from '@nestjs/common';
import { AlertGateway } from './alert/alert.gateway';
import { ChatGateway } from './chat/chat.gateway';
import { AlertController } from './alert/alert.controller';

@Module({
  imports: [],
  controllers: [AlertController],
  providers: [AlertGateway, ChatGateway],
})
export class AppModule {}
