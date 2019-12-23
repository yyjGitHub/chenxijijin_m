<template>
  <header>
    <img
      class="logo"
      :src="
        is_1st_slide
          ? require('@/assets/image/logo_1st_slide.png')
          : require('@/assets/image/logo.png')
      "
      alt=""
      srcset=""
    />
    <div
      class="menu_list tran-3s"
      :class="[is_1st_slide ? 'home_1st_slide' : '']"
    >
      <div
        class="_item tran-3s"
        :class="[index === active_index ? 'active' : '']"
        v-for="(item, index) in menulist"
        :key="index"
        @click="toPage(item, index)"
      >
        {{ item.meta.label }}
      </div>
    </div>
  </header>
</template>
<script>
// import { EventBus } from "@/bus";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      active_index: 0
    };
  },
  computed: {
    ...mapGetters({
      menulist: "menulist"
    })
  },
  props: {
    is_1st_slide: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toPage(item, index) {
      this.active_index = index;
      this.$router.push(item.path);
    }
  },
  watch: {
    $route: {
      handler(newVal) {
        for (let i = 0; i < this.menulist.length; i++) {
          const element = this.menulist[i];
          if (newVal.path.includes(element.path)) {
            this.active_index = i;
            // EventBus.$emit("sendSubMenu", {
            //   path: element.path,
            //   children: element.children
            // });
          }
        }
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style lang="scss" scoped>
header {
  width: px(1760);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: px(60);
  padding-bottom: px(60);
  .logo {
    width: px(235);
    height: px(40);
    display: block;
  }
  .menu_list {
    display: flex;
    align-items: center;
    & > ._item {
      cursor: pointer;
      color: #000000;
      margin-right: px(55);
      font-size: px(18);
      font-family: PingFangSC-Regular, PingFang SC;
      position: relative;
      &.active {
        color: #599ae5;
        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: px(-8);
          left: 0;
          width: 100%;
          height: px(2);
          background-color: #599ae5;
        }
      }
    }
    &.home_1st_slide {
      & > ._item {
        color: rgba(255, 255, 255, 0.2);
        &.active {
          color: #fff;
          &::after {
            background-color: #fff;
          }
        }
      }
    }
  }
}
</style>
