<template>
  <div id="app">
    <my-loading></my-loading>
    <router-view/>
  </div>
</template>
<script>
  import MyLoading from './components/my-loding/my-loading'
  export default {
    name:'app',
    components:{
      MyLoading
    }
  }
</script>
<style>
</style>
