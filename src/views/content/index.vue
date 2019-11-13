<template>
    <div>
        <my-header></my-header>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <a href="" style="width: 100%;height: 3rem">
                <img src="./img/index/ban1.jpg" alt="">
                </a>
            </van-swipe-item>
            <van-swipe-item>
                <a href="" style="width: 414px;height:3rem">
                    <img src="./img/index/ban2.jpg" alt="">
                </a>
            </van-swipe-item>
            <van-swipe-item>
                <a href="" style="width: 414px;height: 3rem">
                    <img src="./img/index/ban3.jpg" alt="">
                </a>
            </van-swipe-item>
            <van-swipe-item>
                <a href="" style="width:414px;height:3rem">
                    <img src="./img/index/ban4.jpg" alt="">
                </a>
            </van-swipe-item>
        </van-swipe>
        <div class="jingang">
            <ul class="jingang-list">
                <li class="jingang-item">
                        <div class="img">
                            <img src="img/index/foot.png" alt="">
                        </div>
                        <div class="jingang-text">水果特惠</div>

                </li>
                <li class="jingang-item">
                    <a href="mrbq.html">
                        <div class="img" style="background-color: #E6C3BD">
                            <img src="img/index/today.png" alt="">
                        </div>
                        <div class="jingang-text">每日必抢</div>
                    </a>
                </li>
                <li class="jingang-item">
                    <a href="hcfl.html">
                        <div class="img" style="background-color: #EED0B8">
                            <img src="img/index/fuli.png" alt="">
                        </div>
                        <div class="jingang-text">嗨吃福利</div>
                    </a>
                </li>
                <li class="jingang-item">
                    <a href="fltj.html">
                        <div class="img" style="background-color: #8CB2C5">
                            <img src="img/index/good.png" alt="">
                        </div>
                        <div class="jingang-text">鲜蜂力荐</div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 金刚区结束 -->
        <!-- 特卖开始 -->
        <div class="temai">
            <div class="temai-text">
                <span>品牌特卖</span>
                <i class="iconfont icon-rightarrow"></i>
            </div>
            <div class="temai-img">
                <div class="img-item">
                    <img  src="img/index/special-sale-img1.jpg" alt="">
                </div>
                <div class="img-item">
                    <img  src="img/index/special-sale-img2.jpg" alt="">
                </div>
                <div class="img-item">
                    <img  src="img/index/special-sale-img2.jpg" alt="">
                </div>
            </div>
        </div>
        <div v-if="cateGoods.length" >
        <div class="youxuan" v-for="cate in cateGoods" :key="cate+cate.id" :id="cate.id">
            <div class="temai-text">
                <router-link :to="{path:'/list',query:{id:cate.id}}">
                <span>{{cate.cname}}</span>
                <i class="iconfont icon-rightarrow"></i>
                </router-link>
            </div>
            <div class="temai-img">
                <div class="img-item">
                    <img :src="ImgHostname+cate.thumb"  :alt="cate.cname" :title="cate.cname">
                </div>
            </div>
            <ul class="furit-list">

                <li class="fruit-item" v-for="goods in cate.goods"
                    :key="goods+goods.id" :id="goods.id" >
                    <div class="fruit-img">
                       <img style="height: 1.3rem;width: 1.3rem" :src="ImgHostname+goods.thumb" :alt="goods.gname" :title="goods.gname">
                    </div>
                    <div class="fruit-title" >
                        <router-link  :to="{path:'/detail',query:{id:goods.id}}">
                            <div class="van-ellipsis">{{goods.gname}}</div>
                        </router-link>
                     </div>
                    <div class="fruit-price">￥{{goods.sele}}<del style="font-size: 12px;color: #979797; margin-left:0.04rem;">￥{{goods.gmprice}}</del></div>

                </li>

            </ul>
        </div>
        <!-- 优选结束 -->
        </div>
        <!-- 酒水开始 -->
        <div style="height:0.8rem"></div>
        <my-footer :active=1></my-footer>
    </div>
</template>

<script >
    import MyHeader from '../../components/header/my-header'
    import MyFooter from '../../components/footer/my-footer'
    import  axios from 'axios'
    import {HOSTNAME,SUCCESS,IMGHOSTNAME} from "../../config/base";
    export default {
        name: "index",
        components: {
            MyHeader, MyFooter
        },
        data(){
            return{
                ImgHostname:IMGHOSTNAME,
                cateGoods:[
                ]
            }
        }
        ,methods:{
            getCateGoods(){
                axios.get(HOSTNAME+'/api/index').then(res=>{
                    let data=res.data;
                    if (data.code===SUCCESS){
                        this.cateGoods=data.data;
                    }
                })
            }
        },
        beforeMount() {
           this.getCateGoods()
        }
    }
</script>

<style scoped>
    a{
        color: #232326;
    }
    .van-swipe{
        height: 2.7rem;
        background: aqua;
    }
    .van-swipe,.van-swipe-item,.van-swipe-item a,.van-swipe-item img{
        width: 100%;
        height: 100%;
        display: block;
    }
    body {
        background-color: #F7F7F7;
    }

    html,
    body {
        width: 100%;
    }

    #index-container {
        width: 100%;
        height: calc(100% - 2.28rem);
        position: relative;
        overflow: hidden;
    }

    .big-box {
        width: 100%;
    }

    .hd-right-sousuo>a {
        color: #a8a3a7;
    }

    .mask {
        width: 100%;
        height: 0.4rem;
        background-color: #F7F7F7;
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 999;
        font-size: 0.24rem;
        color: rgb(134, 130, 130);
        text-align: center;
        line-height: 0.4rem;
        padding-top: 0.1rem;
        box-sizing: border-box;
    }

    .mask1 {
        width: 100%;
        height: 0.4rem;
        background-color: #F7F7F7;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        font-size: 0.24rem;
        color: rgb(134, 130, 130);
        text-align: center;
        line-height: 0.4rem;
        padding-bottom: 0.1rem;
    }


    /* 轮播开始 */

    .banner {
        position: relative;
        width: 100%;
        height: 3.2rem;
    }

    .banner-wraper>.img>img {
        width: 100%;
        height: 100%;
    }

    .swiper-pagination {
        position: absolute;
        right: 0.2rem;
        bottom: 0.1rem;
        width: 1.5rem;
        height: 0.28rem;
    }

    .swiper-pagination-bullet {
        width: 0.1rem;
        height: 0.1rem;
        background-color: rgba(255, 255, 255, 1);
        float: left;
        margin: 0 0.12rem;
        border-radius: 50%;
    }

    .swiper-pagination-bullet-active {
        background-color: #000;
    }


    /* 轮播结束 */


    /* 金刚区开始 */

    .jingang {
        width: 100%;
        height: 2.18rem;
        background-color: #fff;
        padding-bottom: 0.3rem;
    }

    .jingang>.jingang-list {
        display: flex;
        justify-content: space-around;
        overflow: hidden;
    }

    .jingang>.jingang-list>.jingang-item {
        width: 25%;
        color: black;
        text-align: center;
        margin-top: 0.3rem;
    }

    .jingang>.jingang-list>.jingang-item>a {
        color: black;
    }

    .jingang-item>a>.img {
        width: 50px;
        height: 50px;
        background-color: #9BCBB5;
        border-radius: 50%;
        margin: 0 auto;
    }

    .jingang-item>a>.jingang-text {
        margin-top: 0.2rem;
        font-size: 0.28rem;
    }

    .jingang-item>a>.img>img {
        width: 0.52rem;
        height: 0.52rem;
        margin-top: 0.24rem;
    }


    /* 金刚区结束 */


    /* 特卖开始 */

    .temai {
        width: 100%;
        height: 3.26rem;
        background-color: #fff;
        margin-top: 0.1rem;
    }

    .temai-text {
        width: 100%;
        height: 0.9rem;
        text-align: center;
        font-size: 0.32rem;
        line-height: 0.9rem;
    }

    .temai-text>i {
        margin-left: 0.1rem;
    }

    .temai>.temai-img {
        width: 100%;
        height: 2.36rem;
        padding: 0 3% 0.2rem 3%;
        box-sizing: border-box;
    }

    .temai>.temai-img>.img-item {
        width: 33.3%;
        float: left;
    }

    .temai>.temai-img>.img-item>img {
        width: 93%;
        display: block;
        margin: 0 auto;
    }


    /* 特卖结束 */


    /* 优选开始 */

    .youxuan {
        width: 100%;
        height: 6rem;
        background-color: #fff;
        margin-top: 0.1rem;
    }

    .youxuan>.temai-img {
        width: 100%;
        height: 2.36rem;
        padding: 0 3% 0.2rem 3%;
        box-sizing: border-box;
    }

    .youxuan>.temai-img>.img-item>img {
        width: 100%;
        height: 2rem;
        border-radius: 1rem;
        display: block;
        margin: 0 auto;
    }

    .furit-list {
        width: 100%;
        height: 3.88rem;
        display: flex;
        justify-content: space-between;
    }

    .furit-list>.fruit-item {
        width: 33.333333%;
    }

    .fruit-item>.fruit-img>img {
        width: 60%;
        display: block;
        margin: 0.01rem auto;
    }

    .fruit-item>.fruit-title {
        width: 100%;
        padding: 0 5%;
        box-sizing: border-box;
        height: 0.8rem;
        line-height: 0.5rem;
        font-size: 0.28rem;
        text-align: center;
        /* overflow: hidden; */
    }

    .fruit-item>.fruit-price {
        width: 100%;
        padding: 0 5%;
        box-sizing: border-box;
        font-size: 14px;
        color: #EA4D13;
        line-height: 0.36rem;
        height: 0.8rem;
        margin-top: 0.16rem;
        text-align: center;
    }

    .fruit-item>.zeng {
        width: 100%;
        height: 0.36rem;
        padding: 0 5%;
        box-sizing: border-box;
    }


    /* 优选结束 */


    /* 底部开始 */


    /* 底部结束 */
</style>
