<template>
  <div class="business_index_box layout_content_box">
    <div class="page_top_box">
      <img :src="`${$basePicUrl}${topInfo.logo}`" alt="" srcset="" />
      <div class="_title">{{ topInfo.title }}</div>
    </div>
    <div class="page_bottom_box">
      <div class="tab_box">
        <van-tabs v-model="activeName" @click="onClick" animated swipeable>
          <van-tab title="地产基金" name="DCJJ">
            <div class="part _part1">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    晨曦领域
                    <div class="_info">
                      三大板块 保驾护航
                    </div>
                  </div>
                  <div class="_entitle">
                    BUSINESS
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
                    <span class="_title">{{ DCJJ_Info.ctitle }}</span>
                    <span class="_subtitle">{{ DCJJ_Info.title }}</span>
                  </div>
                  <div class="_bottom">
                    <div>
                      <div class="into_box" v-html="DCJJ_Info.content"></div>
                    </div>
                    <!-- <div class="_list">
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
                    </div> -->
                    <div
                      class="gray"
                      v-for="(item, index) in DCJJ_List"
                      :key="index"
                    >
                      <div class="title_box">
                        <img src="~@/assets/m/half_icon.png" alt="" srcset="" />
                        <span>{{ item.title }}</span>
                      </div>
                      <div class="into_box" v-html="item.content"></div>
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
                    {{ JGYW_Info.ctitle }}
                    <div class="_info" v-html="JGYW_Info.title"></div>
                  </div>
                  <div class="_entitle">
                    INSTITUTION
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_top">
                  <img
                    :src="`${$basePicUrl}${JGYW_Info.logo}`"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="_bottom" v-html="JGYW_Info.content">
                  <!-- <div class="_titlebox">根据公司业务发展及产品需求:</div>
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
                  </div> -->
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="财务管理" name="CWGL">
            <div class="part _part3">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    {{ CWGL_Info.ctitle }}
                    <div class="_info">
                      {{ CWGL_Info.title }}
                    </div>
                  </div>
                  <div class="_entitle">
                    WEALTH
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_top">
                  <img
                    :src="`${$basePicUrl}${CWGL_Info.file}`"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="_bottom">
                  <div class="_intobox" v-html="CWGL_Info.content">
                    <!-- <span
                      >财富管理部是为高净值客户、家族客户和机构投资人提供财富管理、资产管理以及增值服务的综合服务平台，具体业务包括资产配置咨询，项目投资咨询等业务。</span
                    >
                    <span
                      >目前财富部下设三个二级部：产品培训部、大客户部和市场渠道部。团队成员从业背景主要来自银行、券商、家族财富办公室及法律、移民专业服务机构，平均金融工作年限超过15年。</span
                    > -->
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
      activeName: "DCJJ",
      topInfo: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      DCJJ_Info: {
        title: "",
        content: "",
        logo: "",
        contentext: ""
      },
      DCJJ_List: [],
      JGYW_Info: {
        title: "",
        content: "",
        logo: ""
      },
      JGYW_List: [],
      CWGL_Info: {
        title: "",
        content: "",
        logo: ""
      },
      CWGL_List: []
    };
  },
  watch: {
    $route: {
      handler(newVal) {
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
        .get(`${this.$baseUrl}content/id/8`)
        .then(({ data }) => {
          this.topInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
    },
    onClick(name) {
      let info_url = `${this.$baseUrl}`;
      let list_url = `${this.$baseUrl}`;
      switch (name) {
        case "DCJJ":
          info_url += `content/id/9`;
          list_url += `contentext/id/9`;
          break;
        case "JGYW":
          info_url += `content/id/10`;
          list_url += `contentext/id/10`;
          break;
        case "CWGL":
          info_url += `content/id/11`;
          list_url += `contentext/id/11`;
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
    }
  }
};
</script>

<style lang="scss">
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
              height: px(44);
              font-size: px(46);
              color: rgba(255, 255, 255, 1);
              line-height: px(44);
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
                    height: px(15);
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
                  display: block;
                  font-size: px(28);
                  font-family: Helvetica;
                  color: #757575;
                  line-height: px(48);
                  span {
                    display: block;
                    font-size: px(28);
                    font-family: Helvetica;
                    color: #757575;
                    line-height: px(48);
                  }
                  .__into {
                    font-size: px(28);
                    color: #7f7f7f;
                    line-height: px(48);
                    margin-bottom: px(40);
                  }
                  .row_list {
                    margin-bottom: px(40);
                    & > div {
                      display: flex;
                      align-items: center;
                      padding: px(24) 0;
                      &:first-child {
                        border-bottom: 1px solid #cacaca;
                        padding-top: 0;
                      }
                      &::after {
                        display: block;
                        content: "";
                        height: px(64);
                        width: 1px;
                        background-color: #979797;
                        position: absolute;
                        right: 0%;
                        top: 50%;
                        transform: translateY(-50%);
                      }
                      &:nth-child(2n-1) {
                        ._left {
                          background: url("~@/assets/image/business_index_icon1.png")
                            no-repeat center;
                          background-size: contain;
                        }
                      }
                      &:nth-child(2n) {
                        ._left {
                          background: url("~@/assets/image/business_index_icon2.png")
                            no-repeat center;
                          background-size: contain;
                        }
                        &::after {
                          display: none;
                        }
                      }
                      ._left {
                        width: px(128);
                        height: px(98);
                        display: block;
                        margin-right: px(30);
                      }
                      ._right {
                        ._title {
                          height: px(42);
                          font-size: px(30);
                          color: rgba(0, 0, 0, 1);
                          line-height: px(42);
                          margin-bottom: px(4);
                          text-overflow: ellipsis;
                          white-space: nowrap;
                          overflow: hidden;
                          font-weight: bold;
                        }
                        ._subinto {
                          font-size: px(24);
                          color: #7f7f7f;
                          line-height: px(34);
                          display: -webkit-box;
                          -webkit-box-orient: vertical;
                          -webkit-line-clamp: 2;
                          overflow: hidden;
                        }
                      }
                    }
                  }
                }
              }
              &._list {
                & > div {
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
      .part_top_box {
        padding-bottom: 0 !important;
      }
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
          font-size: px(30);
          line-height: px(48);
          ._titlebox {
            height: px(48);
            font-size: px(30);
            line-height: px(48);
            font-weight: bold;
            margin-bottom: px(12);
          }
          ._intobox {
            & > span {
              display: block;
              font-size: px(30);
              line-height: px(48);
            }
          }
        }
      }
    }
  }
}
</style>
