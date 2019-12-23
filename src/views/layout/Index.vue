<template>
  <div class="layout_box">
    <Header class="header"></Header>
    <sub-menu></sub-menu>
    <div class="sub_routerview">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SubMenu from "./sub/SubMenu.vue";
import Footer from "@/components/Footer";
export default {
  name: "layout",
  data() {
    return {
      loading: false
    };
  },
  mounted() {},
  methods: {},
  components: { Header, SubMenu, Footer }
};
</script>

<style lang="scss"></style>
