<template>
  <div class="about_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/m/about_top_bg.png" alt="" srcset="" />
      <div class="_title">面向未来 注重成效</div>
    </div>
    <div class="page_bottom_box">
      <div class="tab_box">
        <van-tabs v-model="activeName" animated swipeable>
          <van-tab title="企业简介" name="QYJJ">
            <div class="part _part1">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    晨曦基金
                  </div>
                  <div class="_entitle">
                    COMPANY
                  </div>
                  <div class="_info">
                    忠于所托 成就价值
                  </div>
                  <div class="_line"></div>
                </div>
                <div class="_bottom">
                  上海晨曦股权投资基金管理有限公司（以下简称“晨曦基金”），成立于2016年10月28日，注册资本1亿人民币，为上海旭辉企业发展有限公司控股的子公司，是旭辉集团一体两翼“房地产+”板块的核心成员之一。
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_item">
                  <img src="~@/assets/m/about_qyjj_pic1.png" alt="" srcset="" />
                  <div>
                    <span class="_title">成立时间</span>
                    <span class="_info">
                      成立于<br />
                      2016-10-28
                    </span>
                  </div>
                </div>
                <div class="_item">
                  <img src="~@/assets/m/about_qyjj_pic2.png" alt="" srcset="" />
                  <div>
                    <span class="_title">注册资本</span>
                    <span class="_info">
                      注册资本<br />
                      一亿人民币
                    </span>
                  </div>
                </div>
                <div class="_item">
                  <img src="~@/assets/m/about_qyjj_pic3.png" alt="" srcset="" />
                  <div>
                    <span class="_title">公司实力</span>
                    <span class="_info">
                      上海旭辉企业<br />
                      控股的子公司
                    </span>
                  </div>
                </div>
                <div class="_item">
                  <img src="~@/assets/m/about_qyjj_pic4.png" alt="" srcset="" />
                  <div>
                    <span class="_title">伙伴</span>
                    <span class="_info">
                      旭辉“房地产+”<br />
                      核心成员之一
                    </span>
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
                    成为中国房地产私募基金领军者
                  </div>
                  <div class="_line"></div>
                </div>
                <div class="_bottom">
                  公司于2017年4月12日在基金业协会完成私募基金管理人备案登记，私募投资基金管理人登记号为
                  P1062335，公司以“轻资产运营”为导向，多元发展地产基金和股权投资等多个业务板块，致力于成为集项目研判、结构化产品定制、投资运营、风险控制、资产管理于一体的房地产综合服务提供商和独具特色的股权投资机构，跻身业内一流的综合基金平台行列。
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_top">
                  <img src="~@/assets/m/about_qyyj_pic1.png" alt="" srcset="" />
                  <div class="_title">
                    晨曦基金
                  </div>
                  <div class="_subtitle">
                    忠于所托 成就价值
                  </div>
                  <div class="_into">
                    公司于2017年4月12日在基金业协会完成私募基金管理人备案登记，私募投资基金管理人登记号为
                    P1062335，公司以“轻资产运营”为导向，多元发展地产基金和股权投资等多个业务板块，致力于成为集项目研判、结构化产品定制、投资运营、风险控制、资产管理于一体的房地产综合服务提供商和独具特色的股权投资机构，跻身业内一流的综合基金平台行列。
                  </div>
                </div>
                <div class="_bottom">
                  <div class="_item">
                    <img
                      src="~@/assets/m/about_qyyj_pic2.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span>2018《博鳌房地产论坛》房地产基金品牌TOP10</span>
                    </div>
                  </div>
                  <div class="_item">
                    <img
                      src="~@/assets/m/about_qyyj_pic3.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span
                        >2018《财视中国》最具市场影响力产品私募房地产基金</span
                      >
                    </div>
                  </div>
                  <div class="_item">
                    <img
                      src="~@/assets/m/about_qyyj_pic4.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span>2017年度TOP10房地产股权投资基金</span>
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
                  </div>
                  <div class="_entitle">
                    STRATEGY
                  </div>
                  <div class="_info">
                    灵活配置 专业投资
                  </div>
                  <div class="_line"></div>
                </div>
                <div class="_bottom">
                  结合管理团队过去的投资和运营经验以及对未来基金发展的规划，基金的投资理念和投资方式主要是理解全球发展规律，抓住中国特色的结构性机会，坚持独立的价值投资方式并提供后续关键的服务。
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_item">
                  <div class="_top">
                    <img
                      src="~@/assets/m/about_tzcl_pic1.png"
                      alt=""
                      srcset=""
                    />
                    <span class="_title">投资理念</span>
                    <span class="_subtitle">合法 - 可控 - 稳健</span>
                  </div>
                  <div class="_bottom">
                    <div>
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>地产基金部 | Real Estate Fund department</span>
                      </div>
                      <div class="into_box">
                        <span
                          >晨曦基金地产基金部，自成立以来，以房地产投融资业务为主导，致力于成为集地产项目研判、结构化产品定制、投资运营、风险控制、资产管理于一体的房地产综合服务提供商，同时也关注房地产行业衍生业务的股权投资机会。晨曦基金积极关注和参与国内商业物业证券化市场，与高和资本一同牵头推动了领昱系列类REITs项目的储架注册和注册额度下领昱1号类REITs项目的落地。未来，晨曦基金将继续通过证券化工具打通旗下其他并购项目的资本进入和退出渠道，积极储备公募REITs项目，最终形成“REITs+并购基金”闭环滚动发展模式。</span
                        >
                      </div>
                    </div>
                    <div>
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>股权基金部 | Equity Fund department</span>
                      </div>
                      <div class="into_box">
                        <span
                          >1.深刻理解并遵循业务本质逻辑和全球行业发展规律；</span
                        >
                        <span
                          >2.准确把握市场与行业变革的推动要素和关键时点,借助长期、结构性和力量强大的市场与行业变革机会；</span
                        >
                        <span
                          >3.着重于具有长期持续的结构性竞争优势(“护城河”)、投资回报卓越的业务模式；</span
                        >
                        <span>4.谨慎而坚决地投资并长期持有；</span>
                        <span
                          >5.为被投资企业提供关键的、有助于其建立可持续竞争优势的智囊型增值服务和关键运营支撑；</span
                        >
                        <span>6.审慎评估风险因素,关注风险调整后的收益；</span>
                        <span
                          >7.基金的投资方式是坚持独立思考，深入研究，宁缺毋滥，持续提供增值服务。</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="_item">
                  <div class="_top">
                    <img
                      src="~@/assets/m/about_tzcl_pic2.png"
                      alt=""
                      srcset=""
                    />
                    <span class="_title">投资策略</span>
                    <span class="_subtitle">专业 - 持续 - 深入</span>
                  </div>
                  <div class="_bottom">
                    <div>
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>地产基金部 | Real Estate Fund department</span>
                      </div>
                      <div class="into_box">
                        <span
                          ><b>交易对手：</b
                          >全国前百强房企、区域龙头、各区域投资上报房企；</span
                        >
                        <span
                          ><b>城市选择：</b
                          >核心一线城市、省会城市+典型二线城市、部分拓展优质三线城市；+并购基金闭环滚动发展模式。
                        </span>
                        <span
                          ><b>业态选择：</b
                          >资金需要在12个月内退现金流回正、高周转+快回本（逆向选择）、住宅比例>70%（或住宅部分覆盖借款本息）；</span
                        >
                        <span
                          ><b>财务状况：</b
                          >项目本身的财务指标（ROE>20%，EBIT>12%）、实际控制人的财务状况、关注资金回收期——ROI,IRR等动态指标，考虑货币时间价值。</span
                        >
                      </div>
                    </div>
                    <div>
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>股权基金部 | Equity Fund department</span>
                      </div>
                      <div class="into_box">
                        <span
                          >基金的投资策略可以总结为：价值投资、比较优势。</span
                        >
                        <span
                          >晨曦的投资基金方向的选择基于对以下两大宏观环境的判断。</span
                        ><span
                          >首先，中国正处于经济发展的新常态，我们看到中国经济正发生的一些深刻的变化：新产品、新行业、新产业、新业态、新模式正在加速成长，新的动力正在加快孕育。具体来看，我们选择投资方向主要考虑如下几点因素：是否符合经济结构调整的方向；是否有足够大的产业发展空间；是否受益于人们生活水平的持续提高。结合管理团队过去的投资和运营经验以及对未来基金发展的规划，基金的投资理念和投资方式主要是理解全球发展规律，抓住中国独特的结构性机会，坚持独立的价值投资方式并提供后续关键的服务。</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="_item">
                  <div class="_top">
                    <img
                      src="~@/assets/m/about_tzcl_pic3.png"
                      alt=""
                      srcset=""
                    />
                    <span class="_title">风险控制</span>
                    <span class="_subtitle">调研 - 跟踪 - 管控</span>
                  </div>
                  <div class="_bottom">
                    <div>
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>地产基金部 | Real Estate Fund department</span>
                      </div>
                      <div class="into_box">
                        <span
                          ><b>合作项目针对情况：</b
                          >小股东同股同投的资金缺口；小股东额外借款需求。</span
                        >
                        <span
                          ><b>过程要点：</b
                          ><br />1、先期谈判基金介入；2、小股东利息支付采用按自然季付息方式，避免产生利息资金成本无人承担；
                        </span>
                        <span
                          >3、旭辉全程操盘、并表，掌控现金流，保障第一还款来源。</span
                        >
                        <span
                          ><b>增信措施：</b
                          ><br />1、小股东实际控制人担保；2、对项目公司实行章、证、照管控；3、小股东所持股权质押；</span
                        >
                        <span>4、项目现金流管控。</span>
                        <span
                          ><b>代建+资金提供前提：</b
                          >土地资源优质，获取项目主要权利——财务、营销、设计操盘权；</span
                        >
                        <span
                          ><b>原则：</b
                          >借款金额不高于项目资金峰值；年回报不低于15%+后端超额分红。</span
                        >
                        <span>低价委贷方式投入项目，提高还款严肃性。 </span>
                        <span><b>增信措施：</b></span>
                        <span
                          >1、对赌，基金下设SPV公司，将权属转让至SPV；2、股权/信托的收益权质押；3、土地抵押担保；</span
                        >
                        <span
                          >4、实际控制人提供保证担保；5、印鉴、公章、证照共管。</span
                        >
                      </div>
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
                  </div>
                  <div class="_entitle">
                    PARTNERS
                  </div>
                  <div class="_info">
                    创造财富 开启未来
                  </div>
                  <div class="_line"></div>
                </div>
                <div class="_bottom">
                  结合管理团队过去的投资和运营经验以及对未来基金发展的规划，基金的投资理念和投资方式主要是理解全球发展规律，抓住中国特色的结构性机会，坚持独立的价值投资方式并提供后续关键的服务。
                </div>
              </div>
              <div class="part_bottom_box">
                <div v-for="i in 17" :key="i">
                  <img
                    :src="require('@/assets/m/about_hzhb_pic' + i + '.png')"
                    alt=""
                    srcset=""
                  />
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
      activeName: "QYJJ"
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
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
                height: px(33);
                font-size: px(24);
                color: rgba(0, 0, 0, 1);
                line-height: px(29);
                font-weight: bold;
                margin-bottom: px(8);
              }
              &._info {
                font-size: px(16);
                color: #353535;
                text-align: center;
                line-height: px(28);
              }
            }
          }
        }
      }
    }
    ._part2 {
      .part_top_box {
        ._top {
          margin-bottom: px(89) !important;
          ._line {
            bottom: px(-24) !important;
          }
          ._info {
            font-weight: bold;
            bottom: px(-73) !important;
            height: px(24) !important;
            font-size: px(24) !important;
            line-height: px(24) !important;
            color: #666666 !important;
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
            height: px(33);
            font-size: px(24);
            line-height: px(29);
            color: #636363;
            font-weight: bold;
            margin-bottom: px(6);
          }
          ._subtitle {
            height: px(25);
            font-size: px(18);
            color: rgba(89, 154, 229, 1);
            line-height: px(22);
            letter-spacing: px(1);
            margin-bottom: px(8);
          }
          ._into {
            font-size: px(14);
            color: #666666;
            line-height: px(44);
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
              padding: 0 px(24);
              background-color: #f8f8f8;
              span {
                display: block;
                font-size: px(20);
                line-height: px(34);
                text-align: center;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
    ._part3 {
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
                  line-height: px(42);
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
          width: px(207);
          height: px(137);
          box-sizing: border-box;
          border: 1px solid #efefef;
          &:nth-child(3n) {
            margin-right: 0;
          }
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3) {
            margin-top: 0;
          }
          & > img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
