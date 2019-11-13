<template>
    <div>
        <MyHeader>
            设置
        </MyHeader>
        <router-link  :to="{path:'/security'}">
            <van-cell title="账户安全" is-link />
        </router-link>
        <van-cell title="通用" is-link />
        <van-cell title="欢迎评分" is-link />
        <van-cell title="关于星月外卖" is-link />
        <van-cell title="隐私" is-link />
        <van-cell title="意见反馈" is-link />
        <van-button type="default">退出登录</van-button>
    </div>
</template>

<script>
    import MyHeader from '../../components/header/my-header-list'
    export default {
        name: "set",
        components: {
            MyHeader
        },
        security(){

        }
    }
</script>

<style scoped>
    .van-button--normal{
        width: 100%;
       text-align: center;
        color: red;
    }
</style>