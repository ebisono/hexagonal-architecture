import { Body, Controller, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto, UserResponseDto } from "src/core/features/administration/users/dtos";
import { FindUserUserCase, UpdateUserUserCase } from "src/core/features/administration/users/ports/usercases";
import { CreateUserUserCase } from "src/core/features/administration/users/ports/usercases/create-user.user-case";

@Controller('/user')
export class UserController {

    constructor(
        @Inject('createUser') private createUser: CreateUserUserCase,
        @Inject('updateUser') private updateUser: UpdateUserUserCase,
        @Inject('findUser') private findUser: FindUserUserCase
    ){}

    @Get()
    public getAll(): Promise<UserResponseDto[]> {
        return this.findUser.findAll();
    }

    @Get('/:id')
    public getById(
        @Param('id') id: number
    ): Promise<UserResponseDto> {
        return this.findUser.findOne( id );
    }

    @Post()
    public create(
        @Body() user: CreateUserDto
    ): Promise<UserResponseDto> {
        return this.createUser.createOne( user );
    }

    @Put()
    public update(
        @Body() user: UpdateUserDto
    ): Promise<UserResponseDto> {
        return this.updateUser.updateOne( user );
    }
}