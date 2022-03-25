const prisma = require("../../prisma");


class Services{
  async execute(req_,res){
    try {
      const services = await prisma.service.findMany()
      if(!services){return res.status(404).send("service data not found")}
    return services 
    } catch (error) {
     return res.send({message: error.message})
    } 
  }
}

module.exports = new Services()