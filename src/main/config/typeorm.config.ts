import {ConfigService} from "@nestjs/config";
import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const defaultConnection = (config: ConfigService): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: config.get('TYPEORM_HOST'),
    port: config.get('TYPEORM_PORT'),
    username: config.get('TYPEORM_USERNAME'),
    password: config.get('TYPEORM_PASSWORD'),
    database: config.get('TYPEORM_DATABASE'),
    autoLoadEntities: config.get('TYPEORM_AUTOLOAD'),
    synchronize: config.get('TYPEORM_SYNCRONIZE') === 'true',
    logging: config.get('TYPEORM_LOGGING') === 'true'
});