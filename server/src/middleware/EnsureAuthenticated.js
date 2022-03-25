const { verify } = require("jsonwebtoken")


module.exports = function EnsureAuthenticated(req, res, next){
  
  const reqToken = req.headers.authorization

  if(!reqToken){return res.status(401).send({reqtoken: "No have token"})}

  const [,token] = reqToken.split(" ")
  
  try {
    const {user} = verify(token, process.env.SECRET_KEY)
    req.user = user;
    return next()
  } catch (error) {
    return res.status(401).send({message: error.message})
    
  }
}