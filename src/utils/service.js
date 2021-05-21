import axios from "axios";


const service = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  headers:{
    "Content-Type":"application/json;charset=utf-8hou"
  }

})
// /*
//   请求拦截
//  */
// service.interceptors.request.use((config)=>{
//   if (getToken()){
//     config.headers['token']=getToken();
//   }
//   return config;
// },(error)=>{
//   return Promise.reject(error);
// })
// /**
//  * 响应拦截
//  */
// service.interceptors.response.use((response)=>{
//     const res= response;
//     if (!(res.data.success)){
//       Message({
//         type: 'error',
//         message: res.data.message ||'请求错误',
//       });
//       location.reload();
//       return  Promise.reject(new Error(res.data.message ||'请求错误'));
//     }else {
//       return  res;
//     }
//   },(error)=>{
//     Message({
//       type: 'error',
//       message:error.message,
//     })
//     location.reload();
//     return Promise.reject(error);
//   }
// )

export default service;
