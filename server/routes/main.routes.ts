import { Express, Request, Response } from 'express';
import loginRoutes from './login.routes';

export default (app: Express) => {
    loginRoutes(app);


    app.get('/', (req: Request, res: Response) => {
        return res.json("Bienvenidos a mi API");
    });
};

