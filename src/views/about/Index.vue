<template>
  <div class="about_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/image/about_index_toppic.png" alt="" srcset="" />
      <div class="_box">
        <div class="_title">面向未来 注重成效</div>
        <div class="_into">
          公司以“轻资产运营”为导向，多元发展地产基金和股权投资等多个业务板块，致力于
          成为房地产综合服务提供商和独具特色的股权投资机构
        </div>
      </div>
    </div>
    <div class="page_bottom_box">
      <div class="part_1">
        <div class="_c">
          <div class="_left">
            <div class="__part_title">
              <div class="title">
                企业简介
              </div>
              <div class="en_title">
                <img src="~@/assets/image/half_circle_icon_1.png" alt="" />
                <span>COMPANY PROFILE</span>
              </div>
            </div>
            <div class="part_into">
              <div class="_title">
                晨曦基金
              </div>
              <div class="_into">
                上海晨曦股权投资基金管理有限公司（以下简称“晨曦基金”），成立于2016年10月28日，注册资本1亿人民币，为上海旭辉企业发展有限公司控股的子公司，是旭辉集团一体两翼“房地产+”板块的核心成员之一。
              </div>
              <div class="_more" @click="toPage('/about/CompanyProfile')">
                <div>
                  <span>了解更多</span>
                  <i></i>
                </div>
              </div>
            </div>
          </div>
          <div class="_right">
            <img
              src="~@/assets/image/about_index_part1_1.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div class="part_2">
        <div class="_c">
          <div class="__part_title">
            <div class="title">
              企业风采
            </div>
            <div class="en_title">
              <img src="~@/assets/image/half_circle_icon_1.png" alt="" />
              <span>ENTERPRISE STYLE</span>
            </div>
          </div>
          <div class="_box">
            <img
              src="~@/assets/image/about_index_part2_1.png"
              alt=""
              srcset=""
            />
            <div>
              <div @click="toPage('/about/CorporateVision/QYYJ')">
                <img
                  src="~@/assets/image/about_index_part2_icon1.png"
                  alt=""
                  srcset=""
                />
                <span>企业愿景</span>
                <span>Vision</span>
              </div>
              <img
                src="~@/assets/image/about_index_part2_2.png"
                alt=""
                srcset=""
              />
              <img
                src="~@/assets/image/about_index_part2_3.png"
                alt=""
                srcset=""
              />
              <div @click="toPage('/about/CorporateVision/QYRY')">
                <img
                  src="~@/assets/image/about_index_part2_icon2.png"
                  alt=""
                  srcset=""
                />
                <span>企业荣誉</span>
                <span>Honor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="part_3">
        <div class="_c">
          <div class="__part_title">
            <div class="title">
              投资策略
            </div>
            <div class="en_title">
              <img src="~@/assets/image/half_circle_icon_1.png" alt="" />
              <span>INVESTMENT STRATEGY</span>
            </div>
          </div>
        </div>
        <div class="_box">
          <div class="_c">
            <div>
              <div class="_left">
                <span>灵活配置 专业投资</span>
                <span>Flexible configuration, professional investment</span>
                <div class="_more" @click="toPage('/about/InvestmentStrategy')">
                  <div>
                    <span>了解更多</span>
                    <i></i>
                  </div>
                </div>
              </div>
              <div class="_right">
                <div @click="toPage('InvestmentStrategy', 'TZLN')">
                  <div class="top">
                    <span>投资理念</span>
                    <span>Investment philosophy</span>
                  </div>
                  <div class="bottom">
                    以房地产投融资业务为主导，同时关注房地产行业衍生业务的股权投资机会。
                  </div>
                </div>
                <div @click="toPage('InvestmentStrategy', 'TZCL')">
                  <div class="top">
                    <span>投资策略</span>
                    <span>Investment strategy</span>
                  </div>
                  <div class="bottom">
                    以房地产投融资业务为主导，同时关注房地产行业衍生业务的股权投资机会。
                  </div>
                </div>
                <div @click="toPage('InvestmentStrategy', 'FXKZ')">
                  <div class="top">
                    <span>风险控制</span>
                    <span>Risk control</span>
                  </div>
                  <div class="bottom">
                    以房地产投融资业务为主导，同时关注房地产行业衍生业务的股权投资机会。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="part_4">
        <div class="_c">
          <div class="_top">
            <div class="__part_title">
              <div class="title">
                合作伙伴
              </div>
              <div class="en_title">
                <img src="~@/assets/image/half_circle_icon_1.png" alt="" />
                <span>PARTNERS</span>
              </div>
            </div>
            <div class="_more" @click="toPage('/about/CooperationPartners')">
              <div>
                <span>了解更多</span>
                <i></i>
              </div>
            </div>
          </div>
          <div class="_bottom">
            <div>
              <img
                src="~@/assets/image/about_index_part4_1.png"
                alt=""
                srcset=""
              />
            </div>

            <div>
              <img
                src="~@/assets/image/about_index_part4_2.png"
                alt=""
                srcset=""
              />
            </div>

            <div>
              <img
                src="~@/assets/image/about_index_part4_3.png"
                alt=""
                srcset=""
              />
            </div>

            <div>
              <img
                src="~@/assets/image/about_index_part4_4.png"
                alt=""
                srcset=""
              />
            </div>

            <div>
              <img
                src="~@/assets/image/about_index_part4_5.png"
                alt=""
                srcset=""
              />
            </div>

            <div>
              <img
                src="~@/assets/image/about_index_part4_6.png"
                alt=""
                srcset=""
              />
            </div>

            <div>
              <img
                src="~@/assets/image/about_index_part4_7.png"
                alt=""
                srcset=""
              />
            </div>

            <div>
              <img
                src="~@/assets/image/about_index_part4_8.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toPage(url, query = '') {
      if (query) {
        this.$router.push({
          name: url,
          params: { activeDIV: query }
        })
      } else {
        this.$router.push(url)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.about_index_box {
  .page_bottom_box {
    .part_1 {
      border-bottom: 1px solid #979797;
      ._c {
        padding-top: px(80);
        display: flex;
        justify-content: space-between;
        padding-bottom: px(80);
        ._left {
          .__part_title {
            margin-bottom: px(40);
          }
          .part_into {
            ._title {
              height: px(33);
              font-size: px(24);

              color: rgba(0, 0, 0, 1);
              line-height: px(29);
              margin-bottom: px(15);
              font-weight: bold;
            }
            ._into {
              width: px(479);
              font-size: px(18);

              color: #7f7f7f;
              line-height: px(25);
              margin-bottom: px(24);
            }
            ._more {
              cursor: pointer;
              padding: 0 px(24);
              display: inline-block;
              height: px(40);
              border: px(2) solid rgba(116, 116, 116, 1);
              & > div {
                height: 100%;
                display: flex;
                align-items: center;
                span {
                  font-size: px(14);

                  color: rgba(116, 116, 116, 1);
                  display: block;
                  margin-right: px(8);
                }
                i {
                  display: block;
                  width: px(7);
                  height: px(14);
                  background: url('~@/assets/image/arrow_right.png') no-repeat
                    center;
                  background-size: cover;
                }
              }
            }
          }
        }
        ._right {
          img {
            display: block;
            width: px(560);
            height: px(326);
          }
        }
      }
    }
    .part_2 {
      height: px(837);
      box-sizing: border-box;
      width: 100%;
      padding-top: px(80);
      ._box {
        margin-top: px(35);
        display: flex;
        width: 100%;
        & > img {
          display: block;
          width: px(720);
          height: px(560);
        }
        & > div {
          flex: 1;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          & > * {
            display: block;
            width: px(280);
            height: px(280);
          }
          & > div {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f8f8f8;
            img {
              display: block;
              width: px(86);
              height: px(80);
              margin-bottom: px(25);
            }
            span {
              &:first-child {
                height: px(33);
                font-size: px(24);

                color: rgba(0, 0, 0, 1);
                line-height: px(29);
              }
              &:last-child {
                height: px(22);
                font-size: px(16);

                color: rgba(0, 0, 0, 1);
                line-height: px(19);
              }
            }
          }
        }
      }
    }
    .part_3 {
      height: px(791);
      background: rgba(248, 248, 248, 1);
      box-sizing: border-box;
      padding-top: px(80);
      ._box {
        margin: 0 auto;
        margin-top: px(60);
        width: px(1600);
        height: px(418);
        background: url('~@/assets/image/about_index_part3_1.png') no-repeat
          center;
        background-size: cover;
        ._c {
          height: 100%;
          & > div {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > ._left {
              & > span {
                display: block;

                color: rgba(255, 255, 255, 1);
                &:first-child {
                  height: px(65);
                  font-size: px(48);

                  line-height: px(58);
                  margin-bottom: px(6);
                }
                &:last-child {
                  height: px(26);
                  font-size: px(18);
                  line-height: px(22);
                  margin-bottom: px(40);
                }
              }
              ._more {
                cursor: pointer;
                margin-top: px(50);
                padding: 0 px(24);
                display: inline-block;
                height: px(40);
                background: #5b9be4;
                & > div {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  span {
                    font-size: px(14);

                    color: #fff;
                    display: block;
                    margin-right: px(8);
                  }
                  i {
                    display: block;
                    width: px(7);
                    height: px(14);
                    background: url('~@/assets/image/arrow_right_active_white.png')
                      no-repeat center;
                    background-size: cover;
                  }
                }
              }
            }
            & > ._right {
              width: px(560);
              height: px(560);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              & > div {
                cursor: pointer;
                width: px(560);
                height: px(160);
                background: rgba(255, 255, 255, 1);
                box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
                box-sizing: border-box;
                padding: px(32) px(60) 0 px(101);
                .top {
                  display: flex;
                  align-items: center;
                  position: relative;
                  &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    left: px(-43);
                    top: 50%;
                    transform: translateY(-50%);
                    width: px(23);
                    height: px(11);
                    background: url('~@/assets/image/half_circle_icon_1.png')
                      no-repeat center;
                    background-size: cover;
                  }
                  span {
                    &:first-child {
                      height: px(33);
                      font-size: px(24);

                      color: rgba(0, 0, 0, 1);
                      line-height: px(33);
                      margin-right: px(12);
                    }
                    &:last-child {
                      height: px(22);
                      font-size: px(16);

                      color: #7f7f7f;
                      line-height: px(22);
                    }
                  }
                }
                .bottom {
                  font-size: px(18);

                  color: #7f7f7f;
                  line-height: px(24);
                  margin-top: px(13);
                }
              }
            }
          }
        }
      }
    }
    .part_4 {
      height: px(741);
      box-sizing: border-box;
      padding-top: px(80);
      ._c {
        ._top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: px(11);
          ._more {
            cursor: pointer;
            padding: 0 px(24);
            display: inline-block;
            height: px(40);
            border: px(2) solid rgba(116, 116, 116, 1);
            & > div {
              height: 100%;
              display: flex;
              align-items: center;
              span {
                font-size: px(14);

                color: rgba(116, 116, 116, 1);
                display: block;
                margin-right: px(8);
              }
              i {
                display: block;
                width: px(7);
                height: px(14);
                background: url('~@/assets/image/arrow_right.png') no-repeat
                  center;
                background-size: cover;
              }
            }
          }
        }
        ._bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          & > div {
            width: px(302);
            height: px(200);
            margin-top: px(24);
            img {
              display: block;
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
