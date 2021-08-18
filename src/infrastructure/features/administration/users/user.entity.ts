import { UserStatus } from "src/core/features/administration/users/enums";
import { AbstractCommonEntity } from "src/infrastructure/features/common/entities";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users'})
export class UserEntity extends AbstractCommonEntity {

    @PrimaryGeneratedColumn({
        name: 'user_id',
        type: 'integer'
    })
    id?: number;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 60,
        nullable: false
    })
    name: string;

    @Column({
        name: 'last_name',
        type: 'varchar',
        length: 60,
        nullable: false
    })
    lastName: string;

    @Column({
        name: 'username',
        type: 'varchar',
        length: 60,
        nullable: false
    })
    username: string;

    @Column({
        name: 'password',
        type: 'varchar',
        length: 255,
        nullable: false
    })
    password: string;

    @Column({
        name: 'status',
        type: 'enum',
        enum: UserStatus,
        nullable: false
    })
    status: UserStatus;

    constructor( user?: Partial<UserEntity> ){
        super(user);
        Object.assign( this, user );
    }
}