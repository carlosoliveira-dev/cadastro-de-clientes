import User from "@/core/user/model/user"
import RepositoryUser from "@/core/user/service/repository-user"
import db from "./db"

export default class RepositoryUserPg implements RepositoryUser{
    async delete(id: string) {
        await db.query(
            `DELETE FROM users WHERE id = $1`,
            [id]
        )
    }
    async add(user: User) {
        await db.query(
            `insert into users
            (name, email, password)
            values ($1, $2, $3)`,
            [
                user.name,
                user.email,
                user.password,
            ]
        )
    }
}
