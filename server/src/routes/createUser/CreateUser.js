const prisma = require("../../prisma");
const {hash} = require("bcryptjs");
const res = require("express/lib/response");
class CreateUser{
  async execute(username,email,password,){
      const userAlreadyExists = await prisma.user.findFirst({
        where:{email}
      })
  
      if(userAlreadyExists){
        throw new Error('Email already exists')
      }
      
      const passwordHash = await hash(password,8)
      const user = await prisma.user.create({
        data:{username,email,password:passwordHash}
      })
  
      return user
  }
}

module.exports = new CreateUser()