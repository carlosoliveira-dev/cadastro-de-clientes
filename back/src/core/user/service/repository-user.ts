import User from "../model/user"

export default interface RepositoryUser {
    add(user: User): Promise<void>
}