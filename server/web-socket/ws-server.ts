import * as WebSocket from 'ws';
import { ActionsOnReceivedPackages } from './packages/received.packages';
import Game from './models/game.model';
export function IniciarServerWS() {
    const wsServer = new WebSocket.Server({ port: 8080 });

    wsServer.on('connection', (socket: WebSocket) => {
        // console.log('Hola usuario conectado!');

        Game.AddUser(socket);
        
    });

    console.log('Servidor WebSocket escuchando en el puerto 8080');
}


