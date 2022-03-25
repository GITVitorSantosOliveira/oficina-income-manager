const CreateToken = require("../provider/CreateToken");
const CreateUser = require("../routes/createUser/CreateUser");

class CreateUserController{
  async handle(req, res){
    try {
      const {username,email,password} = req.body;

    if(!username,!email,!password){
      return res.status(400).send("Data is missing");
    }

    const user =await CreateUser.execute(username,email,password);
    const token = await CreateToken.execute(user.id,user.username)
    return res.status(201).send(token)
  
    } catch (error) {
      return res.status(400).json({message: error.message})
    }
}
}

module.exports = new CreateUserController();