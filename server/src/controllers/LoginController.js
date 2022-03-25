const Login = require("../routes/login/Login");


class LoginController{
  async handle(req, res){
    const {username,password} = req.body;

    if(!username,!password){throw new Error("data is missing");}

    const token = await Login.execute({username,password});

    res.status(200).json(token)
  }
}

module.exports = new LoginController();