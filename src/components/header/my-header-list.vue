<template>
    <div>
        <div class="beijing">
            <!-- 头部开始 -->
            <div class="toubu">
                <router-link :to="{name:'index'}">
                    <div class="toubuleft"></div>
                </router-link>
                <div class="center">
                    <slot></slot>
                </div>
                <div class="touburight"  v-if="isshow">
                </div>
            </div>
        </div>
        <div style="height: 0.9rem">

        </div>
    </div>
</template>
<style scoped>
   @import "../../style/css/class-in.css";
</style>

<script>
    export default {
        name: "my-header-list",
        props:{
            isshow:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

