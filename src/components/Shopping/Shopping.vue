<template>
    <div>
        <div class="big-box">
            <div class="big-box">
                <div class="header">
                    <!--<a href="#" class="fanhui">-->
                    <!--<img src="../../assets/arrow-left.png" alt="">-->
                    <!--</a>-->
                    <span>购物车</span>
                    <span class="right-shop-cart">编辑</span>
                </div>
                <!-- 购物车头部导航结束 -->
                <!-- 购物车中间部分开始 -->
                <div class="shop-box" v-if="cart" >
                    <div class="car-title">先锋侠需要您的精确坐标</div>
                    <div class="cart-title">收货时间
                        <i>今天30分钟可送达(可预订)</i>
                    </div>
                    <div class="bao">
                        <div class="list-box-shop1">
                            <div class="list-box-shop2">
                                <div class="zongtihezi-1">
                                    <div class="one-quan">
                                        <div class="quanquan">
                                            <img  src="../../assets/shopping/check4.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <span class="ziyingsp">自营商品</span>
                            </div>

                            <!-- 第一个商品开始 -->
                            <div class="index-goods"   v-for="(goods,index) in cart.goods" :key="index">
                                <div class="span-shopthree">
                                    <div class="zongtihezi-1">
                                        <div class="two-quan">
                                                <img style="width: 0.4rem" :style="{display:goods.stat?'block':'none'}" src="../../assets/shopping/check4.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="shop-img">
                                    <img :src="imghostname+goods.thumb" alt="">
                                </div>
                                <div class="bottom-goods-textbox">
                                    <span class="onetext">{{goods.gname}}</span>
                                    <div class="price-text">
                                        ￥
                                        <i class="price-jine" id="one-money">{{goods.sele}}</i>
                                    </div>
                                    <div class="shop-cart-box4">
                                        <div class="left-tubiao"></div>
                                        <div id="tb-count" class="numebr">
                                            {{goods.num}}
                                        </div>
                                        <!--<input type="tel" size="4" value="1" >-->
                                        <div class="right-tbiao" @click="addGoods(goods)"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- 第二个商品开始 -->

                            <!-- 本店总计部分开始 -->
                            <div class="totai">
                                本店总计: ￥
                                <span class="wenzidibu">{{cart.price}}</span>
                            </div>
                            <!-- 底部开始 -->
                            <div class="shop-bottom2">
                                <div class="chekall">
                                    <div class="zongtihezi-1">
                                        <div class="four-quan">
                                            <div class="quanquan-four">
                                                <!--<img src="./img/check4.png" alt="">-->
                                            </div>
                                        </div>
                                    </div>
                                    <span>全选</span>
                                </div>
                                <span class="text3">合计:￥</span>
                                <span id="AllTotal" class="text4">{{cart.price}}</span>
                                <span class="text3">总数:</span>
                                <span id="AllTotal1" class="text4">{{cart.total}}</span>
                                <a href="ddxq.html" class="scrart-totai-text6">
                                    <span>去结算</span>
                                </a>
                                <span class="delete"></span>
                            </div>
                        </div>
                    </div>
                    <!-- 公共部分底部开始 -->
                    <div v-if="!cart">购物车空空如也</div>
                    <MyFooter :active="3"></MyFooter>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MyFooter from '../../components/footer/my-footer'
    import {IMGHOSTNAME} from "../../config/base";
    import {addCart} from "../../api/cart";
    import {SUCCESS} from "../../config/base";
    // import {mapState} from "vuex"
    export default {
        name: "Shopping",
        components: {
            MyFooter
        },
        data() {
            return {
                imghostname:IMGHOSTNAME,
                cart:null,
            }
        },
        // computed: {
        //     ...mapState['cart']
        // }
        methods:{
            addGoods(item){
                let {gid,sele,gname,thumb}=item;
                addCart('/api/cart',{gid,price:sele}).then(res=>{
                    if (res.data.code==SUCCESS){
                        //修改Vuex cort
                        let {uid,cid}=res.data.data;
                        this.$store.commit('incGoods',{uid,cid,gid,sele,gname,thumb});
                        this.$store.commit('calcTotal');
                    }
                })
            },
        },

        beforeMount() {
            this.cart=this.$store.state.cart;
            console.log(this.cart);
        }

    }
</script>

<style scoped>
    @import "../../style/css/shopping cart.css";
</style>