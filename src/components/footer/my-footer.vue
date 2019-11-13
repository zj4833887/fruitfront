<template>
    <div class="footer">
        <ul class="footer-list">
            <li class="footer-item" >
                <router-link :to="{name:'index'}" :class="{'acti':this.active==1}">
                    <i class="iconfont  icon-shouye"></i>
                    <div class="footer-text">首页</div>
                </router-link>
            </li>
            <li class="footer-item">
                <router-link :to="{name:'classes'}" :class="{'acti':this.active==2}">
                    <i class="iconfont icon-sousuo"></i>
                    <div class="footer-text">分类</div>
                </router-link>
            </li>
            <li class="footer-item" :class="{'acti':active==3}">
                <router-link :to="{name:'shopping'}" :class="{'acti':this.active==3}">
                    <i class="iconfont icon-gouwuche1"></i>
                    <div class="footer-text">购物车</div>
                </router-link>
            </li>
            <li class="footer-item" :class="{'acti':active==4}">
                <router-link :to="{name:'my'}" :class="{'acti':this.active==4}">
                    <i class="iconfont icon-wode"></i>
                    <div class="footer-text">我的</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "my-footer",
        props:{
            active:{
                type:Number,
                default:1
            }
        }
    }
</script>

<style>
    .footer {
        width: 100%;
        position: fixed;
        bottom: 0px;
        left: 0px;
        z-index: 99;
        height: 1rem;
        background: #FFF;
        border-top: 1px solid #DCDCDC;
    }

    .footer-list {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }

    .footer-list>.footer-item {
        width: 25%;
        height: 100%;
    }

    .footer-list>.footer-item>a {
        color: #232326;
        text-align: center;
        font-size: 0.26rem;
        /* line-height: 1.2rem; */
    }

    .footer-list>.footer-item>a>i {
        font-size: 0.42rem;
        width: 0.42rem;
        height: 0.42rem;
        display: block;
        margin: 0.1rem auto;
    }
    .footer-list>.footer-item .acti{
        color: yellowgreen;
    }
</style>