import RegisterUser from "@/core/user/service/RegisterUser"
import { Express } from "express"

export default class RegisterUserController {
    constructor(
        readonly server: Express, 
        readonly useCase: RegisterUser
    ) {
        server.post('/api/user/register', async (req, res) => {
            try {
                await useCase.execute({
                    name: req.body.name, 
                    email: req.body.email,
                    password: req.body.password
                })
                res.status(201).send()
            } catch(erro: any) {
                res.status(400).send(erro.message)
            }
        })
    }
}