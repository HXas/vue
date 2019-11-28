<template>
  <div id="swipper">
    <transition-group tag="ul" :class="swipperStyle" name="picswipper">
      <li class="pic" v-for="pic in srclist" :key="pic.id" v-show="pic.id == mark">
        <img :src="pic.picurl" />
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "Swipper",
  props: {
    srclist: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mark: 0,
      swipperInterval: null,
      //轮播图样式
      swipperStyle:''
    };
  },
  mounted() {
    this.autoplay();
  },
  methods: {
    //开始
    autoplay() {
      var that = this;
      that.swipperInterval = setInterval(() => {
        that.mark = that.mark + 1;
        if (that.mark == that.srclist.length) {
          that.mark = 0;
        }
      }, 2000);
    },
    //停止
    stop() {
      clearInterval(this.swipperInterval);
    }
  },
  destroyed() {
    this.stop();
  }
};
</script>
<style lang="scss" scoped>
.picswipper-enter-active {
  transform: translateX(0);
  transition: all 1s ease;
}
.picswipper-leave-active {
  transform: translateX(-100%);
  transition: all 1s ease;
}
.picswipper-enter {
  transform: translateX(100%);
}
.picswipper-leave {
  transform: translateX(0);
}
ul {
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;
  .pic {
    list-style: none;
    width: 100%;
    height: auto;
    position: absolute;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>