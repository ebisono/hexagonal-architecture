import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateUserDto, UserResponseDto } from "src/core/features/administration/users/dtos";
import { UpdateUserRepository } from "src/core/features/administration/users/ports/respositories";
import { Repository } from "typeorm";
import { UserEntity } from "../user.entity";
import { UserMapper } from "../user.mapper";

@Injectable()
export class UpdateUserRepositoryAdapter implements UpdateUserRepository {

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>
    ){}

    public async updateOne( user: UpdateUserDto ): Promise<UserResponseDto> {
        const entity = UserMapper.toEntity( user );
        const userUpdated = await this.repository.save( entity );
        return UserMapper.toResponseDto( userUpdated );
    }

    public async updateMany( users: UpdateUserDto[] ): Promise<UserResponseDto[]> {
        const entities = users.map( UserMapper.toEntity );
        const usersUpdated = await this.repository.save( entities );
        return usersUpdated.map( UserMapper.toResponseDto );
    }

}