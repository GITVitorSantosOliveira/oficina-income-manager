const dayjs = require("dayjs");
const prisma = require("../prisma");


class CreateRefreshToken{
  async execute(user_id){
    try {
      const expiresIn = await dayjs().add(10,"m").unix();
    const createRefreshToken = await prisma.refreshToken.create({
      data:{
        user_id,
        expiresIn
      }
    })

    return createRefreshToken
    } catch (error) {
      return error.message
    }
  }
}

module.exports = new CreateRefreshToken();