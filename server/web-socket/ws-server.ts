import * as WebSocket from 'ws';
import Game from './models/game.model';

export function IniciarServerWS() {
    const wsServer = new WebSocket.Server({ port: 8080 });

    wsServer.on('connection', (socket: WebSocket) => {
        Game.AddUser(socket);
        
    });

    console.log('Servidor WebSocket escuchando en el puerto 8080');
}


