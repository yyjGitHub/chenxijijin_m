<template>
  <header>
    <img class="logo" src="~@/assets/m/logo.png" alt="" srcset="" />
    <img
      class="caidan"
      @click.stop="show_menu = !show_menu"
      src="~@/assets/m/caidan_icon.png"
      alt=""
      srcset=""
    />
    <transition name="slide-fade">
      <div class="left_menu_box" v-if="show_menu">
        <div class="left_box">
          <div class="_top">
            <img class="logo" src="~@/assets/m/logo.png" alt="" srcset="" />
          </div>
          <div class="_bottom">
            <div
              class="_item"
              :class="[
                item.children.length > 1 ? '' : 'isSingle',
                active_index === index ? 'active' : ''
              ]"
              v-for="(item, index) in menulist"
              :key="index"
            >
              <div
                class="_parent"
                @click="
                  toPage(item.children.length > 1 ? '' : item.path, index)
                "
              >
                <div class="_title">
                  {{ item.meta.label }}
                </div>
                <van-icon name="arrow" class="arrow_right" />
              </div>
              <div
                class="child_box"
                :class="[active_index === index ? '' : 'disabled']"
                :style="{
                  height:
                    font_size *
                      (item.path === '/news'
                        ? item.children.length - 2
                        : item.children.length - 1) *
                      0.81 +
                    'px'
                }"
              >
                <div
                  class="_child"
                  v-for="(s_item, s_index) in item.children"
                  :key="s_index"
                  @click="toPage(item.path, index, s_item.path)"
                  v-if="!s_item.hasOwnProperty('component')"
                >
                  <div class="_item">{{ s_item.meta.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right_box" @click.stop="show_menu = !show_menu"></div>
      </div>
    </transition>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      active_index: 0,
      show_menu: false,
      font_size: 0
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
    toPage(path, index, params = "") {
      if (path) {
        if (params) {
          this.$router.push({
            path: path,
            params: { activeDIV: params }
          });
        } else {
          this.$router.push(path);
        }
        this.show_menu = false;
      } else {
        if (this.active_index === index) {
          this.active_index = null;
        } else {
          this.active_index = index;
        }
      }
    },
    resetFontsize() {
      let rootHtml = document.documentElement;
      let deviceWidth = rootHtml.clientWidth;
      this.font_size = (deviceWidth * 100) / 750;
    }
  },
  watch: {
    $route: {
      handler(newVal) {
        for (let i = 0; i < this.menulist.length; i++) {
          const element = this.menulist[i];
          if (newVal.path.includes(element.path)) {
            this.active_index = i;
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
  width: px(750);
  height: px(120);
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 px(48);
  .logo {
    width: px(235);
    height: px(44);
    display: block;
  }
  .caidan {
    display: block;
    width: px(32);
    height: px(32);
  }
  .left_menu_box {
    position: fixed;
    left: 0;
    top: 0;
    width: px(750);
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 99;
    display: flex;
    .left_box {
      width: px(540);
      height: 100%;
      background-color: #fff;
      ._top {
        width: 100%;
        height: px(120);
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 px(48);
        border-bottom: 1px solid #e5e5e5;
        img {
          display: block;
          width: px(235);
          height: px(44);
        }
      }
      ._bottom {
        height: calc(100% - 1.2rem);
        overflow: auto;
        & > ._item {
          transition: all ease-in-out 0.4s;
          overflow: hidden;
          &.active {
            &.isSingle {
              & > ._parent {
                .arrow_right {
                  transform: rotateZ(0deg);
                }
              }
            }
            & > ._parent {
              ._title,
              .arrow_right {
                color: #599ae5;
              }
            }
            &:not(.isSingle) {
              .arrow_right {
                transform: rotateZ(90deg);
              }
            }
          }
          & > ._parent {
            height: px(81);
            box-sizing: border-box;
            padding: 0 px(53) 0 px(48);
            display: flex;
            align-items: center;
            border-bottom: 1px solid #e5e5e5;
            justify-content: space-between;
            background-color: #fff;
            & > ._title {
              font-size: px(24);
              color: #333;
            }
            & > .arrow_right {
              display: block;
              font-size: px(28);
              color: #888888;
              transition: all ease-in-out 0.4s;
            }
          }
          & > .child_box {
            overflow: hidden;
            transition: all ease-in-out 0.4s;
            &.disabled {
              height: 0 !important;
            }
            & > ._child {
              & > ._item {
                height: px(81);
                border-bottom: 1px solid #e5e5e5;
                box-sizing: border-box;
                padding: 0 px(48);
                display: flex;
                align-items: center;
                background-color: #f8f8f8;
                &::before {
                  content: "";
                  display: block;
                  width: px(8);
                  height: px(8);
                  border-radius: px(4);
                  background-color: #888888;
                  margin-right: px(12);
                }
                font-size: px(24);
                color: #333;
              }
            }
          }
        }
      }
    }
    .right_box {
      flex: 1;
      min-width: 0;
      height: 100%;
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    // transform: translateX(px(-750));
    opacity: 0;
  }
}
</style>
