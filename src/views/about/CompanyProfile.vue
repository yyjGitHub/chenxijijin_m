<template>
  <div class="companyprofile_box layout_content_box">
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
          晨曦基金
        </div>
        <div class="layout_content_into">
          忠于所托 成就价值
        </div>
        <div class="layout_content_intro">
          上海晨曦股权投资基金管理有限公司（以下简称“晨曦基金”），成立于2016年10月28日，注册资本1亿人民币，为上海旭辉企业发展有限公司控股的子公司，是旭辉集团一体两翼“房地产+”板块的核心成员之一。
        </div>
        <div class="_bottom">
          <div>
            <img src="~@/assets/image/about_companyprofile_pic1.png" alt="" />
            <div>
              <span>成立时间</span>
              <div>
                成立于<br />
                2016-10-28
              </div>
            </div>
          </div>
          <div>
            <img src="~@/assets/image/about_companyprofile_pic2.png" alt="" />
            <div>
              <span>注册资本</span>
              <div>
                注册资本<br />
                一亿人民币
              </div>
            </div>
          </div>
          <div>
            <img src="~@/assets/image/about_companyprofile_pic3.png" alt="" />
            <div>
              <span>公司实力</span>
              <div>
                上海旭辉企业<br />
                控股的子公司
              </div>
            </div>
          </div>
          <div>
            <img src="~@/assets/image/about_companyprofile_pic4.png" alt="" />
            <div>
              <span>伙伴</span>
              <div>
                旭辉“房地产+”<br />
                核心成员之一
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
.companyprofile_box {
  .layout_content_innerbox {
    ._bottom {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: px(120);
      & > div {
        width: px(302);
        height: px(560);
        background: rgba(248, 248, 248, 1);
        display: flex;
        flex-direction: column;
        & > img {
          display: block;
          width: px(302);
          height: px(320);
        }
        & > div {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          & > span {
            height: px(42);
            font-size: px(30);

            color: rgba(0, 0, 0, 1);
            line-height: px(36);
            margin-bottom: px(16);
          }
          & > div {
            text-align: center;
            font-size: px(20);

            color: #454545;
            line-height: px(24);
          }
        }
      }
    }
  }
}
</style>
