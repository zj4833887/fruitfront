<template>

    <div>
        <MyHeradeList>
            {{count.cname}}
        </MyHeradeList>

        <!-- 头部导航栏结束 -->
        <!-- 轮播图 -->
        <van-pull-refresh v-model="isLoading" @refresh="getGoods">
            <div class="banner">
                <img :src=" imghostname+count.thumb" style="width: 100%" alt="">
            </div>

            <!-- 轮播图 -->
            <!-- 产品开始 -->
            <div class="cp-box" v-for="i in goods" :key="i.id">
                <div class="cp-box-left">
                    <img :src="imghostname+i.thumb" alt="">
                </div>
                <div class="cp-box-right">
                    <div class="cp-box-right-top">
                        <router-link  :to="{path:'/detail',query:{id:i.id}}">
                           {{i.gname}}
                       </router-link>
                    </div>
                    <div class="cp-box-right-center">
                        ￥{{i.sele}}
                        <i>￥{{i.gmprice}}</i>

                    </div>
                    <button class="btn">立即购买</button>
                </div>
            </div>
        </van-pull-refresh>
        <!-- 产品结束 -->
        <!-- 底部导航栏开始 -->
        <div style="height: 1.2rem"></div>
        <div class="db">
            <span>￥10</span>
            <div class="db-right">
                <span>去结算</span>
            </div>
            <div class="gwc">
                <!-- <img src="img/my/bottom-cart.png" style="width: 60%;" alt=""> -->
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeradeList from '../header/my-header-list'
    import {HOSTNAME, SUCCESS, IMGHOSTNAME} from "../../config/base";
    import axios from 'axios'

    export default {
        name: "list",
        data() {
            return {
                count: 0,
                id: 0,
                isLoading: false,
                imghostname: IMGHOSTNAME,
                category: null,
                goods: [],
                curren: 0,
                limit: 2,
                total: 0,
            }
        },
        components: {
            MyHeradeList
        },
        methods: {
            getGoods() {
                this.isLoading = true;
                this.curren++;
                if (this.curren > 1 && this.curren > this.total) {
                    this.isLoading = false;
                    return;
                }
                axios.get(HOSTNAME + '/api/goodscate/', {
                    params: {
                        id: this.id,
                        page: this.curren,
                        limit: this.limit
                    }
                })
                    .then(res => {

                        if (res.data.code === SUCCESS) {
                            // let {total,goods}=res.data.data;
                            let goods = res.data.data;
                            let total = res.data.count;

                            !this.total && (this.total = Math.ceil(total / this.limit));
                            this.goods = this.goods.concat(goods);

                            // this.goods.push(...goods);
                            this.$nextTick(() => {
                                this.isLoading = false
                            })
                        }
                    })
            },
            getCurrenCategory() {
                axios.get(HOSTNAME + '/api/cate/' + this.id)
                    .then(res => {
                        let data = res.data;
                        if (data.code === SUCCESS) {
                            this.count = data.count;
                        }
                    })
            },
        },
        beforeMount() {
            this.id = this.$route.query.id;
            this.getCurrenCategory();
            this.getGoods();
        }
    }
</script>

<style scoped>
    @import "../../style/css/sgth.css";
</style>
