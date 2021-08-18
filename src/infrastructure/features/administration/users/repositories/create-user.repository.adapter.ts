import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto, UserResponseDto } from "src/core/features/administration/users/dtos";
import { CreateUserRepository } from "src/core/features/administration/users/ports/respositories";
import { Repository } from "typeorm";
import { UserEntity } from "../user.entity";
import { UserMapper } from "../user.mapper";

@Injectable()
export class CreateUserRepositoryAdapter implements CreateUserRepository {

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>
    ){}

    public async createOne( user: CreateUserDto ): Promise<UserResponseDto> {
        //try {
            const entity = UserMapper.toEntity( user );
            const userCreated = await this.repository.save( entity );
            return UserMapper.toResponseDto( userCreated );
        /*} catch( e ){
            console.log(`Error Desde el repositorio`);
            console.log( e.parameters );
            console.log( e.code );
            console.log( e.errno );
            console.log( e.sqlMessage );
            console.log( e.sql );
        }*/
    }

    public async createMany( users: CreateUserDto[] ): Promise<UserResponseDto[]> {
        const entities = users.map( UserMapper.toEntity );
        const usersCreated = await this.repository.save( entities );
        return usersCreated.map( UserMapper.toResponseDto );
    }

}