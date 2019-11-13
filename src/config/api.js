//封装fetch
// params:
// methods :请求方式  string 必填
// GET POST PUT DELETE
// URL:地址 String 必填
// data: 数据 对象
// object.key({})获取对象的属性
//用json.stringify({})转换一下，判断字符串是否相等
import {SUCCESS, HOSTNAME} from "./base";

function api(method, url, data) {
    method = method.toUpperCase().trim();
    let token = sessionStorage.getItem('token')
    let headers = {
        token
    }
    let option = {
        method,
        headers
    }
    //data
    //GET DELETE=>headers
    //1.api(get,'',{limit:'',page:''})api/cate?page=10&&limit=10
    // 2.api(get,'')
    //3.api(get,'',{})

    // 1.api('post',api/goods,{gname,thumb})
    // 1.api('post',api/goods/12,{gname,thumb})
    if (method === 'GET' && data && Object.keys(data).length) {
        let str = '?'
        for (let i in data) {
            str += `${i}=${data[i]}&`;
        }
        str = str.slice(0, -1);
        url += str;
    }
    if (method === 'POST' || method === 'PUT') {
        headers = {
            'Content-type': 'application/json'
        };
        option.body = JSON.stringify(data)
    }
    option.headers = headers;
    url = HOSTNAME + url
    let promise = new Promise((resolve, reject) => {
        fetch(url, option).then(res => res.json())
            .then(data => {
                let {code} = data;
                if (code == SUCCESS) {
                    resolve(data);
                } else {
                    reject(data)
                }

            })
    });
    return promise;
}

export {api}