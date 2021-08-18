import { FactoryProvider } from "@nestjs/common";

// Importing Repositories Interfaces
import { 
    CreateUserRepository, 
    FindUserRepository, 
    UpdateUserRepository 
} from "src/core/features/administration/users/ports/respositories";

// Importing User Cases
import { 
    CreateUserUserCase, 
    FindUserUserCase, 
    UpdateUserUserCase 
} from "src/core/features/administration/users/ports/usercases";

// Importing Repositories Adapters
import { 
    CreateUserRepositoryAdapter, 
    FindUserRepositoryAdapter, 
    UpdateUserRepositoryAdapter 
} from "src/infrastructure/features/administration/users/repositories";

export const UsersProviders: FactoryProvider[] = [
    {
        provide: 'createUser',
        useFactory: ( createRepository: CreateUserRepository, findRepository: FindUserRepository ) => {
            return new CreateUserUserCase( createRepository, findRepository );
        },
        inject: [CreateUserRepositoryAdapter, FindUserRepositoryAdapter]
    },
    {
        provide: 'updateUser',
        useFactory: ( updateRepository: UpdateUserRepository, findRepository: FindUserRepository ) => {
            return new UpdateUserUserCase( updateRepository, findRepository );
        },
        inject: [UpdateUserRepositoryAdapter, FindUserRepositoryAdapter]
    },
    {
        provide: 'findUser',
        useFactory: ( repository: FindUserRepository ) => {
            return new FindUserUserCase( repository );
        },
        inject: [FindUserRepositoryAdapter]
    }
];