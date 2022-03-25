import RegisterPageService from "../services/RegisterPage/RegisterPageService";

class RegisterPageController{
  async handle(username,email,password){
    try {
    const {token} = await RegisterPageService.execute(username,email,password)
    if(token === undefined){return false }
    localStorage.setItem("oficina-income-manager",token);
      return true;
  } catch (error) {
      return {message:error.message}
    }
  }
}

export default new RegisterPageController();