<template>
    <div>
        demo2
        <button @click="count++">
                {{$store.getters.reverseName}}
                {{$store.getters.fil('s')}}
                {{$store.getters.filler}}
           {{names}}
        </button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "demo2",
        data () {
            return {
                count: 1
            }
        },
        computed:{
            names(){
                return this.$store.state.names
            },
            ...mapGetters(['reverseName'])
        }
    }
</script>

<style scoped>

</style>