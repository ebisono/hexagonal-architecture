import { UserResponseDto } from "../../dtos";

export interface FindUserRepository {
    
    findOne( id: number ): Promise<UserResponseDto>;

    findByUsername( username: string ): Promise<UserResponseDto>;

    findAll(): Promise<UserResponseDto[]>;
}