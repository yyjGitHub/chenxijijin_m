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
  components: { Header, Footer }
};
</script>

<style lang="scss"></style>
