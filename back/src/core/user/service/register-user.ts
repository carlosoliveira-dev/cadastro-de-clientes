import UseCase from "@/core/shared/use-case"
import Errors from "@/core/shared/errors"
import User from "../model/user"
import RepositoryUser from "./repository-user"

export default class RegisterUser
    implements UseCase<User, void>
{
    constructor(
        private repositorio: RepositoryUser,
    ) {}

    async execute(user: User): Promise<void> {        
        
        const newUser = new User({
            name: user.name,
            email: user.email,
            id: user.id,
            password: user.password
        });

        this.repositorio.add(newUser)
    }
}