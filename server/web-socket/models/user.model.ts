import * as WebSocket from 'ws';
import { Action } from '../utils/enums.utils';
import MessageData from './message-data.model';
export class User {
    socket!: WebSocket;
    userName: string = "";

    constructor(socket: WebSocket) {
        // Enlaza el contexto de ReceivedMessage al objeto actual de User
        this.ReceivedMessage = this.ReceivedMessage.bind(this);
        
        socket.on('message', this.ReceivedMessage);

        socket.on('close', () => {
            console.log('Cliente desconectado');
        });

        this.socket = socket;
    }

    ReceivedMessage(message: WebSocket.Data) {
        const infoMsg: MessageData = JSON.parse(message as string);
        if (infoMsg.action == Action.Login) {
            console.log(infoMsg);
            const message: MessageData = {
                id: 0,
                action: Action.Login,
                options: {
                    response: "Ingreso correcto!"
                }
            };
            console.log(message);
            this.SendMessage(message);
        }
    }
    SendMessage(message: MessageData) {
        this.socket.send(JSON.stringify(message));
    }
}
