<template>
    <div>
        <div class="big-box">
            <!-- 头部的开始 -->
            <div class="big-banner">
                <img src="../../assets/my/大banner.jpg" alt="">
                <div class="banner-box">
                    <div class="banner-box1">
                        <img src="../../assets/my/timg1.jpg" alt="">
                    </div>
                    <div class="Set-up">
                        <router-link  :to="{path:'/set'}">
                        <van-icon name="hot-o" />
                        </router-link>
                    </div>
                    <div class="banner-box2">
                        <span>www.jsdaima.com</span>
                    </div>
                </div>
            </div>
            <!-- 头部的结束 -->
            <!-- 待付款部分开始 -->
            <div class="pay-box">
                <a href="buylist.html" class="pay-box1">
                    <img src="../../assets/my/personal-center-img1.png" alt="">
                    <span>待付款</span>
                </a>
                <a href="buylist.html" class="pay-box1">
                    <img src="../../assets/my/personal-center-img2.png" alt="">
                    <span>待发货</span>
                </a>
                <a href="buylist.html" class="pay-box1">
                    <img src="../../assets/my/personal-center-img3.png" alt="">
                    <span>待收货</span>
                </a>
                <a href="buylist.html" class="pay-box1">
                    <img src="../../assets/my/personal-center-img4.png" alt="">
                    <span>待评价</span>
                </a>
                <a href="buylist.html" class="pay-box1">
                    <img src="../../assets/my/personal-center-img5.png" alt="">
                    <span>全部订单</span>
                </a>
            </div>
            <!-- 待付款部分结束 -->
            <!-- 优惠卷的开始 -->
            <div class="person-juan">
                <a href="yhj.html" class="juan-box1">
                    <img src="../../assets/my/personal-center-img12.png" alt="">
                    <span>售后服务</span>
                </a>
            </div>
            <!-- 优惠卷的结束 -->
            <!-- 收获地址的开始 -->
            <div class="person-juan">
                <router-link  :to="{path:'/address'}" class="juan-box1">
                    <img src="../../assets/my/personal-center-img11.png" alt="">
                    <span>收货地址</span>
                </router-link>
            </div>
            <!-- 收获地址的结束 -->
            <!-- 售后服务的开始 -->
            <div class="person-juan">
                <a href="afterSale.html" class="juan-box1">
                    <img src="../../assets/my/personal-center-img12.png" alt="">
                    <span>售后服务</span>
                </a>
            </div>
            <!-- 售后服务的结束 -->
            <!-- 退出登录的开始 -->
            <div class="person-last">
       <router-link :to="{name:'login'}">
           <span>登录</span>
       </router-link>
            </div>
            <!-- 退出登录的结束 -->
        </div>

        <!-- 底端部分的开始 -->
        <Mydetail :active=4></Mydetail>

    </div>

</template>

<script>
    import {querydetail} from '../../api/users';
    import {SUCCESS} from "../../config/base";
    import { Toast } from 'vant';
    import Mydetail from  '../../components/footer/my-footer';

    export default {
        name: "my",
        components: {
            Mydetail
        },
        methods:{
            setDetail(){
                querydetail('api/user/112').then(res=>{
                  let {code,msg,data} =res;
                  if (code==SUCCESS){
                      this.detail=data;
                      Toast(msg);
                  }
                })
            }
        },
        beforeMount(){
            this.setDetail();
        }
    }
</script>

<style scoped>
    @import "../../style/css/my.css";

</style>