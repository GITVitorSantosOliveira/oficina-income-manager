const { sign } = require("jsonwebtoken");


class CreateToken{
  async execute(user_id,username){
    try {
      const token = sign({
        user:{
          id: user_id,
          username: username
        }
      },
      process.env.SECRET_KEY,
      {
        subject: user_id,
        expiresIn: 60000
      }
      )
  
      return token
    } catch (error) {
      return {error: error.message}
    }
  }
}

module.exports = new CreateToken();