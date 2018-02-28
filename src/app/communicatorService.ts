import {Injectable} from '@angular/core';

@Injectable()
export class CommunicatorService {

    validUser: any = 0;
    token: string;

    settoken(tokenVar: string) {
        this.token = tokenVar;
        this.validUser = 1;
    }
    gettoken() {
        return this.token;
    }
    getValidUser() {
        return this.validUser;
    }
}
