import { UserStatus } from "../enums";

export class UpdateUserDto {

    id: number;
    
    name: string;

    lastName: string;
    
    username: string;

    status: UserStatus;

    constructor( user: Partial<UpdateUserDto> ) {
        Object.assign( this, user );
    }
}