<template>
  <div class="service_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/image/service_index_toppic.png" alt="" srcset="" />
      <div class="_box">
        <div class="_title">高效及时 用心服务</div>
        <div class="_into">
          公司以“轻资产运营”为导向，多元发展地产基金和股权投资等多个业务板块，致力于
          成为房地产综合服务提供商和独具特色的股权投资机构
        </div>
      </div>
    </div>
    <div class="page_bottom_box layout_content_innerbox">
      <div class="part1" id="LXWM">
        <div class="_c">
          <div class="layout_content_title">
            联系我们
          </div>
          <div class="layout_content_into">
            发现价值 协同合作
          </div>
          <div class="_bottom">
            <div class="_box">
              <div class="map_wrapper">
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
              <div class="_form">
                <div class="_title">
                  CONTACT US
                </div>
                <div class="_subtitle">
                  联系我们
                </div>
                <el-input
                  class="name"
                  v-model="name"
                  placeholder="用户名"
                ></el-input>
                <el-input
                  class="contact"
                  v-model="contact"
                  placeholder="邮箱/手机"
                ></el-input>
                <el-input
                  class="content"
                  type="textarea"
                  placeholder="请输入留言信息"
                  v-model="content"
                >
                </el-input>
                <div class="submit_share">
                  <div class="_left">
                    <img
                      src="~@/assets/image/wechat_icon.png"
                      alt=""
                      srcset=""
                    />
                    <img
                      src="~@/assets/image/weibo_icon.png"
                      alt=""
                      srcset=""
                    />
                    <img
                      src="~@/assets/image/share_icon.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="_submit">提交</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="part2" id="SHZP">
        <div class="_c">
          <div class="layout_content_title">
            人才招聘
          </div>
          <div class="layout_content_line"></div>
          <div class="_bottom">
            <div class="_box">
              <div class="_top">
                <span>职位名称</span>
                <span>工作地点</span>
                <span>查看详情</span>
                <span>发布时间</span>
                <span>申请职位</span>
              </div>
              <div class="_bottom">
                <div class="_item">
                  <div class="_left">
                    <span class="_title">
                      资产管理经理/总监（投后）
                    </span>
                    <span class="_into">
                      财务背景
                    </span>
                  </div>
                  <div class="_right">
                    <div class="_top">
                      <span>上海</span>
                      <span>查看详情</span>
                      <span>2018-04-02</span>
                      <span>
                        <div class="apply">APPLY</div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="_item">
                  <div class="_left">
                    <span class="_title">
                      资产管理经理/总监（投后）
                    </span>
                    <span class="_into">
                      财务背景
                    </span>
                  </div>
                  <div class="_right">
                    <div class="_top">
                      <span>上海</span>
                      <span>查看详情</span>
                      <span>2018-04-02</span>
                      <span>
                        <div class="apply">APPLY</div>
                      </span>
                    </div>
                    <div class="_into">
                      <div>
                        <b>工作职责：</b>
                        <span>1、全日制本科以上学历；</span>
                        <span
                          >2、5年以上工作经验，需在TOP50地产公司有过财务、运营、投资方面从业经历；</span
                        >
                        <span>3、有过项目完整开发周期经验的优先</span>
                      </div>
                      <div>
                        <b>工作职责：</b>
                        <span>1、全日制本科以上学历；</span>
                        <span
                          >2、5年以上工作经验，需在TOP50地产公司有过财务、运营、投资方面从业经历；</span
                        >
                        <span>3、有过项目完整开发周期经验的优先</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="show_more">
                  展开更多
                </div>
              </div>
            </div>
          </div>
        </div>
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
  .layout_content_innerbox {
    .part1 {
      .layout_content_title {
        &::before {
          content: "CONTACT" !important;
        }
      }
      ._bottom {
        width: 100%;
        ._box {
          display: flex;
          padding-top: px(40);
          .map_wrapper {
            width: px(760);
            margin-left: px(16);
            height: px(627);
            margin-right: px(24);
            position: relative;
            ._tooltip {
              width: px(720);
              height: px(64);
              padding: 0 px(31);
              background-color: #599ae5;
              display: flex;
              align-items: center;
              position: absolute;
              left: px(-16);
              bottom: px(44);
              box-sizing: border-box;
              ._icon {
                display: block;
                width: px(23);
                height: px(24);
                margin-right: px(7);
              }
              span {
                display: block;
                font-size: px(20);
                color: rgba(255, 255, 255, 1);
                &._address {
                  width: px(396);
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
          ._form {
            width: px(480);
            height: px(627);
            background-color: #599ae5;
            box-sizing: border-box;
            padding: px(56);
            ._title {
              height: px(48);
              font-size: px(48);
              color: rgba(255, 255, 255, 1);
              line-height: px(48);
            }
            ._subtitle {
              height: px(30);
              font-size: px(22);
              color: rgba(255, 255, 255, 1);
              line-height: px(26);
              margin-bottom: px(33);
            }
            .name,
            .contact {
              margin-bottom: px(12);
            }
            .content {
              margin-bottom: px(40);
              .el-textarea__inner {
                height: px(220);
              }
            }
            .submit_share {
              display: flex;
              justify-content: space-between;
              align-items: center;
              ._left {
                display: flex;
                align-items: center;
                & > img {
                  display: block;
                  margin-right: px(16);
                  &:last-child {
                    margin-right: 0;
                  }
                  width: px(32);
                  height: px(32);
                }
              }
              ._submit {
                width: px(120);
                height: px(40);
                line-height: px(40);
                background-color: #fff;
                text-align: center;
                font-size: px(20);
                color: #5b9be4;
              }
            }
          }
        }
      }
    }
    .part2 {
      .layout_content_title {
        &::before {
          content: "TALENT";
        }
      }
      .layout_content_line {
        width: px(120);
        height: 2px;
        background: rgba(0, 0, 0, 0.4);
        margin-top: px(32);
        margin-bottom: px(76);
      }
      ._bottom {
        ._box {
          & > ._top {
            width: px(1280);
            height: px(60);
            border: 1px solid #5b9be4;
            display: flex;
            align-items: center;
            margin-bottom: px(24);
            span {
              height: px(28);
              font-size: px(24);
              color: rgba(91, 155, 228, 1);
              line-height: px(28);
              width: px(232);
              border-right: 1px solid #dcdcdc;
              text-align: center;
              &:first-child {
                width: px(347);
              }
              &:last-child {
                border-right: none;
              }
            }
          }
          ._bottom {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: px(120);
            ._item {
              width: px(1280);
              display: flex;
              margin-bottom: px(24);
              ._left {
                background-color: #f4f4f4;
                width: px(347);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                span {
                  display: block;
                  text-align: center;
                  &._title {
                    color: #606060;
                    font-size: px(20);
                    line-height: px(24);
                    width: px(247);
                    margin-bottom: px(3);
                    font-weight: bold;
                  }
                  &._into {
                    font-size: px(20);
                    color: rgba(96, 96, 96, 1);
                    width: px(200);
                    line-height: px(24);
                  }
                }
              }
              ._right {
                background-color: #f4f4f4;
                width: px(933);
                ._top {
                  height: px(97);
                  display: flex;
                  align-items: center;
                  & > span {
                    display: block;
                    text-align: center;
                    border-right: 1px solid #dcdcdc;
                    height: px(45);
                    font-size: px(20);
                    font-family: Helvetica;
                    color: rgba(130, 130, 130, 1);
                    line-height: px(45);
                    flex: 1;
                    position: relative;
                    &:last-child {
                      border: none;
                    }
                    .apply {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      height: px(45);
                      line-height: px(45);
                      padding: 0 px(31);
                      color: #fff;
                      background-color: #599ae5;
                      font-size: px(24);
                    }
                  }
                }
                ._into {
                  padding: px(24) px(98);
                  background-color: #f9f9f9;
                  & > div {
                    margin-bottom: px(16);
                    &:last-child {
                      margin-bottom: 0;
                    }
                    b,
                    span {
                      color: #828282;
                      display: block;
                      font-size: px(16);
                      line-height: px(23);
                    }
                    b {
                      margin-bottom: px(4);
                    }
                  }
                }
              }
            }
            .show_more {
              cursor: pointer;
              width: px(240);
              height: px(48);
              border: 1px solid #5b9be4;
              text-align: center;
              line-height: px(48);
              font-size: px(20);
              color: rgba(89, 154, 229, 1);
              margin-top: px(24);
            }
          }
        }
      }
    }
  }
}
</style>
