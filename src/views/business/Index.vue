<template>
  <div class="business_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/m/business_top_bg.png" alt="" srcset="" />
      <div class="_title">三大板块 保驾护航</div>
    </div>
    <div class="page_bottom_box">
      <div class="tab_box">
        <van-tabs v-model="activeName" animated swipeable>
          <van-tab title="地产基金" name="DCJJ">
            <div class="part _part1">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    晨曦领域
                  </div>
                  <div class="_entitle">
                    BUSINESS
                  </div>
                  <div class="_info">
                    三大板块 保驾护航
                  </div>
                  <div class="_line"></div>
                </div>
                <div class="_bottom">
                  晨曦基金地产基金部，自成立以来，专注于房地产生态圈的私募股权投资和管理，紧紧围绕着“地产+”板块进行战略布局，聚焦房地产股权基金开发类基金和存量资产收并购及资产证券化业务，为机构和高净值客户提供资产管理和财务管理的双驱动专业服务。
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_item">
                  <div class="_top">
                    <img
                      src="~@/assets/m/bussiness_cxly_pic1.png"
                      alt=""
                      srcset=""
                    />
                    <span class="_title">地产基金</span>
                    <span class="_subtitle">— 拓宽投资途径 —</span>
                  </div>
                  <div class="_bottom">
                    <div>
                      <!-- <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>地产基金部 | Real Estate Fund department</span>
                      </div> -->
                      <div class="into_box">
                        <span
                          >晨曦基金地产基金部，自成立以来，专注于房地产生态圈的私募股权投资和管理,紧紧围绕着”地产+”板块进行战略布局,聚焦房地产股权基金开发类基金和存量资产收并购及资产证券化业务，为机构和高净值客户提供资产管理和财务管理的双驱动专业服务。</span
                        >
                        <span>
                          晨曦基金公司至今已独立发行备案产品4支，同时积极关注和参与国内商业物业证券化市场，与高和资本一同牵头推动了领昱系列类REITs项目的储架注册和注册额度下领昱1号类REITs项目的落地,该项目系中国首单民企长租公寓储架式权益类REITs。未来，晨曦基金将继续通过证券化工具打通旗下其他并购项目的资本进入和退出渠道，积极储备公募REITs项目，最终形成“REITs+并购基金”闭环滚动发展模式。
                        </span>
                      </div>
                    </div>
                    <div class="_list">
                      <div class="_item">
                        <img
                          src="~@/assets/m/business_part1_icon1.png"
                          alt=""
                          srcset=""
                        />
                        <div>
                          <span class="_title">项目储备</span>
                          <span class="_info"
                            >由基金对合作项目软性介入，通过外部合作项目推介，输出资金，获得金融收益</span
                          >
                        </div>
                      </div>
                      <div class="_item">
                        <img
                          src="~@/assets/m/business_part1_icon2.png"
                          alt=""
                          srcset=""
                        />
                        <div>
                          <span class="_title">资金储备</span>
                          <span class="_info"
                            >通过与大型金融机构搭建基金，在集团资产负债表外，哺育跨周期战略土地储备</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="gray">
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>投资策略</span>
                      </div>
                      <div class="into_box">
                        <span
                          ><b>交易对手：</b
                          >全国前百强房企、区域龙头、各区域投资上报房企；</span
                        >
                        <span>
                          <b>城市选择：</b
                          >核心一线城市、省会城市+典型二线城市、部分拓展优质三线城市；
                        </span>
                        <span>
                          <b>业态选择：</b
                          >资金需要在12个月内退现金流回正、高周转+快回本（逆向选择）、住宅比例>70%（或住宅部分覆盖借款本息）；
                        </span>
                        <span>
                          <b> 财务状况：</b
                          >项目本身的财务指标（ROE>20%，EBIT>12%）、实际控制人的财务状况、关注资金回收期——ROI,IRR等动态指标，考虑货币时间价值。
                        </span>
                      </div>
                    </div>
                    <div class="gray">
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>产品策略</span>
                      </div>
                      <div class="into_box">
                        <span
                          ><b>同股同权产品：</b
                          >旨在解决土地端融资难题，降低峰值出资额，释放资本金。区别于开发商合作开发，不分操盘权、并表权，避免复杂的日常决策流程；且无需股权质押、土地抵押或提供额外担保；同时引进财务投资人，提升少数股东权益，有效降低资产负债率，优化报表。</span
                        >
                        <span>
                          <b>优先股产品： </b
                          >利润倾斜分配，通过不等比的分红，大幅撬动IRR
                          ；无需股权质押、土地抵押或提供额外担保；非融资性，可同开发贷并存。
                        </span>
                        <span>
                          <b>租售类产品：</b
                          >通过收并购取得商业、办公、长租公寓等持有型资产，通过整合运营将成熟资产装入储架式类REITs,在交易所实现上市交易。
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="机构业务" name="JGYW">
            <div class="part _part2">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    机构业务
                  </div>
                  <div class="_entitle">
                    INSTITUTION
                  </div>
                  <div class="_info">
                    专业团队 持续跟踪
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_top">
                  <img
                    src="~@/assets/m/business_part2_pic1.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="_bottom">
                  <div class="_titlebox">根据公司业务发展及产品需求:</div>
                  <div class="_intobox">
                    <span
                      >1、负责银行、信托、第三方财富、券商等机构客户的开发，分析机构客户的投资偏好，挖掘合作契合点；</span
                    >
                    <span
                      >2、负责机构业务产品营销，参与制定标准化的机构对接资料，向机构提供投后管理报告文件；</span
                    >
                    <span>3、负责机构的信息收集与整理，建立信息数据库</span>
                    <span
                      >4、对机构渠道持续跟进、评估与维护，积极引导、鼓励机构开拓、建立新业务模式。</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="财务管理" name="CWGL">
            <div class="part _part3">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    财富管理
                  </div>
                  <div class="_entitle">
                    WEALTH
                  </div>
                  <div class="_info">
                    专业团队 深入研究
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_top">
                  <img
                    src="~@/assets/m/business_part3_pic1.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="_bottom">
                  <div class="_intobox">
                    <span
                      >财富管理部是为高净值客户、家族客户和机构投资人提供财富管理、资产管理以及增值服务的综合服务平台，具体业务包括资产配置咨询，项目投资咨询等业务。</span
                    >
                    <span
                      >目前财富部下设三个二级部：产品培训部、大客户部和市场渠道部。团队成员从业背景主要来自银行、券商、家族财富办公室及法律、移民专业服务机构，平均金融工作年限超过15年。</span
                    >
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
      activeName: "DCJJ"
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
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.business_index_box {
  .page_bottom_box {
    ._part1 {
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
              height: px(36);
              font-size: px(36);
              color: rgba(255, 255, 255, 1);
              line-height: px(36);
              font-weight: bold;
              margin-bottom: px(12);
            }
            ._subtitle {
              font-size: px(14);
              font-family: Helvetica;
              color: rgba(255, 255, 255, 1);
              letter-spacing: px(2);
            }
          }
          & > ._bottom {
            & > div {
              margin-top: px(24);
              &:not(._list) {
                &.gray {
                  padding: px(24);
                  box-sizing: border-box;
                  background-color: #f8f8f8;
                }
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
                    height: px(25);
                    font-size: px(18);
                    color: rgba(0, 0, 0, 1);
                    font-weight: bold;
                    line-height: px(22);
                  }
                }
                & > .into_box {
                  & > span {
                    display: block;
                    font-size: px(14);
                    font-family: Helvetica;
                    color: #757575;
                    line-height: px(32);
                  }
                }
              }
              &._list {
                & > ._item {
                  display: flex;
                  align-items: center;
                  padding: px(24) 0;
                  &:first-child {
                    border-bottom: 1px solid #cacaca;
                    padding-top: 0;
                  }
                  & > img {
                    display: block;
                    width: px(54);
                    height: px(54);
                    margin-right: px(24);
                  }
                  & > div {
                    ._title {
                      display: block;
                      height: px(33);
                      font-size: px(24);
                      color: #333333;
                      font-weight: bold;
                      line-height: px(33);
                      margin-bottom: px(4);
                    }
                    .into {
                      display: block;
                      height: px(24);
                      font-size: px(14);
                      line-height: px(24);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    ._part2,
    ._part3 {
      .part_bottom_box {
        & > ._top {
          margin-bottom: px(32);
          img {
            display: block;
            width: 100%;
            height: px(280);
          }
        }
        & > ._bottom {
          ._titlebox {
            height: px(24);
            font-size: px(14);
            line-height: px(24);
            font-weight: bold;
            margin-bottom: px(12);
          }
          ._intobox {
            & > span {
              display: block;
              font-size: px(14);
              line-height: px(32);
            }
          }
        }
      }
    }
  }
}
</style>
