import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import bcrypt from 'bcrypt';
import CreateUserValidator from "App/Validators/CreateUserValidator";

export default class AuthUsersController {

    public async index() {
        return User.query().select('name', 'email', 'createdAt', 'updatedAt');
    }

    public async register ({ request, response}: HttpContextContract) {

        const data = await request.validate(CreateUserValidator)
    
        await User.create({
            name : data.name,
            email : data.email,
            password : await bcrypt.hash(data.password, 8)
        });

        return response.status(201).json({
            sucess : true,
            data : {}
        })
    }

    public async login({ request }: HttpContextContract) {

        const data = await request.validate(CreateUserValidator)

        return data

    }
}
