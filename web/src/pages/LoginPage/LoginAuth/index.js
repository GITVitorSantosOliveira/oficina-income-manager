import { api } from "../../../services/api";


class LoginAuth{
  async execute(user,pass){
    try {
      let pageTrue = Boolean;
      const userData = await api.post('/login',{
        username:user,
        password:pass
      }).then((res)=>{
        if(res.status === 400 || res.data === undefined){return pageTrue = false}
        return res?.data
      })

      pageTrue = true
      return {userData,pageTrue}
    } catch (error) {
      return {message: error.message}
    }
  }
}

export default new LoginAuth();