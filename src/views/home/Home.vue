<template>
  <div class="container_box homepage_box">
    <Header :is_1st_slide="active_slide_index"
            class="header"></Header>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  data () {
    return {};
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // },
    // subSwiper() {
    //   return this.$refs.subSwiper.swiper;
    // }
  },
  mounted () {
    this.$nextTick(() => {
      this.setActiveSlideIndex();
      this.subSwiper.init();
    });
  },
  methods: {
    homeSlideChange () {
      this.setActiveSlideIndex();
    },
    subSlideChange () { },
    setActiveSlideIndex () {
      this.active_slide_indexnum = "0" + (this.swiper.activeIndex + 1);
      if (this.swiper.activeIndex === 0) {
        this.active_slide_index = true;
      } else {
        this.active_slide_index = false;
      }
    },
    subswiperNext () {
      this.subSwiper.slideNext();
    },
    subswiperPrev () {
      this.subSwiper.slidePrev();
    }
  },
  components: { Footer, Header }
};
</script>

<style lang="scss">
.trs5 {
  transition: all ease-in-out 0.5s;
}
.homepage_box {
  .header {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }
  .page_index__box {
    z-index: 999;
    position: fixed;
    right: px(0);
    bottom: px(0);
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(50% - 6.4rem);
    height: px(180);
    .page_index_box {
      display: flex;
      align-items: flex-end;
      &.active {
        color: #fff;
      }
      color: #333333;
      .active_index {
        font-size: px(36);
        line-height: px(58);
        height: px(50);
      }
      .total_index {
        font-size: px(20);
        line-height: px(24);
        height: px(27);
      }
    }
  }
  .main_swiper_pagination {
    width: 8px;
    height: 136px;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: px(91);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 99;
    &.home_1st_slide {
      & > div:not(.active) {
        border-color: #fff;
      }
      .active {
        border-color: #fff;
        background-color: #fff;
      }
    }
    & > div:not(.active) {
      cursor: pointer;
      display: block;
      width: 8px;
      height: 8px;
      box-sizing: border-box;
      border: 1px solid #599ae5;
      border-radius: 50%;
      transition: all ease-in-out 0.5s;
    }
    .active {
      cursor: pointer;
      width: 8px;
      height: 8px;
      box-sizing: border-box;
      border: 1px solid #599ae5;
      border-radius: 50%;
      background-color: #599ae5;
      position: absolute;
      left: 0;
      transition: all ease-in-out 0.5s;
      & > div {
        width: 28px;
        height: 28px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: transparent;
        border-radius: 50%;
        overflow: hidden;
        span {
          display: block;
          width: 26px;
          height: 26px;
          position: absolute;
          top: -10px;
          left: -10px;
          background-color: transparent;
          overflow: hidden;
          &:first-child {
            transform: rotate(45deg) skew(2deg);
          }
          i {
            display: block;
            width: 34px;
            height: 34px;
            position: absolute;
            top: 5px;
            left: 5px;
            transform: skew(-22deg) rotate(-60deg) scale(1);
            background: radial-gradient(transparent 28%, #599ae5 33%);
          }
        }
      }
    }
  }
  .swiper_box {
    .home_swiper {
      height: 100vh;
      background: url("~@/assets/image/other_slide_bg.png") no-repeat center;
      background-size: cover;
      // &.swiper-container-vertical > .swiper-pagination-bullets {
      //   right: px(91) !important;
      // }
      // .swiper-pagination-bullet {
      //   width: 0.06rem !important;
      //   height: 0.06rem !important;
      //   position: relative;
      //   background: rgba(0, 0, 0, 0) !important;
      //   opacity: 1 !important;
      //   border: 1px solid #599ae5;
      //   margin: px(24) 0 !important;
      //   &:active {
      //     border: 1px solid #599ae5;
      //   }
      //   &.swiper-pagination-bullet-active {
      //     background: #599ae5 !important;
      //     &::after {
      //       content: "";
      //       display: block;
      //       position: absolute;
      //       top: px(-15);
      //       left: px(-7);
      //       width: px(27);
      //       height: px(27);
      //       background: url("~@/assets/image/swiper_pagination_bullet_home_icon.png")
      //         no-repeat center;
      //       background-size: cover;
      //     }
      //   }
      // }
      .swiper-slide {
        position: relative;
        &.home_1st_slide {
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
              height: px(275);
              text-align: center;
              width: px(623);
              background: url("~@/assets/image/home_1st_slide_logo.png")
                no-repeat center;
              background-size: cover;
              span {
                display: inline-block;
                margin: 0 auto;
                margin-top: px(130);
                margin-bottom: px(55);
                font-size: px(64);
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
        &.home_3rd_slide {
          ._box {
            background: url("~@/assets/image/home_2nd_slide_bg.png") no-repeat
              center;
            background-size: cover;
            width: px(1520);
            height: px(560);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-sizing: border-box;
            padding: px(60) px(120) px(0) px(120);
            ._top {
              img {
                display: block;
                width: px(310);
                height: px(61);
              }
            }
            ._center {
              margin-top: px(144);
              width: 100%;
              height: 1px;
              position: relative;
              display: flex;
              align-items: flex-end;
              margin-bottom: px(65);
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
                    width: px(12);
                    height: px(12);
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
                    bottom: calc(100% + 0.07rem);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    ._title {
                      text-align: center;
                      font-size: px(14);

                      color: rgba(255, 255, 255, 1);
                      line-height: px(24);
                      white-space: nowrap;
                      margin-bottom: px(2);
                    }
                    ._line {
                      width: 2px;
                      background-color: rgba(255, 255, 255, 0.6);
                      &.line1 {
                        height: px(20);
                      }
                      &.line2 {
                        height: px(60);
                      }
                      &.line3 {
                        height: px(100);
                      }
                    }
                  }
                }
              }
            }
            ._bottom {
              display: flex;
              align-items: center;
              justify-content: space-between;
              & > div {
                width: px(280);
                height: px(320);
                cursor: pointer;
                background: rgba(255, 255, 255, 1);
                & > .img_box {
                  display: block;
                  width: px(280);
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
                  height: px(152);
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  justify-content: center;
                  ._title {
                    display: flex;
                    align-items: center;
                    margin-bottom: px(8);
                    img {
                      display: block;
                      width: px(17);
                      height: px(36);
                      margin-right: px(8);
                    }
                    span {
                      font-size: px(48);

                      color: rgba(0, 0, 0, 1);
                      line-height: px(48);
                    }
                  }
                  ._into {
                    font-size: px(24);

                    color: #7f7f7f;
                    line-height: px(29);
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  }
                }
              }
            }
          }
        }
        &.home_2nd_slide {
          & > ._box {
            width: px(1280);
            height: px(600);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: flex-end;
            .left_box {
              width: px(720);
              height: px(600);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              position: relative;
              z-index: 99;
              & > .top_box {
                width: 100%;
                height: px(372);
                & > ._box {
                  width: px(900);
                  height: px(372);
                  box-sizing: border-box;
                  border: px(3) solid rgba(91, 155, 228, 1);
                  & > div {
                    width: px(860);
                    height: px(332);
                    margin: px(20);
                    background-color: #fff;
                    box-sizing: border-box;
                    padding: px(40) px(60) px(44) px(40);
                    display: flex;
                    flex-direction: column;
                    & > ._top {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      margin-bottom: px(25);
                      .pic {
                        width: px(290);
                        height: px(34);
                        display: block;
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

                      color: rgba(0, 0, 0, 1);
                      line-height: px(23);
                      margin-bottom: px(53);
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
              height: px(600);
              background: url("~@/assets/image/home_3rd_slide_pic3.png")
                no-repeat center;
              background-size: cover;
            }
          }
        }
        &.home_4th_slide {
          & > ._box {
            height: px(473);
            width: px(1280);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            & > ._top {
              margin-bottom: px(60);
              img {
                display: block;
                width: px(295);
                height: px(33);
              }
            }
            & > ._bottom {
              height: px(376);
              display: flex;
              align-items: center;
              & > div {
                width: 33.333%;
                height: 100%;
                border-left: 2px solid rgba(0, 0, 0, 0.2);
                padding-left: px(30);
                padding-right: px(32);
                overflow: hidden;
                display: flex;
                transition: all ease-in-out 0.5s;
                cursor: pointer;
                flex-direction: column;
                justify-content: space-between;
                &:hover {
                  width: px(544);
                  border-color: #5396e4;
                  & > ._top {
                    .title {
                      color: #5396e4;
                    }
                    .entitle {
                      color: #a9cbf2;
                    }
                  }
                  & > ._into {
                    color: #000000;
                  }
                  & > .pic_box {
                    ._pic {
                      -webkit-filter: grayscale(0%);
                      -moz-filter: grayscale(0%);
                      -ms-filter: grayscale(0%);
                      -o-filter: grayscale(0%);
                      filter: grayscale(0%);
                      filter: rgba(0, 0, 0, 0);
                      transform: scale(1.2);
                    }
                  }
                }
                & > ._top {
                  margin-bottom: px(64);
                  .title {
                    transition: all ease-in-out 0.5s;
                    font-size: px(28);
                    color: #000;
                    line-height: px(34);
                    margin-bottom: px(4);
                  }
                  .entitle {
                    transition: all ease-in-out 0.5s;
                    font-size: px(18);
                    color: #7f7f7f;
                    line-height: px(22);
                  }
                }
                & > ._into {
                  transition: all ease-in-out 0.5s;
                  font-size: px(24);
                  color: #7f7f7f;
                  line-height: px(29);
                  margin-bottom: px(16);
                }
                & > .pic_box {
                  display: flex;
                  align-items: flex-end;
                  overflow: hidden;
                  width: 100%;
                  height: px(200);
                  position: relative;
                  ._pic {
                    position: absolute;
                    left: 0;
                    top: 0;
                    transition: all ease-in-out 0.3s;
                    display: block;
                    width: px(480);
                    height: px(200);
                    -webkit-filter: grayscale(100%);
                    -moz-filter: grayscale(100%);
                    -ms-filter: grayscale(100%);
                    -o-filter: grayscale(100%);
                    filter: grayscale(100%);
                    filter: gray;
                  }
                }
              }
            }
          }
        }
        &.home_5th_slide {
          & > ._box {
            width: px(1280);
            height: px(441);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            ._top {
              img {
                display: block;
                width: px(316);
                height: px(33);
              }
              margin-bottom: px(40);
            }
            & > ._bottom {
              display: flex;
              & > ._left {
                width: px(560);
                margin-right: px(60);
                .topic_img {
                  display: block;
                  width: 100%;
                  height: px(245);
                }
                .topic_title {
                  height: px(27);
                  font-size: px(20);
                  font-weight: bold;
                  color: rgba(0, 0, 0, 1);
                  line-height: px(24);
                  margin-top: px(20);
                  margin-bottom: px(6);
                  padding-right: px(10);
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .topic_into {
                  font-size: px(16);

                  color: #333333;
                  line-height: px(22);
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                  margin-bottom: px(6);
                }
                .topic_time {
                  color: #7f7f7f;
                  font-size: px(14);
                }
              }
              ._right {
                width: px(660);
                height: px(273);
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
                  top: px(-48);
                  img {
                    transform: rotateZ(180deg);
                  }
                }
                .own_swiper_btn_next {
                  bottom: px(-48);
                }
                .sub_swiper {
                  height: px(273);
                  position: relative;
                  // &::after,
                  // &::before {
                  //   content: "";
                  //   display: block;
                  //   height: 2px;
                  //   width: 100%;
                  //   position: absolute;
                  //   background-color: #5b9be4;
                  //   left: 0;
                  // }
                  // &::after {
                  //   bottom: px(89);
                  // }
                  // &::before {
                  //   top: px(89);
                  // }
                  .swiper-wrapper {
                    height: px(273);
                    .swiper-slide {
                      color: #7f7f7f;
                      display: flex;
                      align-items: center;
                      &.swiper-slide-active {
                        border: 1px #5b9de4 solid;
                        border-left: none;
                        border-right: none;
                        .left_box {
                          span {
                            &.day {
                              color: #000;
                            }
                            &.year {
                              color: #333;
                            }
                          }
                        }
                        .right_box {
                          color: #333;
                        }
                      }
                      .left_box {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        margin-right: px(32);
                        span {
                          display: block;
                        }
                        .day {
                          height: px(32);
                          font-size: px(32);
                          line-height: px(32);
                        }
                        .year {
                          height: px(16);
                          margin-top: px(1);
                          font-size: px(16);
                          line-height: px(16);
                        }
                      }
                      .right_box {
                        flex: 1;
                        max-width: px(547);
                        ._title {
                          height: px(25);
                          font-size: px(18);

                          text-overflow: ellipsis;
                          overflow: hidden;
                          white-space: nowrap;
                          line-height: px(22);
                        }
                        ._into {
                          height: px(20);
                          font-size: px(14);
                          line-height: px(17);
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
