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
              <div class="part_bottom_box">
                <div class="collapse_box">
                  <van-collapse v-model="activeNames">
                    <van-collapse-item name="1"
                      ><div slot="title">
                        <div class="_left">
                          <span class="_title"
                            >资产管理经理/总监（财务背景）</span
                          >
                          <span class="_into">
                            <span>上海</span>
                            <span>资产数据部</span>
                            <span>2018年03月30日</span>
                          </span>
                        </div>
                        <span class="_more">查看详情</span>
                      </div>
                      <div class="_content">
                        <span><b>工作职责：</b></span>
                        <span>1、全日制本科以上学历； </span>
                        <span
                          >2、5年以上工作经验，需在TOP50地产公司有过财务、运营、投资方面从业经历；
                        </span>
                        <span>3、有过项目完整开发周期经验的优先。</span>
                        <br />
                        <span><b>职位要求：</b></span>
                        <span
                          >1、
                          参与拟投资项目的财务尽调、财务测算和投资分析，参与拟订项目投后管理的方案；</span
                        >
                        <span
                          >2、
                          对投资项目进行跟踪管理，对项目资金、进度、成本、市场和销售等情况进行跟踪管理；</span
                        >
                        <span
                          >3、
                          督促落实投资协议中风控措施的全面落实，负责项目投后风险评估及风险管理；</span
                        >
                        <span>4、 配合完成项目的投资退出工作。</span>
                        <br />
                        <span><b>投递邮箱：chenxihr@cifi.com.cn</b></span>
                      </div></van-collapse-item
                    >
                    <van-collapse-item name="2"
                      ><div slot="title">
                        <div class="_left">
                          <span class="_title"
                            >资产管理经理/总监（工程成本背景）</span
                          >
                          <span class="_into">
                            <span>上海</span>
                            <span>资产数据部</span>
                            <span>2018年03月30日</span>
                          </span>
                        </div>
                        <span class="_more">查看详情</span>
                      </div>
                      <div class="_content">
                        <span><b>工作职责：</b></span>
                        <span>1、全日制本科以上学历； </span>
                        <span
                          >2、5年以上工作经验，需在TOP50地产公司有过财务、运营、投资方面从业经历；
                        </span>
                        <span>3、有过项目完整开发周期经验的优先。</span>
                        <br />
                        <span><b>职位要求：</b></span>
                        <span
                          >1、
                          参与拟投资项目的财务尽调、财务测算和投资分析，参与拟订项目投后管理的方案；</span
                        >
                        <span
                          >2、
                          对投资项目进行跟踪管理，对项目资金、进度、成本、市场和销售等情况进行跟踪管理；</span
                        >
                        <span
                          >3、
                          督促落实投资协议中风控措施的全面落实，负责项目投后风险评估及风险管理；</span
                        >
                        <span>4、 配合完成项目的投资退出工作。</span>
                        <br />
                        <span><b>投递邮箱：chenxihr@cifi.com.cn</b></span>
                      </div></van-collapse-item
                    >
                    <van-collapse-item name="2"
                      ><div slot="title">
                        <div class="_left">
                          <span class="_title">投资经理</span>
                          <span class="_into">
                            <span>上海</span>
                            <span>资产数据部</span>
                            <span>2018年03月30日</span>
                          </span>
                        </div>
                        <span class="_more">查看详情</span>
                      </div>
                      <div class="_content">
                        <span><b>工作职责：</b></span>
                        <span>1、全日制本科以上学历； </span>
                        <span
                          >2、5年以上工作经验，需在TOP50地产公司有过财务、运营、投资方面从业经历；
                        </span>
                        <span>3、有过项目完整开发周期经验的优先。</span>
                        <br />
                        <span><b>职位要求：</b></span>
                        <span
                          >1、
                          参与拟投资项目的财务尽调、财务测算和投资分析，参与拟订项目投后管理的方案；</span
                        >
                        <span
                          >2、
                          对投资项目进行跟踪管理，对项目资金、进度、成本、市场和销售等情况进行跟踪管理；</span
                        >
                        <span
                          >3、
                          督促落实投资协议中风控措施的全面落实，负责项目投后风险评估及风险管理；</span
                        >
                        <span>4、 配合完成项目的投资退出工作。</span>
                        <br />
                        <span><b>投递邮箱：chenxihr@cifi.com.cn</b></span>
                      </div></van-collapse-item
                    >
                  </van-collapse>
                </div>
                <div class="_morebtn">展开更多</div>
              </div>
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
      activeNames: ["1"],
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
        display: flex;
        align-items: center;
        flex-direction: column;
        .collapse_box {
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
                  font-size: px(24);
                  font-weight: bold;
                  color: #333;
                  line-height: px(32);
                  margin-bottom: px(14);
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
                    font-size: px(18);
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
              & > span {
                display: block;
                font-size: px(16);
                color: rgba(130, 130, 130, 1);
                line-height: px(38);
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
}
</style>
