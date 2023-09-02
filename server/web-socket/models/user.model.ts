import * as WebSocket from 'ws';
import { Action } from '../utils/enums.utils';
import LoginRequest from './messages/requests/login.request';
import { ResponseBase } from './messages/responses/response.base';
import { RequestBase } from './messages/requests/request.base';
export class User {
    private socket!: WebSocket;
    private userName: string = "";
    private uuid!: string;
    private messagesReceivedCounter: number = 0;

    constructor(socket: WebSocket, uuid: string) {
        // Enlaza el contexto de ReceivedMessage al objeto actual de User
        this.ReceivedMessage = this.ReceivedMessage.bind(this);
        
        socket.on('message', this.ReceivedMessage);

        this.socket = socket;
        this.uuid = uuid;
    }

    ReceivedMessage(stringifyData: WebSocket.Data) {
        this.messagesReceivedCounter += 1;
        const requestBase: RequestBase = JSON.parse(stringifyData as string);
        if (requestBase.action == Action.Login) {
            const loginData = JSON.parse(stringifyData as string) as LoginRequest;
            const loginRequest = new LoginRequest(loginData.id, loginData.userName);//Hacemos esto para tener la instancia y poder usar la función que sigue...
            loginRequest.Execute(this);
        }
    }
    SendMessage(message: ResponseBase) {
        this.socket.send(JSON.stringify(message));
        // this.socket.close();
    }
}
