import User from "@/core/user/model/user"
import DeleteUser from "@/core/user/service/delete-user"
import { Express } from "express"

export default class DeleteUserController {
    constructor(
        server: Express,
        usecase: DeleteUser
    ) {
        server.delete('/api/usuarios/:id', async (req, resp) => {
            
            const { id } = req.params;
            try {
                await usecase.execute(id)
                resp.status(204).send()
            } catch(erro: any) {
                resp.status(400).send(erro.message)
            }
        })
    }
}