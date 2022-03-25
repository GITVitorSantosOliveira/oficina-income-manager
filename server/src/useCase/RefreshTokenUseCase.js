const prisma = require("../../prisma");
const CreateToken = require("../provider/CreateToken");

class RefreshTokenUseCase{
  async execute(refresh_token){
    const refreshToken = await prisma.refreshToken.findFirst({
      where: {
        id: refresh_token
      }
    })

    if(!refreshToken){throw new Error("Refresh Token Invalid")}

    const token = await CreateToken.execute(refreshToken.user_id)

    return {token}
  }
}

module.exports = new RefreshTokenUseCase();