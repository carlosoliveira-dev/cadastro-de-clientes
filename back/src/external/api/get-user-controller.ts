import User from "@/core/user/model/user"
import DeleteUser from "@/core/user/service/delete-user"
import GetUsers from "@/core/user/service/get-users";
import { Express } from "express"

export default class GetUsersController {
    constructor(
        server: Express,
        usecase: GetUsers
    ) {
        server.get('/api/usuarios', async (req, resp) => {
            try {
                const users = await usecase.execute()
                resp.status(200).json(users).send()
            } catch(erro: any) {
                resp.status(400).send(erro.message)
            }
        })
    }
}