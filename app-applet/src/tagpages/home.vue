<template>
  <div id="home">
    <router-view />
    <div class="bottom"></div>
    <TabBar @select-item="selectItem" />
  </div>
</template>
<script>
import TabBar from "@/components/footTab/footer";
export default {
  name: "Home",
  components: {
    TabBar
  },
  data() {
    return {
      pathName: "/home/index"
    };
  },
  created() {
    this.$store.commit("changePathName", this.$route.path);
    this.pathName = this.$store.state.pathName;
  },
  methods: {
    selectItem(pathName) {
      if (pathName != this.pathName) {
        this.pathName = pathName;
        this.$router.push({
          path: pathName
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bottom {
  height: 100px;
}
</style>