<template>
  <div class="container">
    <div class="header"></div>
    <div class="loginform">
      <div class="inputbox">
        <span class="iconfont icon-account icon"></span>
        <input type="text" autocomplete="off" v-model.trim="account" placeholder="请输入账号" />
      </div>
      <div class="inputbox">
        <span class="iconfont icon-mima icon"></span>
        <input type="password" autocomplete="off" v-model.trim="password" placeholder="请输入密码" />
      </div>
      <div class="forgotpwd">
        <span class="iconfont icon-wangjimima iconwj"></span>
        <span @click="forgot">忘记密码</span>
      </div>
      <div class="buttonbox">
        <!-- <div class="register" @click="register">注册</div> -->
        <div class="login" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/icon/login/iconfont.css";
export default {
  data() {
    return {
      account: "",
      password: "",
      redirect: ""
    };
  },
  created() {
    this.redirect = this.$route.query.redirect;
  },
  methods: {
    login() {
      var that = this;
      var user = {
        account: that.account,
        password: that.password
      };
      if (!user.account) {
        this.$toast.center("请输入账号");
      } else if (!user.password) {
        this.$toast.center("请输入密码");
      } else {
        sessionStorage.setItem("user", JSON.stringify(user));
        that.$router.push({ path: that.redirect || "/" });
      }
    },
    forgot() {
      this.$toast.bottom("忘记密码");
    },
    register(){
      this.$toast.center('注册')
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/background/loginbg.jpg');
  font-family: PingFang SC;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
}
.header {
  height: 200px;
  line-height: 200px;
  font-size: 40px;
}
.loginform {
  width: 80%;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
  margin-top: 200px;
  background-color: #ffffff;
  opacity: 0.6;
}
.inputbox {
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  line-height: 80px;
  position: relative;
  margin-top: 40px;
}
.inputbox input {
  outline: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 50px;
  border: none;
  font-size: 28px;
  border-bottom: 1px solid orange;
}
.icon {
  position: absolute;
  // color: crimson;
  color: orange;
  font-size: 40px !important;
}
.forgotpwd {
  width: 100%;
  text-align: left;
  margin-top: 30px;
  color: red;
  font-size: 26px;
  display: flex;
  align-items: center;
  align-content: center;
}
.iconwj {
  font-size: 42px;
  font-weight: bold;
  color: orange;
}
.buttonbox {
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  margin-top: 200px;
}
.buttonbox div {
  // width: 40%;
  width: 100%;
  height: 88px;
  font-size: 34px;
  line-height: 88px;
  border-radius: 5px;
}
.register {
  border: 2px solid blue;
  color: blue;
}
.login {
  color: #ffffff;
  background-color: #9b742b;
  box-shadow: 1px 1px 1px 1px #9b742b;
}
</style>