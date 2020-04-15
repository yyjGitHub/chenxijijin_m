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
import $ from "jquery";
// const mixin = {
//   updated() {
//     $(".sub_routerview").on("scroll", function(e) {
//       if ($(".sub_routerview").scrollTop() > 0) {
//         $(".van-tabs__wrap").addClass("fixed");
//         $(".van-tabs").addClass("fixed");
//         // if ($(".van-tabs").find(".index").length === 0) {
//         //   $(".van-tabs__wrap").before("<div class='index'></div>");
//         //   $(".van-tabs .index").height($(".sub_routerview").scrollTop());
//         // } else {
//         //   if ($(".van-tabs .index").height() >= 40) {
//         //     return;
//         //   }
//         //   $(".van-tabs .index").height($(".sub_routerview").scrollTop());
//         // }
//       } else {
//         $(".van-tabs__wrap").removeClass("fixed");
//         $(".van-tabs").removeClass("fixed");
//       }
//     });
//   },
// };
import Header from "@/components/Header";
export default {
  name: "layout",
  data() {
    return {
      loading: false,
    };
  },
  // mixins: [mixin],
  mounted() {},
  methods: {},
  components: { Header },
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
