<template>
  <div class="container_box homepage_box">
    <div class="page_bottom_box">
      <div class="swiper_box">
        <div class="op_box">
          <div class="page_index__box">
            <div
              class="page_index_box"
              :class="[active_slide_index ? 'active' : '']"
            >
              <span class="active_index">
                <div
                  class="_box"
                  :style="{
                    transform: `translateY(-${(parseInt(active_slide_indexnum) -
                      1) *
                      18}px)`,
                  }"
                >
                  <div>{{ active_slide_indexnum }}</div>
                  <div>02</div>
                  <div>03</div>
                  <div>04</div>
                  <div>05</div>
                </div> </span
              ><span class="total_index">/05</span>
            </div>
          </div>
          <div
            v-show="!active_slide_index"
            class="main_swiper_pagination"
            :class="[active_slide_index ? 'home_1st_slide' : '']"
          >
            <div
              class="active"
              :style="{ left: (active_slide_indexnum - 1) * (26.5 + 6) + 'px' }"
            >
              <div>
                <span :class="[!isTrans ? 's_active' : '']">
                  <div :class="[!isTrans ? 'a_active' : 'b_active']"></div>
                </span>
                <span :class="[!isTrans ? 's_active' : '']">
                  <div :class="[!isTrans ? 'a_active' : 'b_active']"></div>
                </span>
              </div>
            </div>
            <div @click="toSlide(0)"></div>
            <div @click="toSlide(1)"></div>
            <div @click="toSlide(2)"></div>
            <div @click="toSlide(3)"></div>
            <div @click="toSlide(4)"></div>
          </div>
        </div>

        <swiper
          class="home_swiper"
          ref="mySwiper"
          :options="homeSwiperOption"
          @slideChangeTransitionStart="homeSlideChangeStart"
          @slideChangeTransitionEnd="homeSlideChangeEnd"
        >
          <swiper-slide class="home_1st_slide">
            <div
              class="_box animated"
              :class="[
                active_slide_tonext && active_slide_indexnum !== '01'
                  ? 'fadeOutUp'
                  : '',
                active_slide_indexnum === '01' ? 'fadeInUp' : '',
              ]"
            >
              <div>
                <span style="font-weight:bold">忠于所托 成就价值</span>
              </div>
            </div>
            <!-- <img
              class="home_bg"
              src="~@/assets/m/home_part1_pic1.png"
              alt=""
              srcset=""
            /> -->
            <div class="arrow_top">
              <img src="~@/assets/m/arrow_top_icon.png" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="home_2nd_slide">
            <div
              class="_box animated"
              :class="[
                active_slide_tonext && active_slide_indexnum !== '02'
                  ? 'fadeOutUp'
                  : '',
                active_slide_indexnum === '02' ? 'fadeInUp' : '',
              ]"
            >
              <div class="left_box">
                <div class="top_box">
                  <div class="_box">
                    <div>
                      <div class="_top">
                        <div class="title">
                          <div class="top_">
                            <img
                              src="~@/assets/m/half_icon.png"
                              alt=""
                              srcset=""
                            />
                            <span class="_t">企业简介</span>
                          </div>
                        </div>
                        <div @click="toPage('/about?_=QYJJ')" class="more">
                          <span>了解更多</span>
                          <img
                            src="~@/assets/image/arrow_right_active.png"
                            class="arrow_right"
                            alt=""
                            srcset=""
                          />
                        </div>
                      </div>
                      <div class="_center">
                        上海晨曦股权投资基金管理有限公司（以下简称“晨曦基金”），成立于2016年10月28日，注册资本1亿元人民币。于2017年4月12日，在中国证券投资基金业协会，完成私募基金管理人备案登记（私募投资基金管理人登记号为P1062335）
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bottom_box">
                  <div class="_other" @click="toPage('/about?_=QYJJ&b=1')">
                    <div>
                      <div class="_title">
                        企业荣誉
                      </div>
                    </div>
                    <img
                      class="_img"
                      src="~@/assets/image/home_3rd_slide_pic1.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="_other" @click="toPage('/about?_=QYFC&b=1')">
                    <div>
                      <div class="_title">
                        企业文化
                      </div>
                    </div>
                    <img
                      class="_img"
                      src="~@/assets/image/home_3rd_slide_pic2.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
              <div class="right_box"></div>
            </div>
          </swiper-slide>
          <swiper-slide class="home_3rd_slide">
            <div
              class="_box animated"
              :class="[
                active_slide_tonext && active_slide_indexnum !== '03'
                  ? 'fadeOutUp'
                  : '',
                active_slide_indexnum === '03' ? 'fadeInUp' : '',
              ]"
            >
              <div class="_top">
                <img
                  src="~@/assets/image/home_2nd_slide_pic.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="_center">
                <div class="active1">
                  <div class="_circle">
                    <div class="_into">
                      <div class="_title">
                        2017年4月12日<br />
                        在中国证券基金业协会<br />
                        完成私募基金管理人备案登记
                      </div>
                      <div class="_line line1"></div>
                    </div>
                  </div>
                </div>
                <div class="active2">
                  <div class="_circle">
                    <div class="_into">
                      <div class="_line line2"></div>
                      <div class="_title">
                        私募投资基金管理人<br />
                        登记号为P1062335
                      </div>
                    </div>
                  </div>
                </div>
                <div class="active3">
                  <div class="_circle">
                    <div class="_into">
                      <div class="_title">
                        以“轻资产运营”为导向
                      </div>
                      <div class="_line line3"></div>
                    </div>
                  </div>
                </div>
                <div class="active4">
                  <div class="_circle">
                    <div class="_into">
                      <div class="_line line2"></div>
                      <div class="_title">
                        多元发展地产基金和<br />
                        财富管理等多个业务板块
                      </div>
                    </div>
                  </div>
                </div>
                <div class="active5">
                  <div class="_circle">
                    <div class="_into">
                      <div class="_title">
                        集项目研判、结构化<br />
                        产品定制、投资运营、<br />
                        风险控制、资产管理于一体
                      </div>
                      <div class="_line line1"></div>
                    </div>
                  </div>
                </div>
                <div class="active6"></div>
              </div>
              <div class="_bottom">
                <div
                  class="active1"
                  v-for="(item, index) in ZYGLR_List"
                  :key="index"
                >
                  <div class="img_box">
                    <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                  </div>
                  <div class="_content">
                    <div class="_title">
                      <img
                        src="~@/assets/image/half_circle_icon.png"
                        alt=""
                        srcset=""
                      />
                      <span>{{ index + 1 }}</span>
                    </div>
                    <div class="_into">
                      {{ item.title }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="home_4th_slide">
            <div
              class="_box animated"
              :class="[
                active_slide_tonext && active_slide_indexnum !== '04'
                  ? 'fadeOutUp'
                  : '',
                active_slide_indexnum === '04' ? 'fadeInUp' : '',
              ]"
            >
              <div class="_top">
                <div class="title">
                  <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                  <span class="_t">战略蓝图</span>
                </div>
              </div>
              <div class="_bottom">
                <div
                  v-for="(item, index) in YWLY_List"
                  @click="tobusiness(index)"
                  :key="index"
                >
                  <div class="_top">
                    <div class="title">
                      {{ item.title }}
                    </div>
                  </div>
                  <div class="pic_box">
                    <img
                      class="_pic"
                      :src="`${$basePicUrl}${item.file}`"
                      alt=""
                      srcset=""
                    />
                    <div class="right_box">
                      <img
                        src="~@/assets/m/arrow_right_active_white.png"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="home_5th_slide">
            <div
              class="_box animated"
              :class="[
                active_slide_tonext && active_slide_indexnum !== '05'
                  ? 'fadeOutUp'
                  : '',
                active_slide_indexnum === '05' ? 'fadeInUp' : '',
              ]"
            >
              <div class="_top">
                <div class="title">
                  <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                  <span class="_t">新闻动态</span>
                </div>
              </div>
              <div class="_bottom">
                <div class="_top">
                  <img
                    class="topic_img"
                    @click="
                      toNewItem(
                        XWZX_List[
                          subActiveIndex === XWZX_List.length
                            ? 0
                            : subActiveIndex
                        ].url,
                        XWZX_List[
                          subActiveIndex === XWZX_List.length
                            ? 0
                            : subActiveIndex
                        ].id
                      )
                    "
                    :src="
                      `${$basePicUrl}${
                        XWZX_List[
                          subActiveIndex === XWZX_List.length
                            ? 0
                            : subActiveIndex
                        ].logo
                      }`
                    "
                    alt=""
                    srcset=""
                  />
                  <div
                    class="topic_title"
                    @click="
                      toNewItem(
                        XWZX_List[
                          subActiveIndex === XWZX_List.length
                            ? 0
                            : subActiveIndex
                        ].url,
                        XWZX_List[
                          subActiveIndex === XWZX_List.length
                            ? 0
                            : subActiveIndex
                        ].id
                      )
                    "
                  >
                    <div class="_title">
                      {{
                        XWZX_List[
                          subActiveIndex === XWZX_List.length
                            ? 0
                            : subActiveIndex
                        ].title
                      }}
                    </div>
                    <div class="_time">
                      {{
                        XWZX_List[
                          subActiveIndex === XWZX_List.length
                            ? 0
                            : subActiveIndex
                        ].date
                      }}
                    </div>
                  </div>
                </div>
                <div class="_bottom">
                  <swiper
                    class="sub_swiper"
                    ref="subSwiper"
                    :options="subSwiperOption"
                    @slideChangeTransitionStart="subSlideChange"
                  >
                    <swiper-slide
                      v-for="(item, index) in XWZX_List"
                      :key="index"
                      @click.stop.native="toNewItem(item.url, item.id, $event)"
                    >
                      <div>
                        <div class="year">
                          {{ item.date }}
                        </div>
                        <div class="_title">
                          {{ item.title }}
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <div @click="subswiperPrev" class="own_swiper_btn_prev">
                    <img
                      src="~@/assets/image/own_swiper_btn.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div @click="subswiperNext" class="own_swiper_btn_next">
                    <img
                      src="~@/assets/image/own_swiper_btn.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeSwiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        speed: 200,
        mousewheel: true,
        initialSlide: 0,
        effect: "fade",
        cssMode: true,
        // simulateTouch: false,
        height:
          window.innerHeight -
          (1.2 * (document.documentElement.clientWidth * 100)) / 750,
      },
      subSwiperOption: {
        direction: "vertical",
        slidesPerView: 3,
        loop: true,
        init: false,
        simulateTouch: false,
        centeredSlides: true,
        // centeredSlides: true
      },
      fz: 0,
      isTrans: false,
      active_slide_indexnum: 0,
      active_slide_tonext: false,
      active_slide_to3: false,
      active_slide_index: false,
      ZYGLR_List: [],
      YWLY_List: [],
      XWZX_List: [
        {
          title: "",
          content: "",
          logo: "",
          time: "",
        },
      ],
      subActiveIndex: 0,
    };
  },
  // watch: {
  //   active_slide_index: {
  //     handler(newVal) {
  //       EventBus.$emit("sendSlideIndex", newVal);
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    subSwiper() {
      return this.$refs.subSwiper.swiper;
    },
  },
  mounted() {
    let _this = this;
    this.resetFontsize();
    window.onresize = () => {
      return (() => {
        _this.resetFontsize();
      })();
    };
    this.$nextTick(() => {
      this.getData();
      this.setActiveSlideIndex();
    });
  },
  updated() {
    let num = 0;
    let interval = setInterval(() => {
      num += 1000;
      if (num < 2000) {
        return;
      }
      this.$nextTick(() => {
        this.subSwiper.init();
        clearInterval(interval);
        num = 0;
      });
    }, 1000);
  },
  methods: {
    tobusiness(index) {
      if (index === 0) {
        this.$router.push({ path: "/business?_=SYZG" });
      }
      if (index === 1) {
        this.$router.push({ path: "/business?_=TZJD" });
      }
      if (index === 2) {
        this.$router.push({ path: "/business?_=SDDC" });
      }
    },
    getData() {
      // 专业私募管理人
      this.axios
        .get(`${this.$baseUrl}contentext/id/24`)
        .then(({ data }) => {
          this.ZYGLR_List = data.data;
        })
        .catch((response) => {
          console.log(response);
        });
      // 战略蓝图
      this.axios
        .get(`${this.$baseUrl}contentext/id/25`)
        .then(({ data }) => {
          this.YWLY_List = data.data;
        })
        .catch((response) => {
          console.log(response);
        });
      // 晨曦视界
      this.axios
        .get(`${this.$baseUrl}contentext/id/23/p/1/count/6/sortTime/desc`)
        .then(({ data }) => {
          for (let i = 0; i < data.data.length; i++) {
            const element = data.data[i];
            let ar = element.content.split("<p>");
            for (let j = 0; j < ar.length; j++) {
              const elementj = ar[j];
              if (!elementj.includes("<img") && elementj !== "") {
                data.data[i].content = ar[j];
                break;
              }
            }
          }
          this.XWZX_List = data.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
    toPage(url) {
      this.$router.push(url);
    },
    resetFontsize() {
      let rootHtml = document.documentElement;
      let deviceWidth =
        rootHtml.clientWidth > 1920
          ? 1920
          : rootHtml.clientWidth < 1024
          ? 1024
          : rootHtml.clientWidth;
      this.fz = (deviceWidth * 100) / 1920;
    },
    homeSlideChangeStart() {
      this.active_slide_tonext = true;
      this.isTrans = true;
      this.setActiveSlideIndex();
      setTimeout(() => {
        this.isTrans = false;
      }, 300);
      setTimeout(() => {
        this.active_slide_tonext = false;
      }, 500);
    },
    homeSlideChangeEnd() {},
    setActiveSlideIndex() {
      this.active_slide_indexnum = "0" + (this.swiper.activeIndex + 1);
      if (this.swiper.activeIndex === 0) {
        this.active_slide_index = true;
      } else {
        this.active_slide_index = false;
      }
    },
    subSlideChange() {
      this.subActiveIndex = this.subSwiper.realIndex;
    },
    toSlide(index) {
      this.swiper.slideTo(index);
    },
    hasClass(elem, cls) {
      cls = cls || "";
      if (cls.replace(/\s/g, "").length == 0) return false;
      return new RegExp(" " + cls + " ").test(" " + elem.className + " ");
    },
    toNewItem(url, id, e = "") {
      if (url) {
        window.open(url);
        return;
      }
      if (e === "" || this.hasClass(e.currentTarget, "swiper-slide-next")) {
        this.$router.push(`/news/${id}`);
      }
    },
    subswiperNext() {
      this.subSwiper.slideNext();
    },
    subswiperPrev() {
      this.subSwiper.slidePrev();
    },
  },
};
</script>

<style lang="scss">
@-webkit-keyframes circleProgressLoad_right_a {
  0% {
    opacity: 0.1;
    -webkit-transform: rotate(-45deg);
  }
  50% {
    opacity: 0.8;
    -webkit-transform: rotate(0deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(45deg);
  }
}
@-webkit-keyframes circleProgressLoad_left_a {
  0% {
    opacity: 0.1;
    -webkit-transform: rotate(45deg);
  }
  50% {
    opacity: 0.8;
    -webkit-transform: rotate(0deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: rotate(-45deg);
  }
}
@-webkit-keyframes circleProgressLoad_right_b {
  0% {
    opacity: 1;
    -webkit-transform: rotate(45deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-45deg);
    opacity: 0;
  }
}
@-webkit-keyframes circleProgressLoad_left_b {
  0% {
    opacity: 1;
    -webkit-transform: rotate(-45deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(45deg);
    opacity: 0;
  }
}
.trs5 {
  transition: all ease-in-out 0.5s;
}
.homepage_box {
  position: relative;
  .page_bottom_box {
    height: calc(100vh - 1.2rem);
    .op_box {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      width: 100%;
      left: 0;
      bottom: px(72);
      z-index: 99;
    }
    .page_index__box {
      z-index: 999;
      position: absolute;
      right: px(48);
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      .page_index_box {
        display: flex;
        align-items: flex-end;
        &.active {
          color: #fff;
        }
        color: #333333;
        .active_index {
          font-size: 18px;
          line-height: 18px;
          height: 18px;
          overflow: hidden;
          ._box {
            transition: all ease-in-out 0.3s;
            & > div {
              line-height: 18px;
              height: 18px;
            }
          }
        }
        .total_index {
          transition: all ease-in-out 0.3s;
          font-size: 0.2rem;
          height: px(20);
          line-height: px(18);
        }
      }
    }
    .main_swiper_pagination {
      width: 136px;
      height: 8px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      display: flex;
      justify-content: space-between;
      z-index: 99;
      &.home_1st_slide {
        & > div:not(.active) {
          border-color: #fff;
        }
        .active {
          border-color: #fff;
          background-color: #fff;
          & > div {
            & > span {
              &:first-child {
                div {
                  border-top: 4px solid #fff;
                  border-right: 4px solid #fff;
                }
              }
              &:last-child {
                div {
                  border-top: 4px solid #fff;
                  border-left: 4px solid #fff;
                }
              }
            }
          }
        }
      }
      & > div:not(.active) {
        cursor: pointer;
        display: block;
        width: 6px;
        height: 6px;
        box-sizing: border-box;
        border: 1px solid #599ae5;
        border-radius: 50%;
        transition: all ease-in-out 0.5s;
      }
      .active {
        cursor: pointer;
        width: 6px;
        height: 6px;
        box-sizing: border-box;
        border: 1px solid #599ae5;
        border-radius: 50%;
        background-color: #599ae5;
        position: absolute;
        top: 0;
        transition: all ease-in-out 0.5s;
        & > div {
          width: 18px;
          height: 18px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateZ(45deg);
          background: transparent;
          border-radius: 50%;
          overflow: hidden;
          & > span {
            width: 9px;
            height: 18px;
            position: absolute;
            top: 0;
            overflow: hidden;
            // &.s_active {
            //   width: 14px;
            // }
            &:first-child {
              left: 0;
              & > div {
                transform: rotate(45deg);
                opacity: 0;
                border-top: 3px solid #5b9be4;
                border-right: 3px solid #5b9be4;
                left: 0;
                &.a_active {
                  -webkit-animation: circleProgressLoad_left_a 0.3s linear
                    forwards;
                  animation-delay: 0.15s;
                  -webkit-animation-delay: 0.15s;
                }
                &.b_active {
                  -webkit-animation: circleProgressLoad_left_b 0.2s linear
                    forwards;
                }
              }
            }
            &:last-child {
              right: 0;
              & > div {
                opacity: 0;
                transform: rotate(-45deg);
                border-top: 3px solid #5b9be4;
                border-left: 3px solid #5b9be4;
                right: 0;
                &.a_active {
                  -webkit-animation: circleProgressLoad_right_a 0.3s linear
                    forwards;
                  animation-delay: 0.15s;
                  -webkit-animation-delay: 0.15s;
                }
                &.b_active {
                  -webkit-animation: circleProgressLoad_right_b 0.2s linear
                    forwards;
                }
              }
            }
            & > div {
              width: 18px;
              height: 18px;
              border: 3px solid rgba(0, 0, 0, 0);
              border-radius: 50%;
              position: absolute;
              top: 0;
              box-sizing: border-box;
            }
          }
        }
      }
    }
    .swiper_box {
      height: 100%;
      overflow: hidden;
      transition-duration: 0ms !important;
      // background: url("~@/assets/m/swiper_bg.png") no-repeat center;
      // background-size: cover;
      .swiper-slide {
        position: relative;
        &.home_1st_slide {
          background: url("~@/assets/m/home_part1_pic1.png") no-repeat top
            center;
          background-size: cover;
          background-color: #fff;
          position: relative;
          // .home_bg {
          //   position: absolute;
          //   z-index: 66;
          //   display: block;
          //   top: 0;
          //   left: 0;
          //   width: 100%;
          //   height: 100%;
          // }
          ._box {
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 77;
            & > div {
              position: absolute;
              top: px(202);
              left: 50%;
              transform: translateX(-50%);
              z-index: 77;
              height: px(220);
              text-align: center;
              width: px(498);
              background: url("~@/assets/image/home_1st_slide_logo.png")
                no-repeat center;
              background-size: cover;
              span {
                display: inline-block;
                margin: 0 auto;
                width: px(541);
                margin-top: px(99);
                margin-bottom: px(94);
                font-size: px(60);
                color: rgba(28, 41, 75, 0.7);
                position: relative;
                letter-spacing: px(3);
                left: 50%;
                transform: translateX(-50%);
              }
            }
          }
          .arrow_top {
            position: absolute;
            bottom: px(73);
            width: px(56);
            height: px(76);
            left: 50%;
            transform: translateX(-50%);
            z-index: 99;
            & > img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }
        &:not(.home_1st_slide) {
          background: url("~@/assets/m/swiper_bg.png") no-repeat center;
          background-size: cover;
          background-color: #fff;
        }
        &.home_2nd_slide {
          & > ._box {
            width: px(654);
            height: px(880);
            position: absolute;
            top: px(50);
            left: 50%;
            margin-left: px(-317);
            display: flex;
            align-items: flex-end;
            .left_box {
              width: px(374);
              height: px(880);
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
              justify-content: space-between;
              position: relative;
              padding-top: px(40);
              z-index: 99;
              & > .top_box {
                width: 100%;
                height: px(498);
                margin-bottom: px(38);
                & > ._box {
                  width: px(574);
                  height: px(498);
                  box-sizing: border-box;
                  border: px(3) solid rgba(91, 155, 228, 1);
                  & > div {
                    width: px(534);
                    height: px(458);
                    margin: px(20);
                    background-color: #fff;
                    box-sizing: border-box;
                    padding: px(54) px(42) px(0) px(43);
                    display: flex;
                    flex-direction: column;
                    & > ._top {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      margin-bottom: px(54);
                      & > .title {
                        .top_ {
                          display: flex;
                          align-items: flex-end;
                          & > img {
                            display: block;
                            width: px(34);
                            height: px(18);
                            margin-right: px(12);
                            margin-bottom: px(2);
                          }
                          ._t {
                            line-height: px(30);
                            height: px(30);
                            font-size: px(30);
                            color: #333;
                            font-weight: bold;
                            display: block;
                            white-space: nowrap;
                          }
                        }
                      }
                      & > .more {
                        width: px(120);
                        height: px(40);
                        border: 1px solid rgba(83, 150, 228, 1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        & > span {
                          font-size: px(16);
                          color: rgba(83, 150, 228, 1);
                          margin-right: px(8);
                          line-height: px(40);
                        }
                        .arrow_right {
                          display: block;
                          width: px(7);
                          height: px(14);
                        }
                      }
                    }
                    & > ._center {
                      font-size: px(24);
                      font-family: Helvetica;
                      color: rgba(0, 0, 0, 1);
                      line-height: px(42);
                      height: px(124);
                    }
                  }
                }
              }
              & > .bottom_box {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                ._other {
                  width: px(334);
                  height: px(132);
                  overflow: hidden;
                  margin-right: px(40);
                  margin-bottom: px(40);
                  background-color: #c7e3f1;
                  &:last-child {
                    margin-bottom: 0;
                  }
                  position: relative;
                  & > div {
                    position: relative;
                    z-index: 2;
                    margin-left: px(40);
                    ._title {
                      height: px(35);
                      font-size: px(26);
                      color: #5a5a5a;
                      line-height: px(35);
                      transition: all ease-in-out 0.5s;
                      margin-top: px(37);
                    }
                  }
                  ._img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    transition: all ease-in-out 0.5s;
                  }
                }
              }
            }
            .right_box {
              margin-right: 0;
              width: px(280);
              min-width: 0;
              height: px(880);
              background: url("~@/assets/image/home_3rd_slide_pic3.png")
                no-repeat center;
              background-size: cover;
            }
          }
        }
        &.home_3rd_slide {
          ._box {
            // opacity: 0;
            background: url("~@/assets/image/home_2nd_slide_bg.png") no-repeat
              center;
            background-size: cover;
            width: px(655);
            height: px(560);
            position: absolute;
            top: px(50);
            left: 50%;
            margin-left: px(-327.5);
            box-sizing: border-box;
            padding: px(40) px(40) px(0) px(40);
            &.fadeInUp {
              ._center,
              ._bottom {
                & > div {
                  transition: all ease-in 0.8s;
                  &.active1 {
                    opacity: 1;
                    transition-delay: 0;
                    .line1 {
                      height: px(24) !important;
                    }
                  }
                  &.active2 {
                    opacity: 1;
                    transition-delay: 0.2s;
                    ._into {
                      align-items: flex-end;
                      transform: translateX(-100%);
                    }
                    ._title {
                      position: relative;
                      left: 5%;
                    }
                    .line2 {
                      height: px(28) !important;
                    }
                  }
                  &.active3 {
                    opacity: 1;
                    transition-delay: 0.4s;
                    .line3 {
                      height: px(44) !important;
                    }
                  }
                  &.active4 {
                    opacity: 1;
                    transition-delay: 0.6s;
                    .line2 {
                      height: px(28) !important;
                    }
                    ._into {
                      align-items: flex-start;
                      transform: translateX(0);
                    }
                    ._title {
                      position: relative;
                      left: -5%;
                    }
                  }
                  &.active5 {
                    opacity: 1;
                    transition-delay: 0.8s;
                    .line1 {
                      height: px(24) !important;
                    }
                  }
                  &.active6 {
                    opacity: 1;
                    transition-delay: 1s;
                  }
                }
              }
            }
            ._top {
              img {
                display: block;
                height: px(45);
              }
            }
            ._center {
              margin-top: px(152);
              width: 100%;
              height: 1px;
              position: relative;
              display: flex;
              align-items: flex-end;
              margin-bottom: px(138);
              &::after,
              &::before {
                content: "";
                display: block;
                position: absolute;
                width: px(12);
                height: px(12);
                box-sizing: border-box;
                border: 1px solid #fff;
                border-radius: 50%;
                top: 50%;
                transform: translateY(-50%);
              }
              &::after {
                right: px(-12);
              }
              &::before {
                left: px(-12);
              }
              & > div {
                display: block;
                flex: 1;
                height: 1px;
                background-color: #fff;
                position: relative;
                opacity: 0;
                &.active1,
                &.active3,
                &.active5 {
                  color: red;
                  ._circle {
                    ._into {
                      bottom: calc(100% + 0.07rem);
                    }
                  }
                }
                &.active2,
                &.active4 {
                  ._circle {
                    ._into {
                      top: calc(100% + 0.07rem);
                    }
                  }
                }
                ._circle {
                  border: 1px solid #fff;
                  border-radius: 50%;
                  width: px(20);
                  height: px(20);
                  border-radius: 50%;
                  position: absolute;
                  right: px(-10);
                  top: px(-10);
                  &::after {
                    display: block;
                    content: "";
                    width: px(10);
                    height: px(10);
                    background-color: #fff;
                    border-radius: 50%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                  }
                  ._into {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    ._title {
                      text-align: center;
                      font-size: px(16);
                      color: rgba(255, 255, 255, 1);
                      line-height: px(24);
                      margin-bottom: px(2);
                      width: px(180);
                    }
                    ._line {
                      width: 2px;
                      height: 0;
                      transition: all 1.2s ease-in;
                      background-color: rgba(255, 255, 255, 0.6);
                      // &.line1 {
                      //   height: px(24);
                      // }
                      // &.line2 {
                      //   height: px(28);
                      // }
                      // &.line3 {
                      //   height: px(44);
                      // }
                      // &.line4 {
                      //   height: px(28);
                      // }
                      // &.line5 {
                      //   height: px(24);
                      // }
                    }
                  }
                }
              }
            }
            ._bottom {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-wrap: wrap;
              & > div {
                opacity: 0;
                width: px(267);
                height: px(228);
                cursor: pointer;
                margin-bottom: px(40);
                background: rgba(255, 255, 255, 1);
                & > .img_box {
                  display: block;
                  width: px(267);
                  height: px(168);
                  overflow: hidden;
                  &:hover {
                    img {
                      transform: scale(1.2);
                    }
                  }
                  img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    transition: all ease-in-out 0.5s;
                  }
                }
                & > div._content {
                  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);
                  height: px(60);
                  display: flex;
                  align-items: center;
                  // flex-direction: column;
                  justify-content: center;
                  ._title {
                    margin-right: px(14);
                    display: flex;
                    align-items: center;
                    img {
                      display: block;
                      width: px(10);
                      height: px(21);
                      margin-right: px(4);
                    }
                    span {
                      font-size: px(28);
                      color: rgba(0, 0, 0, 1);
                      line-height: px(28);
                    }
                  }
                  ._into {
                    font-size: px(20);
                    color: #7f7f7f;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  }
                }
              }
            }
          }
        }
        &.home_4th_slide {
          & > ._box {
            width: px(654);
            position: absolute;
            top: px(50);
            left: 50%;
            margin-left: px(-327);
            & > ._top {
              // margin-bottom: px(60);
              // img {
              //   display: block;
              //   width: px(295);
              //   height: px(33);
              // }
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: px(64);
              & > .title {
                display: flex;
                align-items: flex-end;
                img {
                  display: block;
                  width: px(34);
                  height: px(18);
                  margin-right: px(12);
                  margin-bottom: px(2);
                }
                ._t {
                  font-size: px(30);
                  height: px(30);
                  line-height: px(30);
                  color: #333;
                  font-weight: bold;
                  display: block;
                  white-space: nowrap;
                }
              }
            }
            & > ._bottom {
              display: flex;
              flex-direction: column;
              & > div {
                height: px(210);
                margin-bottom: px(77);
                border-left: 2px solid rgba(0, 0, 0, 0.2);
                padding-left: px(32);
                padding-right: px(32);
                overflow: hidden;
                display: flex;
                transition: all ease-in-out 0.5s;
                cursor: pointer;
                flex-direction: column;
                justify-content: space-between;
                & > ._top {
                  .title {
                    transition: all ease-in-out 0.5s;
                    font-size: px(30);
                    color: #000;
                    line-height: px(42);
                  }
                }
                & > .pic_box {
                  display: flex;
                  align-items: flex-end;
                  overflow: hidden;
                  width: px(506);
                  height: px(145);
                  position: relative;
                  ._pic {
                    position: absolute;
                    left: 0;
                    top: 0;
                    transition: all ease-in-out 0.3s;
                    display: block;
                    width: px(458);
                    height: 100%;
                  }
                  .right_box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 100%;
                    width: px(48);
                    background-color: #5b9be4;
                    img {
                      display: block;
                      width: px(13);
                      height: px(24);
                    }
                  }
                }
              }
            }
          }
        }
        &.home_5th_slide {
          & > ._box {
            width: px(654);
            position: absolute;
            top: px(50);
            left: 50%;
            margin-left: px(-327);
            & > ._top {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: px(64);
              & > .title {
                display: flex;
                align-items: flex-end;
                img {
                  display: block;
                  width: px(37);
                  height: px(18);
                  margin-right: px(12);
                  margin-bottom: px(2);
                }
                ._t {
                  height: px(30);
                  line-height: px(30);
                  font-size: px(30);
                  color: #333;
                  font-weight: bold;
                  display: block;
                  white-space: nowrap;
                }
              }
            }
            & > ._bottom {
              & > ._top {
                width: 100%;
                margin-bottom: px(39);
                .topic_img {
                  display: block;
                  width: 100%;
                  height: px(276);
                }
                .topic_title {
                  margin-top: px(16);
                  margin-bottom: px(5);
                  ._title {
                    line-height: px(36);
                    font-size: px(30);
                    font-weight: bold;
                    color: rgba(0, 0, 0, 1);
                  }
                  ._time {
                    color: #7f7f7f;
                    height: px(30);
                    line-height: px(30);
                    font-size: px(22);
                  }
                }
              }
              & > ._bottom {
                width: px(654);
                padding: px(23) 0;
                position: relative;
                .own_swiper_btn_prev,
                .own_swiper_btn_next {
                  cursor: pointer;
                  display: block;
                  width: px(33);
                  height: px(17);
                  position: absolute;
                  left: 50%;
                  margin-left: px(-8.5);
                  img {
                    display: block;
                    width: 100%;
                  }
                }
                .own_swiper_btn_prev {
                  top: px(-6);
                  img {
                    transform: rotateZ(180deg);
                  }
                }
                .own_swiper_btn_next {
                  bottom: px(-6);
                }
                .sub_swiper {
                  height: px(315);
                  position: relative;
                  &::after,
                  &::before {
                    content: "";
                    display: block;
                    height: 1px;
                    width: 100%;
                    position: absolute;
                    background-color: #5b9be4;
                    left: 0;
                    z-index: 55;
                  }
                  &::after {
                    bottom: px(105);
                  }
                  &::before {
                    top: px(105);
                  }
                  .swiper-wrapper {
                    height: px(315);
                    .swiper-slide {
                      color: #7f7f7f;
                      display: flex;
                      align-items: center;
                      // &.swiper-slide-next {
                      &.swiper-slide-active {
                        // border: 1px #979797 solid;
                        border-left: none;
                        border-right: none;
                        ._title {
                          color: #5b9be4;
                        }
                      }
                      & > div {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .year {
                          height: px(32);
                          font-size: px(24);
                          line-height: px(32);
                          color: #7d7d7d;
                        }
                        ._title {
                          width: px(592);
                          height: px(35);
                          font-size: px(26);
                          color: #7d7d7d;
                          line-height: px(35);
                          text-overflow: ellipsis;
                          overflow: hidden;
                          white-space: nowrap;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
