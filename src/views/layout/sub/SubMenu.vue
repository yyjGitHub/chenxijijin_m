<template>
  <div class="submenu_box">
    <div class="_box">
      <div class="tran-3s"
           @click="toPage(menu_path, item, index)"
           v-for="(item, index) in submenu_list"
           :key="index"
           v-show="!item.meta.isntShow"
           :class="[
          item.name === 'index' ? 'line' : '',
          subactive_index === index ? 'active' : ''
        ]">
        {{ item.meta.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      menu_path: "",
      submenu_list: [],
      subactive_index: 0
    };
  },
  computed: {
    ...mapGetters({
      menulist: "menulist"
    })
  },
  watch: {
    $route: {
      handler (newVal) { },
      deep: true,
      immediate: true
    }
  },
  methods: {
    toPage (path, item, index) {
      if (item.hasOwnProperty("component")) {
        this.$router.push(path + "/" + item.path);
      } else {
        let t_a = $(`#${item.path}`).offset();
        $("html,body").animate({ scrollTop: t_a.top + "px" }, 500);
      }
      this.subactive_index = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.submenu_box {
  width: 100%;
  height: px(57);
  border-top: 1px solid #979797;
  ._box {
    height: px(57);
    display: flex;
    align-items: center;
    width: px(1760);
    margin: 0 auto;
    & > div {
      height: px(57);
      font-size: px(18);

      color: #7f7f7f;
      line-height: px(57);
      position: relative;
      margin-right: px(48);
      cursor: pointer;
      &.active {
        color: rgba(89, 154, 229, 1);
      }
      &.line {
        color: rgba(89, 154, 229, 1);
        &::after {
          position: absolute;
          right: px(-24);
          top: 50%;
          transform: translateY(-50%);
          content: "";
          display: block;
          width: 1px;
          height: px(25);
          background-color: #979797;
        }
      }
    }
  }
}
</style>
