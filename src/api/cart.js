import instance from './http'

function addCart(url,data) {
    return instance.post(url,data);
}
function getCart(url) {
    return instance.get(url)
}
export {addCart,getCart}