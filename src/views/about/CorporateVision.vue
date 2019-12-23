<template>
  <div class="corporatevision_box layout_content_box">
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
    <div class="page_bottom_box layout_content_innerbox">
      <div class="_c">
        <div class="layout_content_title">
          晨曦愿景
        </div>
        <div class="layout_content_into">
          成为中国房地产私募基金领军者
        </div>
        <div class="layout_content_intro">
          公司于2017年4月12日在基金业协会完成私募基金管理人备案登记，私募投资基金管理人登记号为
          P1062335，公司以“轻资产运营”为导向，多元发展地产基金和股权投资等多个业务板块，致力于成为集项目研判、结构化产品定制、投资运营、风险控制、资产管理于一体的房地产综合服务提供商和独具特色的股权投资机构，跻身业内一流的综合基金平台行列。
        </div>
        <div class="_bottom">
          <div class="top_part" id="QYYJ">
            <div class="_left">
              <div class="_title">晨曦基金</div>
              <div class="_entitle">
                <img
                  src="~@/assets/image/half_circle_icon_1.png"
                  alt=""
                  srcset=""
                />
                <span>忠于所托 成就价值</span>
              </div>
              <div class="_into">
                公司于2017年4月12日在基金业协会完成私募基金管理人备案登记，私募投资基金管理人登记号为
                P1062335，公司以“轻资产运营”为导向，多元发展地产基金和股权投资等多个业务板块，致力于成为集项目研判、结构化产品定制、投资运营、风险控制、资产管理于一体的房地产综合服务提供商和独具特色的股权投资机构，跻身业内一流的综合基金平台行列。
              </div>
            </div>
            <div class="_right">
              <img
                src="~@/assets/image/about_corporatevision_pic1.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div class="bottom_part" id="QYRY">
            <div>
              <img
                src="~@/assets/image/about_corporatevision_pic2.png"
                alt=""
                srcset=""
              />
              <div>
                <span>2018《博鳌房地产论坛》房地产基金品牌TOP10</span>
              </div>
            </div>
            <div>
              <img
                src="~@/assets/image/about_corporatevision_pic3.png"
                alt=""
                srcset=""
              />
              <div>
                <span>2018《财视中国》最具市场影响力产品私募房地产基金</span>
              </div>
            </div>
            <div>
              <img
                src="~@/assets/image/about_corporatevision_pic4.png"
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.corporatevision_box {
  .layout_content_innerbox {
    .layout_content_title {
      &::before {
        content: "VISION" !important;
      }
    }
    ._bottom {
      .top_part {
        width: px(1280);
        height: px(466);
        background: rgba(248, 248, 248, 1);
        margin-bottom: px(64);
        box-sizing: border-box;
        padding: px(60) px(40) px(60) px(80);
        display: flex;
        justify-content: space-between;
        ._left {
          width: px(665);
          ._title {
            height: px(65);
            font-size: px(48);

            color: #636363;
            line-height: px(58);
            font-weight: bold;
            margin-bottom: px(24);
          }
          ._entitle {
            display: flex;
            align-items: center;
            margin-bottom: px(24);
            img {
              display: block;
              width: px(23);
              height: px(11);
              margin-right: px(13);
            }
            span {
              height: px(33);
              font-size: px(24);

              color: rgba(89, 154, 229, 1);
              line-height: px(33);
            }
          }
          ._into {
            font-size: px(20);

            line-height: px(43);
            color: #636363;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
          }
        }
        ._right {
          width: px(455);
          height: px(346);
          img {
            display: block;
            width: 100%;
          }
        }
      }
      .bottom_part {
        padding-bottom: px(120);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        & > div {
          width: px(384);
          height: px(560);
          background: rgba(248, 248, 248, 1);
          display: flex;
          flex-direction: column;
          & > img {
            display: block;
            width: px(384);
            height: px(409);
          }
          & > div {
            flex: 1;
            min-height: 0;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 0 px(40);
            span {
              text-align: center;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              font-size: px(24);

              color: #363636;
              line-height: px(29);
            }
          }
        }
      }
    }
  }
}
</style>
