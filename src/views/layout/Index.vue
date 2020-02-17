<template>
  <div class="layout_box">
    <Header class="header"></Header>
    <div class="sub_routerview">
      <router-view></router-view>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "layout",
  data() {
    return {
      loading: false
    };
  },
  mounted() {},
  methods: {},
  components: { Header }
};
</script>

<style lang="scss">
.layout_box {
  .sub_routerview {
    height: calc(100vh - 1.2rem);
    overflow: auto;
  }
}
</style>
