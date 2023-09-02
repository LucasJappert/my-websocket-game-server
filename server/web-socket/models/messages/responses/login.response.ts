import { Action } from "../../../utils/enums.utils";
import { ResponseBase, ResponseBaseCode } from "./response.base";


class Data {
    userName: string = "";
}

export default class LoginResponse extends ResponseBase {
    private data: Data = new Data();

    constructor(id: Number, action: Action, responseCode: ResponseBaseCode) {
        super(id, action, responseCode);
    }

    SetData(userName: string) {
        this.data.userName = userName;
    }
}
