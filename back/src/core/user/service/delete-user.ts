import UseCase from "@/core/shared/use-case"
import RepositoryUser from "./repository-user"

export default class DeleteUser
    implements UseCase<string, void>
{
    constructor(
        private repositorio: RepositoryUser,
    ) {}

    async execute(id: string): Promise<void> {        
        
        this.repositorio.delete(id)
    }
}