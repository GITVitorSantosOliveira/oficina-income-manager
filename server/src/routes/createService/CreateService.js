const prisma = require("../../prisma")

class CreateService{
  async execute(user_id,client,car,date,value,descservice){

    const result = await prisma.service.create({
      data:{
        user_id,client,car,date,value,descservice
      },
      include:{
        user: true
      }
    })

    return result
  }
}

module.exports = new CreateService()