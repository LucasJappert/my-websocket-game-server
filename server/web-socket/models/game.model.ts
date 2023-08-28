import { User } from "./user.model";
import * as WebSocket from 'ws';

class Game {
    private users: User[] = [];

    AddUser(socket: WebSocket) {
        this.users.push(new User(socket));
        console.log(`Usuarios conectados: ${this.users.length}`)
    }
}

export default new Game();
