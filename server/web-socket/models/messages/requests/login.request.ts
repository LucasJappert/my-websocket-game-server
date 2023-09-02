import { Action } from "../../../utils/enums.utils";
import { User } from "../../user.model";
import LoginResponse from "../responses/login.response";
import { ResponseBaseCode } from "../responses/response.base";
import { RequestBase } from "./request.base";

export default class LoginRequest extends RequestBase {
    userName: string = "";

    constructor(id: Number, userName: string) {
        super(id, Action.Login);
        
        this.userName = userName;
    }

    Execute(user: User) {
        const loginResponse = new LoginResponse(this.id, Action.Login, ResponseBaseCode.Ok);
        loginResponse.SetData(this.userName);
        user.SendMessage(loginResponse);
        console.log(`Nuevo usuario logueado: ${this.userName}`);
    }
}
