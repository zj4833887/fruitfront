import  instance from './http'

function register(url,data) {
  return  instance.post(url,data);
}
function login(url,data) {
    return instance.post(url,data)
}
function querydetail(url) {
    return instance.get(url)
    
}
export {register,login,querydetail}