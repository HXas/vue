<template>
  <div class="container">
    <Swipper :srclist="srclist" />
    <div class="section">
      <div class="section1"></div>
    </div>
  </div>
</template>
<script>
import Swipper from "@/components/Swipper/swipper";
export default {
  name: "Index",
  components: {
    Swipper
  },
  data() {
    return {
      srclist: [
        {
          id: 0,
          picurl: "http://pic2.cxtuku.com/00/12/82/b18319adfc95.jpg"
        },
        {
          id: 1,
          picurl: "http://pic1.cxtuku.com/00/11/00/b752857e7c07.jpg"
        }
      ]
    };
  },
  methods: {
    routerto() {
      this.$router.push({
        name: "Page"
      });
    }
  },
  mounted() {
    // Swipper.methods.autoplay();
  }
};
</script>
<style lang="scss" scoped>
$wt: #ffffff;
$hc: #bebcbc;
.container {
  width: 100%;
  box-sizing: border-box;
  background-color: orange;
  height: 100%;
  .section {
    width: 100%;
    box-sizing: border-box;
    padding: 40px;
    background-color: orange;
    .section1{
      width: 100%;
      height: 700px;
      background-color: #ffffff;
    }
  }
}
</style>