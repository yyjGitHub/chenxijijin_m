<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    let _this = this;
    this.resetFontsize();
    window.onresize = () => {
      return (() => {
        _this.resetFontsize();
      })();
    };
  },
  methods: {
    resetFontsize() {
      let rootHtml = document.documentElement;
      let deviceWidth = rootHtml.clientWidth;
      rootHtml.style.fontSize = (deviceWidth * 100) / 750 + "px";
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/fun.scss";
#app {
  font-family: AlibabaPuHuiTiM;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: px(18);
}
</style>
