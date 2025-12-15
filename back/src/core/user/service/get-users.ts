import UseCase from "@/core/shared/use-case"
import RepositoryUser from "./repository-user"
import User from "../model/user"

export default class GetUsers
    implements UseCase<void, [User]>
{
    constructor(
        private repositorio: RepositoryUser,
    ) {}

    async execute(): Promise<[User]> {        
        
        return this.repositorio.users()
    }
}