<template>
  <div class="tabBar">
    <div
      class="baritem"
      v-for="(item,index) in barItem"
      :key="index"
      :class="{actives:item.active}"
      @click="selectItem(index)"
    >
      <div class="icon iconfont" :class="item.icon"></div>
      <div>{{item.name}}</div>
    </div>
  </div>
</template>
<script>
import "@/assets/icon/home/iconfont.css";
export default {
  name: "TabBar",
  data() {
    return {
      barItem: [
        {
          name: "首页",
          icon: "icon-shouye",
          pathName: "/home/index",
          active: false
        },
        {
          name: "日志",
          icon: "icon-favorite",
          pathName: "/home/Journal",
          active: false
        },
        {
          name: "我的",
          icon: "icon-user",
          pathName: "/home/mypage",
          active: false
        }
      ]
    };
  },
  created() {
    var that = this;
    that.barItem = that.barItem.map(function(item) {
      if (item.pathName == that.$store.state.pathName) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
  },
  methods: {
    selectItem(tag) {
      this.barItem = this.barItem.map(function(item) {
        item.active = false;
        return item;
      });
      this.barItem[tag].active = true;
      this.$emit("select-item", this.barItem[tag].pathName);
      this.$store.commit("changePathName", this.barItem[tag].pathName);
    }
  }
};
</script>
<style lang="scss" scoped>
$white: #ffffff;
$lightgrey: lightgrey;
$red: red;
.tabBar {
  position: fixed;
  display: flex;
  justify-content: space-around;
  height: 100px;
  width: 100%;
  bottom: 0;
  background-color: $white;
  border-top: 1px solid $lightgrey;
  .baritem {
    height: 100%;
    box-sizing: border-box;
    padding-top: 10px;
    text-align: center;
    color: black;
  }
  .actives {
    color: $red;
  }
}
.icon{
  font-size: 48px !important;
}
</style>