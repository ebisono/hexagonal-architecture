import { CreateUserDto, UserResponseDto } from "../../dtos";

export interface CreateUserRepository {

    createOne( user: CreateUserDto ): Promise<UserResponseDto>;
    
    createMany( users: CreateUserDto[] ): Promise<UserResponseDto[]>;
}