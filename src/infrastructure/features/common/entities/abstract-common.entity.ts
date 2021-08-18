import { Column } from "typeorm";

export abstract class AbstractCommonEntity {
    
    @Column({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt:Date;

    @Column({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt:Date;

    constructor( entity: Partial<AbstractCommonEntity> ){
        Object.assign( this, entity );
    }
}