const { compare } = require("bcryptjs");
const prisma = require("../../prisma");
const CreateToken = require("../../provider/CreateToken");


class Login{
  async execute({username,password}){
    const userAlreadyExists = await prisma.user.findFirst({
      where: {username}
    })
    
    if(!userAlreadyExists){throw new Error("User or password is incorrect")}

    const passwordMatch = compare(password, userAlreadyExists.password)

    if(!passwordMatch){throw new Error("User or password is incorrect")}

    const token = await CreateToken.execute(userAlreadyExists.id,userAlreadyExists.username)

    // const refreshToken = await CreateRefreshToken.execute(userAlreadyExists.id)

    return {token}
  }
}

module.exports = new Login();