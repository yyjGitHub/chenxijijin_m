<template>
  <div class="service_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/m/relation_top_bg.png" alt="" srcset="" />
      <div class="_title">高效及时 用心服务</div>
    </div>
    <div class="page_bottom_box">
      <div class="tab_box">
        <van-tabs v-model="activeName" animated swipeable>
          <van-tab title="联系我们" name="LXWM">
            <div class="part _part1">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    联系我们
                  </div>
                  <div class="_entitle">
                    CONTACT
                  </div>
                  <div class="_line"></div>
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
                  <div class="_tooltip">
                    <img
                      src="~@/assets/image/telphone_icon.png"
                      class="_icon"
                      alt=""
                      srcset=""
                    />
                    <span>021-58995866</span>
                    <div class="line"></div>
                    <img
                      src="~@/assets/image/address_icon.png"
                      class="_icon"
                      alt=""
                      srcset=""
                    />
                    <span class="_address"
                      >浦东新区张杨路2389弄置汇旭辉广场C座15楼</span
                    >
                  </div>
                </div>
                <div class="form_wrap">
                  <div class="inline">
                    <input type="text" class="name" placeholder="姓名" />
                    <input type="text" class="email" placeholder="邮箱/手机" />
                  </div>
                  <textarea
                    name="feedback"
                    class="feedback"
                    placeholder="请输入留言信息"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div class="submit_wrap">
                  <div class="_left">
                    <img src="~@/assets/m/weibo_icon.png" alt="" srcset="" />
                    <img src="~@/assets/m/wechat_icon.png" alt="" srcset="" />
                  </div>
                  <div class="_submit">
                    提交
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="社会招聘" name="SHZP">
            <div class="part _part2">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    人才招聘
                  </div>
                  <div class="_entitle">
                    TALENT
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box"></div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager();
export default {
  data() {
    return {
      activeName: "SHZP",
      // amapManager,
      // zoom: "12",
      // center: [121.545101, 31.236498]
      amapManager,
      zoom: 16,
      center: [121.545101, 31.236498],
      mapStyle: "fresh",
      name: "",
      contact: "",
      content: ""
    };
  }
};
</script>

<style lang="scss">
.service_index_box {
  .part {
    .part_top_box {
      padding-bottom: px(20) !important;
      ._top {
        margin-bottom: px(60) !important;
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
          margin-bottom: px(24);
          ._tooltip {
            width: 100%;
            height: px(64);
            padding: 0 px(31);
            background-color: #599ae5;
            display: flex;
            align-items: center;
            position: absolute;
            left: px(0);
            bottom: px(0);
            box-sizing: border-box;
            ._icon {
              display: block;
              width: px(21);
              height: px(21);
              margin-right: px(7);
            }
            span {
              display: block;
              font-size: px(20);
              color: rgba(255, 255, 255, 1);
              &._address {
                width: px(330);
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
            .line {
              width: 1px;
              height: px(31);
              background-color: #fff;
              margin-left: px(28);
              margin-right: px(36);
            }
          }
        }
        .form_wrap {
          input {
            height: px(40);
            line-height: px(40);
            border: 1px solid #cccccc;
            box-sizing: border-box;
            padding: 0 px(25);
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
            box-sizing: border-box;
            padding: px(10) px(24);
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
              width: px(33);
              height: px(33);
              &:first-child {
                margin-right: px(15);
              }
            }
          }
          ._submit {
            width: px(120);
            height: px(40);
            line-height: px(40);
            color: #fff;
            background-color: #599ae5;
            text-align: center;
            font-size: px(20);
          }
        }
      }
    }
    &._part2 {
      .part_bottom_box {
      }
    }
  }
}
</style>
