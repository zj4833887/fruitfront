<template>
    <div>
        <!-- 头部开始 -->
        <div class="hd">
            <div class="hd-left-address">
                <i class="iconfont icon-dizhi"></i>
                <div class="address-text">地址</div>
            </div>
            <div class="hd-middle-position">
                <span class="position-text" style="font-size: 0.32rem;color:#000; line-height: 0.8rem">北京石景山</span>
                <i class="iconfont icon-ico_arrows_unfold" style="font-size: 0.32rem;margin-left: 0.02rem;color: rgb(94, 94, 95);"></i>
            </div>
            <div class="hd-right-sousuo">
                <a href="sousuo.html">
                    <i class="iconfont icon-sousuo"></i>
                    <div class="sousuo-text">搜索</div>
                </a>
            </div>
        </div>
        <!-- 头部结束 -->
        <div class="kong" style="height: 1.3rem;"></div>
    </div>
</template>

<script>
    export default {
        name: "my-header"
    }
</script>

<style>
    @import "http://at.alicdn.com/t/font_1390962_brph6ejz11c.css";
    /* 头部开始 */
    .hd {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 0.8rem;
        background-color: #fff;
        padding: 0.24rem 0;
        border-bottom: 1px solid #f1f1f1;
        color: #a8a3a7;
        display: flex;
        justify-content: space-between;
        font-size: 0.24rem;
        z-index: 999;
    }
    .hd-left-address {
        width: 17%;
        height: 100%;
        text-align: center;
    }
    .hd-right-sousuo {
        width: 17%;
        height: 100%;
        text-align: center;
    }
    .hd-right-sousuo>a {
        color: #333;
    }
    .hd i {
        font-size: 0.4rem;
    }
    /* 头部结束 */
</style>