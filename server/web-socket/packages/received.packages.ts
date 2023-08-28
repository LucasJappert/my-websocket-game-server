import * as WebSocket from 'ws';

export function ActionsOnReceivedPackages(socket: WebSocket) {
    socket.on('message', (message: WebSocket.Data) => {
        const infoMsg = JSON.parse(message as string);
        if (infoMsg.action == "login") {
            console.log(infoMsg);
        }
        if (infoMsg.action == "mover") {

        }
    });
}
