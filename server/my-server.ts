import express, { Request, Response } from 'express';
import cors from 'cors';
import MainRoutes from './routes/main.routes';
import { IniciarServerWS } from './web-socket/ws-server';

const server = express();
server.use(express.json());
// Middleware para analizar solicitudes codificadas en URL
server.use(express.urlencoded({ extended: true }));

server.use(cors());

MainRoutes(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
    const msg: string = `Servidor corriendo en http://localhost:${PORT}`;
    console.log(msg);
});

IniciarServerWS();










