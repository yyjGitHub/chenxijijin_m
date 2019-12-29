<template>
  <div class="container_box homepage_box">
    <div class="page_bottom_box">
      <div class="swiper_box">
        <swiper
          class="home_swiper"
          ref="mySwiper"
          :options="homeSwiperOption"
          @slideChangeTransitionStart="homeSlideChangeStart"
          @slideChangeTransitionEnd="homeSlideChangeEnd"
        >
          <swiper-slide class="home_1st_slide">
            <div class="_box">
              <div>
                <span>忠于所托 成就价值</span>
              </div>
            </div>
            <img
              class="home_bg"
              src="~@/assets/m/home_part1_pic1.png"
              alt=""
              srcset=""
            />
            <div class="arrow_top">
              <img src="~@/assets/m/arrow_top_icon.png" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide class="home_2nd_slide">
            <div class="_box">
              <div class="left_box">
                <div class="top_box">
                  <div class="_box">
                    <div>
                      <div class="_top">
                        <div class="title">
                          <div>
                            <img
                              src="~@/assets/m/half_icon.png"
                              alt=""
                              srcset=""
                            />
                            <span class="_t">企业简介</span>
                          </div>
                          <span class="_et">COMPANY PROFILE</span>
                        </div>
                        <div class="more">
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
                        上海晨曦股权投资基金管理有限公司（以下简称“晨曦基金”），成立于2016年10月28日，注册资本1亿人民币，为上海旭辉企业发展有限公司控股的子公司，是旭辉集团一体两翼“房地产+”板块的核心成员之一。
                      </div>
                      <!-- <div class="_bottom">
                        <div>
                          <div class="label_title">时间：</div>
                          <div class="label_value">
                            成立于<br />
                            2016-10-28
                          </div>
                        </div>
                        <div>
                          <div class="label_title">资本：</div>
                          <div class="label_value">
                            注册资本<br />
                            一亿人民币
                          </div>
                        </div>
                        <div>
                          <div class="label_title">实力：</div>
                          <div class="label_value">
                            上海旭辉企业<br />
                            控股的子公司
                          </div>
                        </div>
                        <div>
                          <div class="label_title">伙伴：</div>
                          <div class="label_value">
                            旭辉“房地产+”<br />
                            核心成员之一
                          </div>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
                <!-- <div class="bottom_box">
                  <div class="_other">
                    <div>
                      <div class="_title">
                        企业荣誉
                      </div>
                      <div class="_entitle">
                        COMPANY HONOR
                      </div>
                    </div>
                    <img
                      class="_img"
                      src="~@/assets/image/home_3rd_slide_pic1.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="_other">
                    <div>
                      <div class="_title">
                        企业愿景
                      </div>
                      <div class="_entitle">
                        COMPANY VISION
                      </div>
                    </div>
                    <img
                      class="_img"
                      src="~@/assets/image/home_3rd_slide_pic2.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div> -->
              </div>
              <div class="right_box"></div>
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
        mousewheel: true,
        initialSlide: 0,
        simulateTouch: false,
        height:
          window.innerHeight -
          (1.2 * (document.documentElement.clientWidth * 100)) / 750
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
    // subSwiper() {
    //   return this.$refs.subSwiper.swiper;
    // }
  },
  mounted() {},
  methods: {
    homeSlideChangeStart() {},
    homeSlideChangeEnd() {}
  }
};
</script>

<style lang="scss">
.homepage_box {
  position: relative;
  .page_bottom_box {
    height: calc(100vh - 1.2rem);
    .swiper_box {
      height: 100%;
      .swiper-slide {
        position: relative;
        position: relative;
        &.home_1st_slide {
          position: relative;
          .home_bg {
            position: absolute;
            z-index: 66;
            display: block;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          ._box {
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.2);
            position: relative;
            z-index: 77;
            & > div {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
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
                margin-top: px(99);
                margin-bottom: px(94);
                font-size: px(56);
                color: rgba(255, 255, 255, 1);
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
        }
        &.home_2nd_slide {
          & > ._box {
            width: px(654);
            height: px(861);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: flex-end;
            .left_box {
              width: px(334);
              height: px(861);
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
              justify-content: space-between;
              position: relative;
              padding-top: px(40);
              z-index: 99;
              & > .top_box {
                width: 100%;
                height: px(476);
                & > ._box {
                  width: px(574);
                  height: px(476);
                  box-sizing: border-box;
                  border: px(3) solid rgba(91, 155, 228, 1);
                  & > div {
                    width: px(534);
                    height: px(436);
                    margin: px(20);
                    background-color: #fff;
                    box-sizing: border-box;
                    padding: px(40);
                    display: flex;
                    flex-direction: column;
                    & > ._top {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      margin-bottom: px(25);
                      & > .title {
                        & > div {
                          display: flex;
                          align-items: center;
                          margin-bottom: px(4);
                          & > img {
                            display: block;
                            width: px(37);
                            height: px(18);
                            margin-right: px(12);
                          }
                          ._t {
                            font-size: px(28);
                            color: #333;
                            font-weight: bold;
                            display: block;
                            white-space: nowrap;
                          }
                        }
                        ._et {
                          font-size: px(16);
                          color: #7f7f7f;
                          white-space: nowrap;
                          transform: scale(0.7);
                        }
                      }
                      & > .more {
                        width: px(120);
                        height: px(40);
                        border: 2px solid rgba(83, 150, 228, 1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        & > span {
                          font-size: px(14);
                          color: rgba(83, 150, 228, 1);
                          margin-right: px(8);
                          line-height: px(40);
                          transform: scale(0.8);
                        }
                        .arrow_right {
                          display: block;
                          width: px(7);
                          height: px(14);
                        }
                      }
                    }
                    & > ._center {
                      font-size: px(14);
                      font-family: Helvetica;
                      color: rgba(0, 0, 0, 1);
                      line-height: px(32);
                      margin-bottom: px(53);
                      transform: scale(0.8);
                    }
                    & > ._bottom {
                      display: flex;
                      align-items: center;
                      width: px(832);
                      flex: 1;
                      & > div {
                        height: 100%;
                        width: px(208);
                        box-sizing: border-box;
                        border-left: px(2) solid rgba(91, 155, 228, 0.4);
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding-left: px(16);
                        .label_title {
                          font-size: px(18);

                          color: rgba(91, 155, 228, 1);
                        }
                        .label_value {
                          max-width: px(120);
                          font-size: px(16);

                          color: rgba(0, 0, 0, 1);
                          line-height: px(19);
                          color: #7f7f7f;
                        }
                      }
                    }
                  }
                }
              }
              .bottom_box {
                height: px(148);
                display: flex;
                ._other {
                  width: px(320);
                  height: px(148);
                  overflow: hidden;
                  margin-right: px(40);
                  background-color: #c7e3f1;
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  position: relative;
                  &:hover {
                    ._title,
                    ._entitle {
                      color: #5b9be4;
                    }
                    ._img {
                      transform: scale(1.2);
                    }
                  }
                  & > div {
                    position: relative;
                    z-index: 2;
                    margin-left: px(60);
                    ._title {
                      height: px(33);
                      font-size: px(24);
                      color: #6f777b;
                      line-height: px(29);
                      transition: all ease-in-out 0.5s;
                    }
                    ._entitle {
                      height: px(22);
                      font-size: px(16);
                      color: #b1bfc3;
                      line-height: px(19);
                      transition: all ease-in-out 0.5s;
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
                  // &.other1 {
                  //   background: url("~@/assets/image/home_3rd_slide_pic1.png")
                  //     no-repeat center;
                  //   background-size: cover;
                  // }
                  // &.other2 {
                  //   background: url("~@/assets/image/home_3rd_slide_pic2.png")
                  //     no-repeat center;
                  //   background-size: cover;
                  // }
                }
              }
            }
            .right_box {
              margin-right: 0;
              flex: 1;
              min-width: 0;
              height: px(861);
              background: url("~@/assets/image/home_3rd_slide_pic3.png")
                no-repeat center;
              background-size: cover;
            }
          }
        }
      }
    }
  }
}
</style>
