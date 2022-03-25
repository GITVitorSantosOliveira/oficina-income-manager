import {api} from '../api'

class RegisterPageService{
  async execute(username,email,password){
        const user = await api.post('/createuser',{
          username,email,password
        }).then(response =>{
          return response.data
        })
        return user
  }
}

export default new RegisterPageService();