<template>
    <div>
        <MyHeader style="height: 1rem" :show="false"></MyHeader>

        <div class="content-list">
            <!-- 分类左侧开始 -->
            <div class="classify-left">
                <div class="classify-left-box">
                    <div class="classify-left-bottom">
                        <van-sidebar v-model="activeKey">
                            <van-sidebar-item @click="categoods(item.id)" v-for="(item,index) in category" :title="item.cname"
                                              :key="index"/>
                        </van-sidebar>
                    </div>
                </div>
            </div>
            <!-- 分类左侧结束 -->
            <!-- 分类右侧开始 -->
            <div class="classify-right">
                <div class="classify-right-box">
                    <van-sticky :offset-top="60">
                        <van-dropdown-menu>
                            <van-dropdown-item v-model="value1" :options="option1"/>
                            <van-dropdown-item v-model="value2" :options="option2"/>
                        </van-dropdown-menu>
                    </van-sticky>
                    <div id="container">
                        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                            <van-list
                                    v-model="loading"
                                    :finished="finished"
                                    finished-text="没有更多了"
                                    @load="onLoad"
                            >
                                <div id="item-listbox">
                                    <!-- item开始 -->
                                    <a href="">
                                        <div class="center-bottom-item" v-for="(item,index) in goods" :key="index">
                                            <div class="center-item-img"><img  v-lazy="imgpath+item.thumb" alt=""></div>
                                            <router-link  :to="{path:'/detail',query:{id:item.id}}">
                                                {{item.gname}}
                                            </router-link>
                                            <div class="center-item-z">
                                                <div class="center-item-price">￥{{item.sele}}</div>
                                                <div class="center-item-num">
                                                    <div class="jian"><img alt=""></div>
                                                    <div class="shuliang">1</div>
                                                    <div class="jia"><img alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </van-list>
                        </van-pull-refresh>

                    </div>
                </div>

            </div>
            <!-- 分类右侧结束 -->
        </div>

        <MyFooter :active="2"></MyFooter>

    </div>
</template>


<script>
    import Vue from 'vue';
    import { Lazyload } from 'vant';
    Vue.use(Lazyload);
    import MyHeader from '../../components/header/my-header';
    import MyFooter from '../../components/footer/my-footer';
    import axios from 'axios';
    import {HOSTNAME, IMGHOSTNAME, SUCCESS} from "../../config/base";
    export default {
        name: "class",
        components: {
            MyHeader,
            MyFooter
        },
        data() {
            return {
                activeKey: 0,
                category: [],
                goods: [],
                imgpath: IMGHOSTNAME,
                id: 0,
                curren: 0,
                limit: 2,
                list: [],
                total: 0,
                count: 0,
                isLoading: false,
                loading: false,
                finished: false,
                value1: 0,
                value2: 'a',
                option1: [
                    {text: '全部商品', value: 0},
                    {text: '新款商品', value: 1},
                    {text: '活动商品', value: 2}
                ],
                option2: [
                    {text: '默认排序', value: 'a'},
                    {text: '好评排序', value: 'b'},
                    {text: '销量排序', value: 'c'},
                ]
            }
        },
        methods: {
            getcate() {
                axios.get(HOSTNAME + '/api/category')
                    .then(res => {
                        this.category = res.data.data;
                        this.id = this.category[0].id;
                    })

            },
            categoods(id) {
                this.id=id;
            },
            onLoad() {
                setTimeout(()=>{
                        this.isLoading = false;
                        this.curren++;
                        if (this.curren > 1 && this.curren > this.total) {
                            this.isLoading = false;
                            return;
                        }
                        axios.get(HOSTNAME + '/api/goodscate/', {
                            params: {
                                page: this.curren,
                                limit: this.limit,
                                id: this.id
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
                                        this.isLoading = false;
                                        this.loading=false;
                                        if(this.curren>=this.total){
                                            this.finished=true
                                        }
                                    })
                                }
                            })

                    },500

                )},
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            },
        },
        beforeMount() {
            this.getcate();
        },
        watch: {
            id() {
                this.curren = 0;
                this.total = 0;

                this.goods = [];
                this.finished=false;
                this.onLoad();
            }
        }
    }
</script>
<style>
    .van-sticky--fixed{
        left: 2.4rem;
    }
</style>
<style scoped>
    @import "../../style/css/classify.css";

    .van-sidebar {
        width: 100%;
        height: 100%;
    }

    .content-right-title {
        width: 100%;
        font-size: 0.24rem;
        height: 0.8rem;
        line-height: 0.8rem;
        background-color: #fff;
        border-bottom: 1px solid #EFEAEE;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .title-span {
        width: 33.3%;
        text-align: center;
        float: left;
        font-size: 0.24rem
    }
</style>
