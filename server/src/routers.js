const {Router} = require('express')
const CreateServiceController = require('./controllers/CreateServiceController')
const LoginController = require('./controllers/LoginController')
const CreateUserController = require('./controllers/CreateUserController')
const EnsureAuthenticated = require('./middleware/EnsureAuthenticated')
const ServicesController = require('./controllers/ServicesController')
const routers = Router()

routers.post('/createuser', CreateUserController.handle)
routers.post('/login', LoginController.handle)
routers.post('/createservice',EnsureAuthenticated, CreateServiceController.handle)
routers.get('/getallservices', ServicesController.handle)
module.exports = {routers}