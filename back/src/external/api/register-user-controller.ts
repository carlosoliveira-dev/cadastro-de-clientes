import User from "@/core/user/model/user"
import RegisterUser from "@/core/user/service/register-user"
import { Express } from "express"

export default class RegisterUserController {
    constructor(
        server: Express,
        usecase: RegisterUser
    ) {
        server.post('/api/usuarios/registrar', async (req, resp) => {
            try {
                await usecase.execute({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                } as User)
                resp.status(201).send()
            } catch(erro: any) {
                resp.status(400).send(erro.message)
            }
        })
    }
}