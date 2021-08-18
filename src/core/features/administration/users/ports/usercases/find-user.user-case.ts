import { UserResponseDto } from "../../dtos";
import { FindUserRepository } from "../respositories";

export class FindUserUserCase {

    constructor( private repository: FindUserRepository ){}

    public findOne( id: number ): Promise<UserResponseDto> {
        return this.repository.findOne( id );
    }

    public findByUsername( username: string ): Promise<UserResponseDto>{
        return this.repository.findByUsername( username );
    }

    public findAll(): Promise<UserResponseDto[]> {
        return this.repository.findAll();
    }
    
}