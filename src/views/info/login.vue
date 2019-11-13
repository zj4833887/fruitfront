<template>
    <div >
        <MyHeradeList>
            登录
        </MyHeradeList>
        <div id="tp">
        <div class="login">
            <van-cell-group>
                <van-field
                        v-model="from.nickname"
                        required
                        clearable
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                />
                <van-field
                        v-model="from.password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                />
            </van-cell-group>

            <van-button plain type="primary" style="left: 1rem" @click="handlelogin">
                登录
            </van-button>

            <router-link :to="{name:'register'}">
            <van-button plain type="info" style="left: 2rem">
                    注册
            </van-button>
            </router-link>
        </div>
        </div>
    </div>
</template>

<script>
    import MyHeradeList from '../../components/header/my-header-list'
    import {login} from "../../api/users";
    import {SUCCESS} from "../../config/base";
    import { Toast } from 'vant';
    export default {
        name: "login",
        data() {
            return {
               from:{
                   nickname: '',
                   password:'',
               }

            }
        },
        components: {
            MyHeradeList
        },
        methods:{
            handlelogin(){
                login('/api/login',this.from).then(res=>{
                    let data=res.data;
                    Toast(data.msg);
                    if (data.code === SUCCESS) {
                        let names=this.$route.query.redirect||'index';
                        this.$store.commit('changeToken',data.token);
                        this.$store.dispatch('setCart')
                        this.$router.push({name:names})
                    }
                })
            }
        },
    }
</script>

<style scoped>
    .login {
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(15%, 215%);
    }
    #tp{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background:url("../../assets/login/ti.jpg");
    }
</style>