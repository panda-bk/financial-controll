import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import bcrypt from 'bcrypt';


export default class AuthUsersController {

    public async index() {
        return User.all();
    }

    public async register ({ request}: HttpContextContract) {

        const data = request.all()
        const user = new User();

        user.name = data.name;
        user.email = data.email;
        user.password = await bcrypt.hash(data.password, 8);

        return await user.save();
    }
}
