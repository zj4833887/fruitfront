<template>
    <div>
        <MyHeader>账户安全</MyHeader>
        <van-cell title="登录密码" is-link value="修改" />
        <van-cell title="支付密码" is-link value="未设置" />
        <van-cell title="注销账户" is-link value="注销账号后无法恢复，请谨慎操作" />
    </div>
</template>

<script>
    import MyHeader from '../../../components/header/my-header-list'
    export default {
        name: "security",
        components: {
            MyHeader
        },
    }
</script>

<style scoped>

</style>