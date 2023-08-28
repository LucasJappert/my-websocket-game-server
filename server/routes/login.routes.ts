

import { Express, Request, Response } from 'express';


export default (app: Express) => {
    app.get('/login', (req: Request, res: Response) => {
        console.log(req.body);
        return res.json("Bienvenidos a mi login");
    });
};