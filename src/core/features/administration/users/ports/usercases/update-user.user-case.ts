import { AlreadyExistsException, ResourceNotFoundException } from "src/core/exceptions";
import { UpdateUserDto, UserResponseDto } from "../../dtos";
import { FindUserRepository, UpdateUserRepository } from "../respositories";

export class UpdateUserUserCase {

    constructor( 
        private updateRepository: UpdateUserRepository,
        private findRepository: FindUserRepository
    ){}

    public async updateOne( user: UpdateUserDto ): Promise<UserResponseDto> {

        // Verificando que el usuairo existe
        const userFound = await this.findRepository.findOne( user.id );
        if( !userFound.hasOwnProperty('id') ){
            throw new ResourceNotFoundException('El usuario no existe!, Verifique los datos e intente de nuevo.');
        }

        // Verificando que la cuenta que se esta intentando establecer
        // no pertenece a otro usuairo
        const userAcount = await this.findRepository.findByUsername( user.username );
        if( userAcount.hasOwnProperty('id') && userAcount.id !== user.id ){
            throw new AlreadyExistsException('Lo sentimos!, La cuenta de usuario suministrada no está disponible.');
        }

        return this.updateRepository.updateOne( user );
    }

    public updateMany( users: UpdateUserDto[] ): Promise<UserResponseDto[]> {
        return this.updateRepository.updateMany( users );
    }
}