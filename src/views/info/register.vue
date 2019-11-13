<template>
    <div>
        <MyHeradeList>
            注册
        </MyHeradeList>
        <van-cell-group>
            <van-field
                    v-model="form.nickname"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"

            />
            <van-field
                    v-model="form.tel"
                    label="手机号"
                    placeholder="请输入手机号"
            />
            <van-field
                    v-model="form.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
            />
        </van-cell-group>
        <van-button plain type="info" style="left: 3rem" @click="hangleregister">
            注册
        </van-button>
    </div>
</template>

<script>
    import {register} from '../../api/users'
    import MyHeradeList from '../../components/header/my-header-list'
    import { Toast } from 'vant';
    import {SUCCESS} from "../../config/base";

    export default {
        name: "register",
        components: {
            MyHeradeList
        },
        data() {
            return {
            form:{
                nickname: '',
                password: '',
                tel:''
            }
            }
        },
        methods:{
            hangleregister(){
                register('api/user',this.form)
                    .then(res=>{
                        let data=res.data;
                        Toast(data.msg)
                        if (data.code === SUCCESS) {
                            this.$router.push({name:'login'})
                        }
                    })

            }
        }
    }
</script>

<style scoped>

</style>