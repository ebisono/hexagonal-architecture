import { UserStatus } from "../enums";

export class CreateUserDto {

    name: string;
    
    lastName: string;

    username: string;

    password: string;

    status: UserStatus;

    constructor( user: Partial<CreateUserDto> ) {
        Object.assign( this, user );
    }
}