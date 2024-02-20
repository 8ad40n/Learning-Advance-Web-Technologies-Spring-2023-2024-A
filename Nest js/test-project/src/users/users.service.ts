import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    public user:string[] = ["a","b","c"];
    findAllUser(): string[]{
        return this.user;
    }
}