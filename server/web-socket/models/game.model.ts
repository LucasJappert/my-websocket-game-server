import { User } from "./user.model";
import * as WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';

export default class Game {
    private static users: Map<string, User> = new Map();

    static AddUser(socket: WebSocket) {
        this.RemoveUser = this.RemoveUser.bind(this);

        const uuid = uuidv4();
        socket.on('close', () => { this.RemoveUser(uuid); });
        this.users.set(uuid, new User(socket, uuid));
        console.log(`Usuario conectado: ${uuid}`);
        console.log(`Usuarios conectados: ${this.users.size}`);
    }
    static RemoveUser(uuid: string) {
        this.users.delete(uuid);
        console.log(`Usuario desconectado: ${uuid}`);
        console.log(`Usuarios conectados: ${this.users.size}`);
    }
}
