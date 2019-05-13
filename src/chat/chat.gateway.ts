import { WebSocketGateway, OnGatewayConnection, SubscribeMessage, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ namespace: '/chat' })
export class ChatGateway implements OnGatewayConnection {

  @WebSocketServer() wss: Server;

  handleConnection(client: Socket, ...args: any[]) {
    client.emit('msgToClient', 'Connected to ChatGateway!');
  }

  @SubscribeMessage('chatToServer')
  handleChatMessage(client: Socket, chat: { sender: string, message: string }) {
    this.wss.emit('chatToClient', chat);
  }

}
