import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { commonFields } from "../../common";

export class createUserTable1628729429567 implements MigrationInterface {

    private tableName = 'users';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {
                        name: 'user_id',
                        type: 'integer',
                        isPrimary: true,
                        generationStrategy: 'increment',
                        isGenerated: true,
                        isNullable: false
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '60',
                        isNullable: false
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                        length: '60',
                        isNullable: false
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                        length: '60',
                        isNullable: false
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    { 
                        name: 'status', 
                        type: 'enum', 
                        enum: ['Activo', 'Inactivo', 'Bloqueado', 'Pendiente']
                    },
                    ...commonFields
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable( this.tableName, true );
    }

}
