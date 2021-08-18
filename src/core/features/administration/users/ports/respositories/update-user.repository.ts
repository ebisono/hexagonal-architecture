import { UpdateUserDto, UserResponseDto } from "../../dtos";

export interface UpdateUserRepository {

    updateOne( user: UpdateUserDto ): Promise<UserResponseDto>;

    updateMany( users: UpdateUserDto[] ): Promise<UserResponseDto[]>;
}