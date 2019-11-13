//Hostname  token loading  响应处理

import axios from 'axios'
import {HOSTNAME} from "../config/base";
import store from "../../src/store/index"
let instance=axios.create({
    baseURL: HOSTNAME,
    timeout:5000,

});
instance.interceptors.request.use(function (config) {
    store.commit('toggleIsShow',true);
    if (store.state.token){
        config.headers={
            token:store.state.token,
            'Content-type':'application/json'
        }
    }
    return config;
}),function (error) {
    store.commit('toggleIsShow',false)
    return Promise.reject(error)
}

instance.interceptors.response.use(function (response) {
    store.commit('toggleIsShow',false);
    return response;
}),function (error) {
    store.commit('toggleIsShow',false)
    return Promise.reject(error)
}
export default instance