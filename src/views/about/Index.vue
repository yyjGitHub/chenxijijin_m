<template>
  <div class="about_index_box layout_content_box">
    <div class="page_top_box">
      <img :src="`${$basePicUrl}${topInfo.logo}`" alt="" srcset="" />
      <div class="_title">{{ topInfo.title }}</div>
    </div>
    <div class="page_bottom_box">
      <div class="tab_box">
        <van-tabs v-model="activeName" @click="onClick" animated swipeable>
          <van-tab title="企业简介" name="QYJJ">
            <div class="part _part1">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    晨曦基金
                    <div class="_info">
                      {{ QYJJ_Info.title }}
                    </div>
                  </div>
                  <div class="_entitle">
                    COMPANY
                  </div>
                  <div class="_line"></div>
                </div>
                <div class="_bottom" v-html="QYJJ_Info.content"></div>
              </div>
              <div class="part_bottom_box">
                <div
                  class="_item"
                  v-for="(item, index) in QYJJ_List"
                  :key="index"
                >
                  <img :src="`${$basePicUrl}${item.file}`" alt="" srcset="" />
                  <div>
                    <span class="_title">{{ item.title }}</span>
                    <span class="_info" v-html="item.content"> </span>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="企业风采" name="QYFC">
            <div class="part _part2">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    晨曦愿景
                  </div>
                  <div class="_entitle">
                    VISION
                  </div>
                  <div class="_info">
                    {{ QYFC_Info.title }}
                  </div>
                  <div class="_line"></div>
                </div>
                <div class="_bottom" v-html="QYFC_Info.content"></div>
              </div>
              <div class="part_bottom_box">
                <div class="_top">
                  <img
                    :src="`${$basePicUrl}${QYFC_List[0].file}`"
                    alt=""
                    srcset=""
                  />
                  <div class="_title">
                    晨曦基金
                  </div>
                  <div class="_subtitle">
                    {{ QYFC_List[0].title }}
                  </div>
                  <div class="_into" v-html="QYFC_List[0].content"></div>
                </div>
                <div class="_bottom">
                  <div
                    class="_item"
                    v-for="(item, index) in QYFCsub_List"
                    :key="index"
                  >
                    <img :src="`${$basePicUrl}${item.file}`" alt="" srcset="" />
                    <div>
                      <span>{{ item.title }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="投资策略" name="TZCL">
            <div class="part _part3">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    晨曦策略
                    <div class="_info">
                      {{ TZCL_Info.title }}
                    </div>
                  </div>
                  <div class="_entitle">
                    STRATEGY
                  </div>

                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_item">
                  <div class="_top">
                    <img
                      :src="`${$basePicUrl}${TZLN__Info.logo}`"
                      alt=""
                      srcset=""
                    />
                    <span class="_title">{{ TZLN__Info.ctitle }}</span>
                    <span class="_subtitle">{{ TZLN__Info.title }}</span>
                  </div>
                  <div class="_bottom">
                    <div v-for="(item, index) in TZLN__List" :key="index">
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>{{ item.title }} | {{ item.entitle }}</span>
                      </div>
                      <div class="into_box" v-html="item.content"></div>
                    </div>
                  </div>
                </div>
                <div class="_item">
                  <div class="_top">
                    <img
                      :src="`${$basePicUrl}${TZCL__Info.logo}`"
                      alt=""
                      srcset=""
                    />
                    <span class="_title">{{ TZCL__Info.ctitle }}</span>
                    <span class="_subtitle">{{ TZCL__Info.title }}</span>
                  </div>
                  <div class="_bottom">
                    <div v-for="(item, index) in TZCL__List" :key="index">
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>{{ item.title }} | {{ item.entitle }}</span>
                      </div>
                      <div class="into_box" v-html="item.content"></div>
                    </div>
                  </div>
                </div>
                <div class="_item">
                  <div class="_top">
                    <img
                      :src="`${$basePicUrl}${FXKZ__Info.logo}`"
                      alt=""
                      srcset=""
                    />
                    <span class="_title">{{ FXKZ__Info.ctitle }}</span>
                    <span class="_subtitle">{{ FXKZ__Info.title }}</span>
                  </div>
                  <div class="_bottom">
                    <div v-for="(item, index) in FXKZ__List" :key="index">
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>{{ item.title }} | {{ item.entitle }}</span>
                      </div>
                      <div class="into_box" v-html="item.content"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="合作伙伴" name="HZHB">
            <div class="part _part4">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    合作伙伴
                    <div class="_info">
                      {{ HZHB_Info.title }}
                    </div>
                  </div>
                  <div class="_entitle">
                    PARTNERS
                  </div>

                  <div class="_line"></div>
                </div>
                <div class="_bottom" v-html="HZHB_Info.content"></div>
              </div>
              <div class="part_bottom_box">
                <div v-for="(item, index) in HZHB_List" :key="index">
                  <div class="_box">
                    <img :src="`${$basePicUrl}${item.file}`" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "QYJJ",
      topInfo: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      QYJJ_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      QYJJ_List: [],
      QYFC_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      QYFC_List: [
        {
          title: "",
          content: "",
          logo: ""
        }
      ],
      QYFCsub_List: [],
      TZCL_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      TZCL_List: [],
      TZLN__Info: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      TZLN__List: [],
      TZCL__Info: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      TZCL__List: [],
      FXKZ__Info: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      FXKZ__List: [],
      HZHB_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      HZHB_List: []
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log(newVal);
        if (newVal.query.hasOwnProperty("_")) {
          this.activeName = newVal.query["_"];
          this.onClick(newVal.query["_"]);
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.$baseUrl}content/id/2`)
        .then(({ data }) => {
          this.topInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
    },
    onClick(name) {
      console.log(name);
      let info_url = `${this.$baseUrl}`;
      let list_url = `${this.$baseUrl}`;
      let listsub_url = `${this.$baseUrl}`;
      switch (name) {
        case "QYJJ":
          info_url += `content/id/3`;
          list_url += `contentext/id/3`;
          break;
        case "QYFC":
          info_url += `content/id/19`;
          list_url += `contentext/id/4`;
          listsub_url += `contentext/id/5`;
          break;
        case "TZCL":
          info_url += `content/id/6`;
          list_url += `contentext/id/3`;
          break;
        case "HZHB":
          info_url += `content/id/7`;
          list_url += `contentext/id/7`;
          break;
        default:
          break;
      }
      this.axios
        .get(info_url)
        .then(({ data }) => {
          this.$data[`${name}_Info`] = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      this.axios
        .get(list_url)
        .then(({ data }) => {
          this.$data[`${name}_List`] = data.data;
        })
        .catch(response => {
          console.log(response);
        });
      if (name === "QYFC") {
        this.axios
          .get(listsub_url)
          .then(({ data }) => {
            this.$data[`${name}sub_List`] = data.data;
          })
          .catch(response => {
            console.log(response);
          });
      }
      if (name === "TZCL") {
        this.axios
          .get(`${this.$baseUrl}content/id/20`)
          .then(({ data }) => {
            this.TZLN__Info = data.data;
          })
          .catch(response => {
            console.log(response);
          });
        this.axios
          .get(`${this.$baseUrl}content/id/21`)
          .then(({ data }) => {
            this.TZCL__Info = data.data;
          })
          .catch(response => {
            console.log(response);
          });
        this.axios
          .get(`${this.$baseUrl}content/id/22`)
          .then(({ data }) => {
            this.FXKZ__Info = data.data;
          })
          .catch(response => {
            console.log(response);
          });
        this.axios
          .get(`${this.$baseUrl}contentext/id/20`)
          .then(({ data }) => {
            this.TZLN__List = data.data;
          })
          .catch(response => {
            console.log(response);
          });
        this.axios
          .get(`${this.$baseUrl}contentext/id/21`)
          .then(({ data }) => {
            this.TZCL__List = data.data;
          })
          .catch(response => {
            console.log(response);
          });
        this.axios
          .get(`${this.$baseUrl}contentext/id/22`)
          .then(({ data }) => {
            this.FXKZ__List = data.data;
          })
          .catch(response => {
            console.log(response);
          });
      }
    }
  }
};
</script>

<style lang="scss">
.about_index_box {
  .page_bottom_box {
    ._part1 {
      .part_bottom_box {
        display: flex;
        flex-wrap: wrap;
        & > ._item {
          width: px(302);
          margin-right: px(50);
          margin-top: px(40);
          &:nth-child(1),
          &:nth-child(2) {
            margin-top: 0;
          }
          & > img {
            display: block;
            width: 100%;
          }
          &:nth-child(2n) {
            margin-right: 0;
          }
          & > div {
            background-color: #f8f8f8;
            width: 100%;
            height: px(160);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            span {
              display: block;
              &._title {
                height: px(38);
                font-size: px(28);
                color: rgba(0, 0, 0, 1);
                line-height: px(38);
                font-weight: bold;
                margin-bottom: px(10);
              }
              &._info {
                font-size: px(24);
                color: #353535;
                text-align: center;
                line-height: px(26);
              }
            }
          }
        }
      }
    }
    ._part2 {
      .part_top_box {
        ._top {
          margin-bottom: px(143) !important;
          ._line {
            bottom: px(-40) !important;
          }
          ._info {
            font-weight: bold !important;
            bottom: px(-113) !important;
            height: px(32) !important;
            font-size: px(32) !important;
            line-height: px(32) !important;
            color: #666666 !important;
            width: 100% !important;
          }
        }
        ._bottom {
          width: px(600) !important;
        }
      }
      .part_bottom_box {
        ._top {
          width: 100%;
          box-sizing: border-box;
          padding: px(48);
          background-color: #f8f8f8;
          margin-bottom: px(40);
          & > img {
            display: block;
            width: 100%;
            margin-bottom: px(24);
          }
          ._title {
            height: px(40);
            font-size: px(38);
            line-height: px(40);
            color: #636363;
            font-weight: bold;
            margin-bottom: px(10);
          }
          ._subtitle {
            height: px(30);
            font-size: px(28);
            color: rgba(89, 154, 229, 1);
            line-height: px(30);
            letter-spacing: px(1);
            margin-bottom: px(20);
          }
          ._into {
            font-size: px(28);
            color: #666666;
            line-height: px(48);
          }
        }
        ._bottom {
          display: flex;
          flex-wrap: wrap;
          & > ._item {
            margin-right: px(40);
            margin-top: px(40);
            width: px(307);
            &:nth-child(2n) {
              margin-right: 0;
            }
            & > img {
              display: block;
              width: 100%;
              height: px(307);
            }
            &:nth-child(1),
            &:nth-child(2) {
              margin-top: 0;
            }
            & > div {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: px(102);
              box-sizing: border-box;
              padding: 0 px(54);
              background-color: #f8f8f8;
              span {
                display: block;
                font-size: px(22);
                line-height: px(30);
                text-align: center;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
    ._part3 {
      .part_top_box {
        padding-bottom: 0 !important;
      }
      .part_bottom_box {
        & > ._item {
          margin-bottom: px(48);
          &:last-child {
            margin-bottom: 0;
          }
          & > ._top {
            width: 100%;
            height: px(153);
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            & > img {
              display: block;
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              z-index: -1;
            }
            ._title {
              height: px(46);
              font-size: px(46);
              color: rgba(255, 255, 255, 1);
              line-height: px(46);
              font-weight: bold;
              margin-bottom: px(12);
            }
            ._subtitle {
              font-size: px(18);
              font-family: Helvetica;
              color: rgba(255, 255, 255, 1);
              letter-spacing: px(2);
            }
          }
          & > ._bottom {
            & > div {
              margin-top: px(24);
              & > .title_box {
                display: flex;
                align-items: center;
                margin-bottom: px(16);
                & > img {
                  display: block;
                  width: px(23);
                  height: px(11);
                  margin-right: px(13);
                  margin-top: px(-5);
                }
                span {
                  display: block;
                  height: px(42);
                  font-size: px(30);
                  color: rgba(0, 0, 0, 1);
                  font-weight: bold;
                  line-height: px(42);
                }
              }
              & > .into_box {
                span {
                  display: block;
                  font-size: px(28);
                  font-family: Helvetica;
                  color: #757575;
                  line-height: px(48);
                }
                & > p {
                  & > span {
                    margin-bottom: px(18);
                  }
                }
                & > span {
                  margin-bottom: px(18);
                }
              }
            }
          }
        }
      }
    }
    ._part4 {
      .part_bottom_box {
        display: flex;
        flex-wrap: wrap;
        & > div {
          margin-right: px(16);
          margin-top: px(16);
          width: px(310);
          height: px(160);
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #efefef;
          &:nth-child(2n) {
            margin-right: 0;
          }
          &:nth-child(1),
          &:nth-child(2) {
            margin-top: 0;
          }
          & > ._box {
            position: relative;
            overflow: hidden;

            width: px(249);
            height: px(124);
            & > img {
              display: block;
              top: px(-1);
              left: px(-2);
              position: absolute;
              width: px(253);
              height: px(126);
            }
          }
        }
      }
    }
  }
}
</style>
