import { CreateUserDto, UpdateUserDto, UserResponseDto } from "src/core/features/administration/users/dtos";
import { UserEntity } from "./user.entity";

export class UserMapper {

    public static toResponseDto( entity: UserEntity ): UserResponseDto {
        return new UserResponseDto( entity );
    }

    public static toEntity( dto: CreateUserDto | UpdateUserDto ): UserEntity {
        return new UserEntity( dto );
    }
    
}