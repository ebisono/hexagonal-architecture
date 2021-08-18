import { UserStatus } from "../enums";

export class UserResponseDto {

    id: number;

    name: string;

    lastName: string;
    
    username: string;

    status: UserStatus;

    createdAt: Date;

    updatedAt: Date;

    constructor( user?: Partial<UserResponseDto> ) {
        Object.assign( this, user );
    }
}