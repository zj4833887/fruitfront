import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import {SUCCESS} from "../config/base";
import {getCart} from "../api/cart";

Vue.use(Vuex);
//store 数据唯一来源
//mutations 状态修改的唯一方法

let store = new Vuex.Store({
    state: {
        token: '',
        isShow: false,
        cart: null,
    },
    getters: {
        goodsNumber: function (state) {
            return function (gid) {
                let num = 0;
                if (!state.cart) {
                    return num;
                }
                let goods = state.cart.goods.filter(ele => ele.gid == gid)[0];
                if (goods) {
                    num = goods.num;
                    console.log(num);
                }
                return num;
            }
        }
    },
    goodsTotal(state) {
        if (!state.cart) {
            return
        }
        return state.cart.total;
    },
    cartPrice(state) {
        if (!state.cart) {
            return
        }
        return state.cart.price;
    },

    mutations: {
        changeToken(state, token) {
            // 变更状态
            state.token = token
        },
        toggleIsShow(state, bool) {
            state.isShow = bool;
        },
        setCart(state, cart) {
            state.cart = cart;
        },
        incGoods(state, pavload) {
            //判断是否存在购物车
            let {gid, gname, thumb, sele, uid, cid} = pavload;
            if (!state.cart) {
                //初始化

                state.cart = {
                    cid,
                    uid,
                    total: 1,
                    price: sele,
                    goods: []
                };
            }
            //是否存在当前商品
            let goods = state.cart.goods.filter(ele => ele.gid == gid)[0];
            if (goods) {
                goods.num++;
            } else {
                state.cart.goods.push({
                    'gid': gid, num: 1, status: 1, gname, thumb, sele
                });
            }
        },
        //商品总数
        calcTotal(state) {
            let total = 0;
            let goods = state.cart.goods.filter(ele => ele.status);
            if (goods.length) {
             total=goods.reduce((prev, current) => prev + current.num,0)
            }
            state.cart.total=total
        },
        //商品总价
        calcPrice(state){
            let total = 0;
            let goods = state.cart.goods.filter(ele => ele.status);
            if (goods.length){
                total= goods.reduce(function (prev,current) {
                    prev+current.num+current.price
                },0)
            }
            state.cart.price=total
        }
    },
    actions: {
        setCart(context) {
            getCart('/api/cart/12').then(res => {
                console.log(res);
                if (res.data.code == SUCCESS && res.data.data) {
                    let data = res.data.data ? res.data.data : null;
                    context.commit('setCart', data);

                }
            })
        }
    },
    plugins: [createPersistedState()]

});
export default store;