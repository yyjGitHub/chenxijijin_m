<template>
  <div class="service_index_box layout_content_box">
    <div class="page_bottom_box">
      <div class="tab_box">
        <van-tabs v-model="activeName" @change="onClick" animated swipeable>
          <van-tab :title="SHZP_Info.ctitle" name="LXWM">
            <div class="part _part2">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    {{ SHZP_Info.ctitle }}
                  </div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="collapse_box">
                  <van-collapse v-model="activeNames">
                    <van-collapse-item
                      v-for="(item, index) in SHZP_List"
                      :key="index"
                      :name="index + 1 + ' '"
                    >
                      <div slot="title">
                        <div class="_left">
                          <span class="_title"
                            >{{ item.title }}（{{ item.name }}）</span
                          >
                          <span class="_into">
                            <span>{{ item.attr }}</span>
                            <span>资产数据部</span>
                            <span>{{ item.time.split(" ")[0] }}</span>
                          </span>
                        </div>
                        <span class="_more">查看详情</span>
                      </div>
                      <div class="_content" v-html="item.content"></div
                    ></van-collapse-item>
                  </van-collapse>
                </div>
                <div class="_morebtn" v-if="!get_more" @click="getMore">
                  展开更多
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab :title="HZQT_Info.ctitle" name="SHZP">
            <div class="part _part1">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    {{ HZQT_Info.ctitle }}
                  </div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="map_wrap">
                  <el-amap
                    ref="map"
                    vid="amapDemo"
                    :amap-manager="amapManager"
                    :center="center"
                    :zoom="zoom"
                    class="amap-demo"
                  >
                    <el-amap-marker
                      vid="component-marker"
                      :position="center"
                    ></el-amap-marker>
                  </el-amap>
                </div>
                <div class="_tooltip">
                  <div>
                    <img
                      src="~@/assets/image/address_icon.png"
                      class="_icon"
                      alt=""
                      srcset=""
                    />
                    <span class="_address"
                      >上海浦东新区张杨路2389弄<br />
                      置汇旭辉广场C座15楼</span
                    >
                  </div>
                  <span class="line"></span>
                  <div>
                    <img
                      src="~@/assets/image/telphone_icon.png"
                      class="_icon"
                      alt=""
                      srcset=""
                    />
                    <span>021-58995866</span>
                  </div>
                  <span class="line"></span>
                  <div>
                    <img
                      src="~@/assets/image/chuanzhen_icon.png"
                      class="_icon"
                      alt=""
                      srcset=""
                    />
                    <span>58995866-217</span>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="zz" v-if="showzz" @click="showzz = !showzz">
      <div class="_box" @click.stop="showzz = true">
        <img src="@/assets/m/qrcode_icon.png" alt="" srcset="" />
        <span>长按二维码，关注旭辉晨曦官方账号</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager();
export default {
  data() {
    return {
      activeName: "SHZP",
      activeNames: ["1"],
      // amapManager,
      // zoom: "12",
      // center: [121.545101, 31.236498]
      showzz: false,
      amapManager,
      zoom: 17,
      center: [121.554626, 31.242531],
      mapStyle: "fresh",
      name: "",
      contact: "",
      content: "",
      topInfo: {
        title: "",
        entitle: "",
        logo: "",
        content: "",
      },
      SHZP_List: [],
      get_more: false,
      SHZP_Info: {
        title: "",
        content: "",
        logo: "",
      },
      HZQT_Info: {
        title: "",
        content: "",
        logo: "",
      },
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log(newVal);
        if (newVal.query.hasOwnProperty("_")) {
          this.activeName = newVal.query["_"];
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
        .get(`${this.$baseUrl}content/id/17`)
        .then(({ data }) => {
          this.SHZP_Info = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/18`)
        .then(({ data }) => {
          this.HZQT_Info = data.data;
        })
        .catch(() => {});
      this.axios
        .get(`${this.$baseUrl}content/id/16`)
        .then(({ data }) => {
          this.topInfo = data.data;
        })
        .catch((response) => {
          console.log(response);
        });
      //  合作洽谈
      this.axios
        .get(`${this.$baseUrl}contentjob/id/18/p/1/count/2`)
        .then(({ data }) => {
          this.SHZP_List = data.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
    postData() {
      this.axios
        .post(`${this.$baseUrl}contact`, {
          name: this.name,
          tel: this.contact,
          content: this.content,
        })
        .then(({ data }) => {
          console.log(data);
          if (data.status === "1") {
            Message({
              message: "添加成功",
              type: "success",
            });
            this.name = "";
            this.contact = "";
            this.content = "";
          }
        })
        .catch((response) => {
          console.log(response);
        });
    },
    getMore() {
      this.get_more = true;
      //  合作洽谈
      this.axios
        .get(`${this.$baseUrl}contentjob/id/18/p/1/count/99999`)
        .then(({ data }) => {
          this.SHZP_List = data.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style lang="scss">
.service_index_box {
  .page_bottom_box {
    .van-tabs--line .van-tabs__wrap {
      // padding: 0 25%;
    }
  }
  .part {
    .part_top_box {
      padding-bottom: px(0) !important;
      ._top {
        margin-bottom: px(46) !important;
        ._line {
          bottom: px(-32) !important;
        }
      }
      ._top {
        ._title {
          position: relative;
          z-index: 2;
        }
        ._entitle {
          z-index: 1 !important;
        }
      }
    }
    &._part1 {
      .part_bottom_box {
        .map_wrap {
          width: 100%;
          height: px(480);
          position: relative;
        }
        ._tooltip {
          width: 100%;
          padding: px(30) px(27);
          background-color: #599ae5;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          & > div {
            padding: px(18);
            display: flex;
            align-items: flex-start;
            &:last-child {
              margin-bottom: 0;
              padding-bottom: 0;
            }
            &:first-child {
              padding-top: 0;
            }
            ._icon {
              display: block;
              width: px(23);
              height: px(23);
              margin-top: px(5);
              margin-right: px(10);
            }
            span {
              display: block;
              font-size: px(24);
              line-height: px(34);
              color: rgba(255, 255, 255, 1);
              &._address {
                width: px(550);
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
          }

          .line {
            display: block;
            width: px(599);
            height: px(1);
            background-color: rgba(0, 0, 0, 0);
            position: relative;
            &::after {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 1px;
              content: "";
              background-color: #fff;
              -webkit-transform: scaleY(0.5);
            }
          }
        }
        .form_wrap {
          input {
            height: px(54);
            line-height: px(54);
            border: 1px solid #cccccc;
            box-sizing: border-box;
            padding: 0 px(12);
            font-size: px(20);
          }
          .inline {
            display: flex;
            align-items: center;
            margin-bottom: px(16);
            input {
              display: block;
              &.name {
                width: px(271);
                margin-right: px(16);
              }
              &.email {
                width: px(367);
              }
            }
          }
          .feedback {
            border: 1px solid #cccccc;
            display: block;
            width: 100%;
            min-height: px(120);
            font-size: px(20);
            box-sizing: border-box;
            padding: px(10) px(12);
            line-height: px(32);
            margin-bottom: px(24);
          }
        }
        .submit_wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          ._left {
            display: flex;
            align-items: center;
            img {
              display: block;
              width: px(48);
              height: px(48);
              &:first-child {
                margin-right: px(18);
              }
            }
          }
          ._submit {
            width: px(120);
            height: px(50);
            line-height: px(50);
            color: #fff;
            background-color: #599ae5;
            text-align: center;
            font-size: px(26);
          }
        }
      }
    }
    &._part2 {
      .part_bottom_box {
        display: flex;
        align-items: center;
        flex-direction: column;
        .collapse_box {
          width: 100%;
          margin-bottom: px(48);
          .van-cell__right-icon {
            color: #599ae5;
          }
          .van-collapse-item__title .van-cell__right-icon::before {
            transform: rotate(-0deg);
          }
          .van-collapse-item__title--expanded .van-cell__right-icon::before {
            transform: rotate(90deg);
          }
          .van-collapse-item {
            margin-bottom: px(24);
            &:last-child {
              margin-bottom: 0;
            }
          }
          .van-cell {
            display: flex;
            align-items: center;
            height: px(108);
            box-sizing: border-box;
            padding: px(24) px(24) px(24) px(20);
            background-color: #f8f8f8;
            &:not(:last-child)::after {
              border-color: #979797;
              left: 0;
            }
          }
          .van-collapse-item__wrapper {
            background-color: #f8f8f8;
            .van-collapse-item__content {
              background-color: #f8f8f8;
            }
          }
          .van-cell__title {
            display: flex;
            align-items: center;
            & > div {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              ._more {
                font-size: px(20);
                color: rgba(89, 154, 229, 1);
              }
              ._left {
                max-width: px(450);
                & span {
                  display: block;
                }
                ._title {
                  height: px(32);
                  font-size: px(28);
                  font-weight: bold;
                  color: #333;
                  line-height: px(32);
                  margin-bottom: px(8);
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                }
                ._into {
                  display: flex;
                  align-items: center;
                  & > span {
                    margin-right: px(24);
                    height: px(24);
                    font-size: px(20);
                    color: #949494;
                    line-height: px(24);
                    &:last-child {
                      margin-right: 0;
                    }
                  }
                }
              }
            }
          }
          .van-collapse-item__content {
            padding: px(24);
            & > ._content {
              line-height: px(36);
              font-size: px(24);
              & > div {
                margin-bottom: px(16);
                // & > span {
                //   display: block;
                //   font-size: px(14);
                //   color: rgba(130, 130, 130, 1);
                //   line-height: px(17);
                // }
                strong,
                span {
                  color: #828282;
                  display: block;
                  font-size: px(24);
                  line-height: px(36);
                }
                strong {
                  margin-bottom: px(4);
                }
              }
            }
          }
        }
        ._morebtn {
          width: px(240);
          height: px(48);
          border: 1px solid #5b9be4;
          color: #5b9be4;
          text-align: center;
          line-height: px(48);
          font-size: px(20);
        }
      }
    }
  }
  .zz {
    height: calc(100vh - 1.2rem);
    position: fixed;
    top: px(120);
    width: 100%;
    left: 0;
    z-index: 520;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    ._box {
      width: px(506);
      height: px(493);
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        display: block;
        width: px(300);
        height: px(300);
        margin-top: px(64);
        margin-bottom: px(32);
      }
      span {
        display: block;
        text-align: center;
        height: px(33);
        font-size: px(24);
        color: rgba(0, 0, 0, 1);
        line-height: px(33);
      }
    }
  }
}
</style>
