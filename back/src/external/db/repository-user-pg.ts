import User from "@/core/user/model/user"
import db from "./db"

export default class RepositoryUserPg {
    async add(user: User) {
        await db.query(
            `insert into users
            (id, name, email, password)
            values ($1, $2, $3, $4)`,
            [
                user.id,
                user.name,
                user.email,
                user.password,
            ]
        )
    }
}
