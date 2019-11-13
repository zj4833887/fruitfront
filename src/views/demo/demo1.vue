<template>
    <div>demo1
        <button @click="count++">{{$store.state.names}}
        {{$store.getters.reverseName}}
            {{names}} {{sex}}
        <ul>
            <li v-for="item in skill" :key="item">
                {{item}}
            </li>
        </ul>
        </button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "demo1",
        data () {
            return {
                count: 0
            }
        },
        computed:{
            hello(){
                return 'hello'
            },
            name(){
                return this.$store.state.names;
            },
            ...mapState(['names','sex','skill']),

        }
    }
</script>

<style scoped>

</style>