import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getData(){
        return {
            id: 1,
            name:'Fuad'
        }
    }
}
