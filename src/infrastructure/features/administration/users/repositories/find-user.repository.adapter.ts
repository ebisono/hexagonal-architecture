import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserResponseDto } from "src/core/features/administration/users/dtos";
import { FindUserRepository } from "src/core/features/administration/users/ports/respositories";
import { Repository } from "typeorm";
import { UserEntity } from "../user.entity";
import { UserMapper } from "../user.mapper";

@Injectable()
export class FindUserRepositoryAdapter implements FindUserRepository {

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>
    ){}

    public async findOne( id: number ): Promise<UserResponseDto> {
        const user = await this.repository.findOne({ id });
        return UserMapper.toResponseDto( user );
    }

    public async findByUsername( username: string ): Promise<UserResponseDto> {
        const user = await this.repository.findOne({ username });
        return UserMapper.toResponseDto( user );
    }

    public async findAll(): Promise<UserResponseDto[]> {
        const users = await this.repository.find();
        return users.map( UserMapper.toResponseDto );
    }

}