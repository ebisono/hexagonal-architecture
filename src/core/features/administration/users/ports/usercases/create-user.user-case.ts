import { AlreadyExistsException } from "src/core/exceptions";
import { CreateUserDto, UserResponseDto } from "../../dtos";
import { CreateUserRepository, FindUserRepository } from "../respositories";

export class CreateUserUserCase {

    constructor( 
        private createRepository: CreateUserRepository,
        private findRepository: FindUserRepository
    ){}

    public async createOne( user: CreateUserDto ): Promise<UserResponseDto> {
        const userFound = await this.findRepository.findByUsername( user.username );
        if( userFound.hasOwnProperty('username') ){
            throw new AlreadyExistsException('El usuario ya existe favor verifique los datos he intente de nuevo.');
        }
        return this.createRepository.createOne( user );
    }

    public createMany( users: CreateUserDto[] ): Promise<UserResponseDto[]> {
        return this.createRepository.createMany( users );
    }
}