const Services = require("../routes/services/services");


class ServicesController{
  async handle(req, res){
    try {

      const services = await Services.execute()
      return res.status(201).json(services);

    } catch (error) {
      return res.status(400).send({message: error.message})
    }
  }
}

module.exports = new ServicesController()