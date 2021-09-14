import Route from '@ioc:Adonis/Core/Route'

Route.post('/register', 'AuthUsersController.register')

Route.get('/users', 'AuthUsersController.index')