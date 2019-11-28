<template>
  <div class="container">
    <div class="header"></div>
    <div class="section">
      <div class="infobox"></div>
      <div class="signout" @click="signout">退出登录</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
      signout(){
          sessionStorage.clear();
          window.location.reload();
      }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  box-sizing: border-box;
  font-family: PingFang SC;
  .header {
    height: 200px;
    width: 100%;
    background-color: orange;
  }
  .section {
      width: 100%;
      box-sizing: border-box;
      padding: 40px;
      margin-top: 10px;
      background-color: orange;
      .infobox{
        background-color: #ffffff;
        height: 100px;
      }
    .signout {
      width: 100%;
      height: 88px;
      line-height: 88px;
      font-size: 34px;
      border-radius: 10px;
      background-color: orange;
    }
  }
}
</style>