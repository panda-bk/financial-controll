import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor (protected ctx: HttpContextContract) {
  }
  public schema = schema.create({
	name: schema.string({ trim: true }),
	email: schema.string({ escape: true }, [
		rules.email(),
		rules.unique({ table: 'users', column: 'email' })
	]),


	password: schema.string({ escape: true })
  })

  public messages = {}
}
