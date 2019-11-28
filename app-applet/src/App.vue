<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  //阻止浏览器的默认返回事件
  // mounted(){
  //   if(window.history&&window.history.pushState){
  //     history.pushState(null,null,document.URL);
  //     window.addEventListener('popstate',this.goBack,false)
  //   }
  // },
  // destroyed(){
  //   window.removeEventListener('popstate',this.goBack,false)
  // },
  // methods:{
  //   goBack(){
  //     this.$router.go(-1);
  //   }
  // }
};
</script>

<style lang='scss'>
#app {
  font-family: PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
