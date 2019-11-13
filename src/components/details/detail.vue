<template>
    <div class="beijing">
        <!-- 头部开始 -->
        <MyHeradeList>
            商品详情
        </MyHeradeList>
        <!-- 头部结束 -->
        <!-- 分享点击页面 -->
        <div class="fenxiang">
            <div class="huise"></div>
            <div class="fx">
                <div class="fx-1">分享</div>
                <div class="hehe">
                    <div class="weixin">
                        <div class="tu"></div>
                        <div class="zi">QQ</div>
                    </div>
                    <div class="weixin">
                        <div class="tu">
                            <img src="img/class/微信.png">
                        </div>
                        <div class="zi">微信</div>
                    </div>
                    <div class="weixin">
                        <div class="tu">
                            <img src="img/class/QQ空间.png">
                        </div>
                        <div class="zi">QQ空间</div>
                    </div>
                    <div class="weixin">
                        <div class="tu">
                            <img src="img/class/微博.png">
                        </div>
                        <div class="zi">新浪微博</div>
                    </div>
                    <div class="weixin-1">
                        <div class="tu">
                            <img src="img/class/豆.png">
                        </div>
                        <div class="zi">豆瓣网</div>
                    </div>
                    <div class="weixin-2">
                        <div class="tu">
                            <img src="img/class/支付宝.png">
                        </div>
                        <div class="zi">支付宝</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 内容开始 -->
        <div class="neirong">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in gbannerArr" :key="index"
                >
                    <img style="width: 100%;height: 100%;" :src="ImgHostName+item" alt="src">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 第一块 -->
        <div class="kuaiyi">
            <div class="shang">
                <div class="yi">￥{{goods.sele}}</div>
                <div class="er">原价￥{{goods.gmprice}}</div>
                <div class="san">特价</div>
            </div>
            <div class="xia">
                {{goods.describe}}
            </div>
        </div>
        <!-- 第二块 -->
        <div class="kuaire">商品详情</div>
        <div class="kuaisan">
            <div class="aa"><i>品牌： </i> {{goods.brand}}
            </div>
            <div class="bb">
                <div class="aa"><i>产品规格： </i> {{goods.norms}}</div>
            </div>
        </div>
        <div class="kuaisi">图文详情</div>
        <div  v-for="(i,index) in gdetailArr" :key="index">
            <img style="width: 100%;height: 100%;" :src="ImgHostName+i" alt="src">
        </div>
        <!-- 内容结束 -->
        <!-- 底部开始 -->
        <div style="height: 1.1rem;width: 1rem"></div>
        <Mydetail></Mydetail>

        <!-- 底部结束 -->
    </div>
</template>

<script>
    import MyHeradeList from '../header/my-header-list'
    import {HOSTNAME, SUCCESS,IMGHOSTNAME} from "../../config/base";
    import axios from 'axios'
    import Mydetail from  '../footer/my-footer-detail'
    export default {
        name: "detail",
        data() {
            return {
                goods:[],
                count: '',
                id:0,
                gbannerArr:'',
                gdetailArr:'',
                ImgHostName: IMGHOSTNAME,
            }
        },
        components: {
            MyHeradeList,Mydetail
        },
        methods: {
            getgoods(){
                axios.get(HOSTNAME+'/api/goodscate/'+this.id)
                    .then(res => {
                        let data = res.data;
                        if (data.code === SUCCESS) {
                            this.goods = data.data;
                            this.gbannerArr=(data.data.gbanner).split(',');
                            this.gdetailArr=(data.data.gdetail).split(',');
                            window.console.log( this.goods);
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
            this.id=this.$route.query.id;
            this.getCurrenCategory();
            this.getgoods()
        }

    }
</script>

<style scoped>
    @import "../../style/css/class-in.css";
</style>