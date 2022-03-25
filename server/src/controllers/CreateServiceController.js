const CreateService = require("../routes/createService/CreateService");

class CreateServiceController{
 async handle(req,res){
   console.log(req.body)
    try {
      const {client,car,date,value,descservice} =  await req.body;
      const {id} = req.user;
      const dataService = {client,car,date,value,descservice}
    if(!dataService){
      res.send('data is missing');
    }
  
  const result = await CreateService.execute(id,client,car,date,value,descservice);
  
  return res.status(201).json(result);
    } catch (error) {
     return res.status(400).send({error: error.message});
    }
  }
}

module.exports = new CreateServiceController();