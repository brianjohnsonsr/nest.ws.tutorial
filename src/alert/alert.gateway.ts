import { WebSocketGateway, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ namespace: '/alert' })
export class AlertGateway implements OnGatewayConnection {

  @WebSocketServer() wss: Server;

  handleConnection(client: Socket, ...args: any[]) {
    client.emit('msgToClient', 'Connected to AlertGateway!');
  }

  sendToAll(msg: string) {
    this.wss.emit('alertToClient', { message: msg, type: 'Alert' });
  }

}
