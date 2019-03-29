const serviceModule = {
  baseURL: process.env.NODE_ENV === 'production' ?
    "http://api.mi-mouse.com/"
    :
    "http://api.mi-mouse.com/",
  getUserInfo: {
  },
  login:{
    url: 'app/login/user_login', 
    method: 'get'
  }

}
const Api = { ...serviceModule }

export default Api