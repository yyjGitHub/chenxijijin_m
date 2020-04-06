<template>
  <div class="about_index_box layout_content_box">
    <div class="page_bottom_box">
      <div class="tab_box">
        <van-tabs v-model="activeName" @click="onClick" animated swipeable>
          <van-tab title="企业简介" name="QYJJ">
            <div class="page_top_box">
              <img :src="`${$basePicUrl}${topInfo.logo}`" alt="" srcset="" />
              <div class="_title">{{ topInfo.title }}</div>
            </div>
            <div class="part _part1">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    {{ QYJJ_Info.ctitle }}
                    <div class="_info">
                      {{ QYJJ_Info.title }}
                    </div>
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
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="企业治理" name="QYFC">
            <div class="part _part2">
              <div class="part_top_box p1 iss">
                <div class="_top iss">
                  <div class="_title">
                    {{ ZZJG_Info.ctitle }}
                  </div>
                  <div class="_line iss"></div>
                </div>
              </div>
              <div class="part_bottom_box p1">
                <div v-for="(item, index) in ZZJG_List" :key="index">
                  <img :src="`${$basePicUrl}${item.file}`" alt="" srcset="" />
                </div>
              </div>
              <div class="part_top_box p2 iss">
                <div class="_top iss">
                  <div class="_title">
                    {{ GLTD_Info.ctitle }}
                  </div>
                  <div class="_line iss"></div>
                </div>
              </div>
              <div class="part_bottom_box p2">
                <div v-for="(item, index) in GLTD_List" :key="index">
                  <div class="_top">
                    <img :src="`${$basePicUrl}${item.logo}`" alt="" srcset="" />
                    <div>
                      <span>{{ item.title }}</span
                      ><span>/ {{ item.entitle }}</span>
                    </div>
                  </div>
                  <div class="_bottom" v-html="item.content"></div>
                </div>
              </div>
              <div class="part_top_box p3 iss">
                <div class="_top iss">
                  <div class="_title">
                    {{ QYWH_Info.ctitle }}
                  </div>
                  <div class="_line iss"></div>
                </div>
              </div>
              <div class="part_bottom_box p3">
                <div v-for="(item, index) in QYWH_List" :key="index">
                  <img :src="`${$basePicUrl}${item.file}`" alt="" srcset="" />
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="业务介绍" name="TZCL">
            <div class="part _part3">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    {{ TZLN__Info.ctitle }}
                    <div class="_info">
                      {{ TZLN__Info.title }}
                    </div>
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box part1">
                <div class="_item">
                  <div class="_bottom">
                    <div v-for="(item, index) in TZLN__List" :key="index">
                      <div class="_top">
                        <img
                          src="~@/assets/image/half_circle_icon.png"
                          alt=""
                          srcset=""
                        />
                        <div>{{ item.title }}</div>
                      </div>
                      <div class="_bottom" v-html="item.content"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="part_top_box" style="background-color:#F8F8F8">
                <div class="_top">
                  <div class="_title">
                    {{ TZCL__Info.ctitle }}
                    <div class="_info">
                      {{ TZCL__Info.title }}
                    </div>
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box part2">
                <div class="_item">
                  <div class="_bottom">
                    <div v-for="(item, index) in TZCL__List" :key="index">
                      <div class="_top">
                        <div>{{ item.title }}</div>
                      </div>
                      <div class="_bottom" v-html="item.content"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="part_top_box" style="padding-top:1rem;">
                <div class="_top" style="margin-bottom:1.01rem;">
                  <div class="_title">
                    {{ FXKZ__Info.ctitle }}
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box part3">
                <div class="_item">
                  <div class="_bottom">
                    <div
                      v-for="(item, index) in FXKZ__List"
                      :key="index"
                      v-html="item.content"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="合作伙伴" name="HZHB">
            <div class="part _part4">
              <div class="part_top_box" style="padding-bottom:0;">
                <div class="_top" style="margin-bottom:0.86rem">
                  <div class="_title">
                    {{ HZHB_Info.ctitle }}
                  </div>
                  <div class="_line" style="bottom:-0.4rem"></div>
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
              <el-pagination
                small
                background
                prev-text="上一页"
                next-text="下一页"
                :page-size="10"
                layout="prev, pager, next"
                :total="HZHB_total"
                @current-change="pageChange"
              >
              </el-pagination>
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
        logo: "",
      },
      QYJJ_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: "",
      },
      QYJJ_List: [],
      QYFC_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: "",
      },
      QYFC_List: [
        {
          title: "",
          content: "",
          logo: "",
        },
      ],
      QYFCsub_List: [],
      TZCL_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: "",
      },
      TZCL_List: [],
      TZLN__Info: {
        title: "",
        entitle: "",
        content: "",
        logo: "",
      },
      TZLN__List: [],
      TZCL__Info: {
        title: "",
        entitle: "",
        content: "",
        logo: "",
      },
      TZCL__List: [],
      FXKZ__Info: {
        title: "",
        entitle: "",
        content: "",
        logo: "",
      },
      FXKZ__List: [],
      HZHB_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: "",
      },
      HZHB_List: [],
      HZHB_total: 0,
      HZHB_p: 1,
      ZZJG_Info: {
        title: "",
        content: "",
        logo: "",
      },
      ZZJG_List: [],
      GLTD_Info: {
        title: "",
        content: "",
        logo: "",
      },
      GLTD_List: [],
      QYWH_Info: {
        title: "",
        content: "",
        logo: "",
      },
      QYWH_List: [],
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
      deep: true,
    },
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
        .catch((response) => {
          console.log(response);
        });
    },
    pageChange(p) {
      this.HZHB_p = p;
      // 晨曦世界
      this.axios
        .get(
          `${this.$baseUrl}contentext/id/7/p/${this.HZHB_p}/count/10/sortTime/desc`
        )
        .then(({ data }) => {
          this.HZHB_List = data.data;
          this.HZHB_total = parseInt(data.count);
        })
        .catch((response) => {
          console.log(response);
        });
    },
    onClick(name) {
      this.HZHB_p = 1;
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
          info_url += `content/id/20`;
          list_url += `contentext/id/3`;
          break;
        case "HZHB":
          info_url += `content/id/7`;
          list_url += `contentext/id/7/p/${this.HZHB_p}/count/10/sortTime/desc`;
          break;
        default:
          break;
      }
      this.axios
        .get(info_url)
        .then(({ data }) => {
          this.$data[`${name}_Info`] = data.data;
        })
        .catch((response) => {
          console.log(response);
        });
      this.axios
        .get(list_url)
        .then(({ data }) => {
          this.$data[`${name}_List`] = data.data;
          if (name === "HZHB") {
            this.HZHB_total = parseInt(data.count);
          }
        })
        .catch((response) => {
          console.log(response);
        });
      if (name === "QYFC") {
        this.axios
          .get(`${this.$baseUrl}content/id/26`)
          .then(({ data }) => {
            this.ZZJG_Info = data.data;
          })
          .catch(() => {});
        this.axios
          .get(`${this.$baseUrl}contentext/id/26`)
          .then(({ data }) => {
            this.ZZJG_List = data.data;
          })
          .catch(() => {});
        this.axios
          .get(`${this.$baseUrl}content/id/27`)
          .then(({ data }) => {
            this.GLTD_Info = data.data;
          })
          .catch(() => {});
        this.axios
          .get(`${this.$baseUrl}contentext/id/27`)
          .then(({ data }) => {
            this.GLTD_List = data.data;
          })
          .catch(() => {});
        this.axios
          .get(`${this.$baseUrl}content/id/4`)
          .then(({ data }) => {
            this.QYWH_Info = data.data;
          })
          .catch(() => {});
        this.axios
          .get(`${this.$baseUrl}contentext/id/4`)
          .then(({ data }) => {
            this.QYWH_List = data.data;
          })
          .catch(() => {});
      }
      if (name === "TZCL") {
        this.axios
          .get(`${this.$baseUrl}content/id/20`)
          .then(({ data }) => {
            this.TZLN__Info = data.data;
          })
          .catch((response) => {
            console.log(response);
          });
        this.axios
          .get(`${this.$baseUrl}content/id/21`)
          .then(({ data }) => {
            this.TZCL__Info = data.data;
          })
          .catch((response) => {
            console.log(response);
          });
        this.axios
          .get(`${this.$baseUrl}content/id/22`)
          .then(({ data }) => {
            this.FXKZ__Info = data.data;
          })
          .catch((response) => {
            console.log(response);
          });
        this.axios
          .get(`${this.$baseUrl}contentext/id/20`)
          .then(({ data }) => {
            this.TZLN__List = data.data;
          })
          .catch((response) => {
            console.log(response);
          });
        this.axios
          .get(`${this.$baseUrl}contentext/id/21`)
          .then(({ data }) => {
            this.TZCL__List = data.data;
          })
          .catch((response) => {
            console.log(response);
          });
        this.axios
          .get(`${this.$baseUrl}contentext/id/22`)
          .then(({ data }) => {
            this.FXKZ__List = data.data;
          })
          .catch((response) => {
            console.log(response);
          });
      }
    },
  },
};
</script>

<style lang="scss">
.about_index_box {
  &.layout_content_box {
    .page_bottom_box {
      ._part1 {
        .part_bottom_box {
          display: flex;
          flex-wrap: wrap;
          & > ._item {
            width: px(308);
            height: px(199);
            margin-right: px(38);
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
          &.p2.iss {
            background-color: #f8f8f8;
            padding-bottom: px(56) !important;
          }
        }
        .part_bottom_box {
          &.p1,
          &.p3 {
            img {
              display: block;
              width: px(670);
              position: relative;
              left: 50%;
              transform: translateX(-50%);
            }
            p {
              display: block;
            }
          }
          &.p2 {
            background-color: #f8f8f8;
            padding-bottom: px(149) !important;
            & > div {
              width: px(654);
              box-sizing: border-box;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 0px 36px 0px rgba(246, 246, 246, 1);
              border-radius: px(10);
              margin-bottom: px(113);
              padding: 0 px(56);
              padding-bottom: px(49);
              &:last-child {
                margin-bottom: 0;
              }
              ._top {
                height: px(506);
                border-bottom: 1px solid rgba(0, 0, 0, 0.4);
                display: flex;
                flex-direction: column;
                align-items: center;
                & > * {
                  position: relative;
                  top: px(-52);
                }
                img {
                  width: px(418);
                  height: px(418);
                }
                div {
                  display: flex;
                  align-items: center;
                  & > span {
                    display: block;
                    &:first-child {
                      margin-right: px(14);
                      height: px(80);
                      font-size: px(56);
                      line-height: px(80);
                      font-weight: bold;
                    }
                    &:last-child {
                      height: px(80);
                      font-size: px(32);
                      line-height: px(80);
                      padding-top: px(10);
                    }
                  }
                }
              }
              ._bottom {
                padding-top: px(20);
                font-size: px(28);
                line-height: px(48);
                p {
                  display: block;
                  margin-bottom: px(20);
                  &:last-child {
                    margin-bottom: 0;
                  }
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
          }
          &.part1 {
            padding-bottom: px(100) !important;
            & > ._item {
              & > ._bottom {
                & > div {
                  &:last-child {
                    margin-bottom: 0;
                  }
                  margin-bottom: px(38);
                  width: 100%;
                  height: px(280);
                  box-sizing: border-box;
                  padding: 0 px(117);
                  padding-top: px(45);
                  background: rgba(250, 250, 250, 1);
                  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
                  ._top {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #979797;
                    padding-bottom: px(21);
                    div {
                      height: px(55);
                      font-size: px(40);
                      line-height: px(55);
                      color: #000;
                      font-weight: bold;
                    }
                    img {
                      display: block;
                      width: px(15);
                      height: px(30);
                      margin-right: px(20);
                    }
                  }
                  ._bottom {
                    margin-top: px(28);
                    font-size: px(27);
                    line-height: px(35);
                    color: #69666a;
                    p {
                      font-size: px(26);
                      line-height: px(35);
                      margin-bottom: px(10);
                      &:last-child {
                        margin-bottom: 0;
                      }
                    }
                  }
                }
              }
            }
          }
          &.part2 {
            padding-bottom: px(106) !important;
            background-color: #f8f8f8;
            & > ._item {
              & > ._bottom {
                & > div {
                  &:last-child {
                    margin-bottom: 0;
                  }
                  position: relative;
                  &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: px(10);
                    height: px(185);
                    background-color: #5b9be4;
                  }
                  margin-bottom: px(38);
                  width: 100%;
                  height: px(274);
                  box-sizing: border-box;
                  padding: 0 px(64);
                  padding-top: px(45);
                  background: #fff;
                  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
                  ._top {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #979797;
                    padding-bottom: px(19);
                    div {
                      height: px(55);
                      font-size: px(40);
                      line-height: px(55);
                      color: #5b9be4;
                      font-weight: bold;
                    }
                  }
                  ._bottom {
                    margin-top: px(28);
                    font-size: px(27);
                    line-height: px(35);
                    color: #69666a;
                    p {
                      font-size: px(26);
                      line-height: px(35);
                      margin-bottom: px(10);
                      &:last-child {
                        margin-bottom: 0;
                      }
                    }
                  }
                }
              }
            }
          }
          &.part3 {
            ._item {
              ._bottom {
                padding-bottom: px(77);
                & > div {
                  p {
                    font-size: px(28);
                    line-height: px(48);
                    margin-bottom: px(20);
                    &:last-child {
                      margin-bottom: 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
      ._part4 {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > * {
          width: 100%;
        }
        .part_bottom_box {
          display: flex;
          flex-wrap: wrap;
          & > div {
            margin-right: px(25);
            margin-top: px(29);
            width: px(314);
            height: px(208);
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

              width: px(252);
              height: px(126);
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
        .el-pagination {
          margin-top: px(71);
          width: 95%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
