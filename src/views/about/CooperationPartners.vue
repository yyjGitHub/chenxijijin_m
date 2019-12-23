<template>
  <div class="cooperationpartners_box layout_content_box">
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
          合作伙伴
        </div>
        <div class="layout_content_into">
          灵活配置 专业投资
        </div>
        <div class="layout_content_intro">
          结合管理团队过去的投资和运营经验以及对未来基金发展的规划，基金的投资理念和投资方式主要是理解全球发展规律，抓住中国独特的结构性机会，坚持独立的价值投资方式并提供后续关键的服务。
        </div>
        <div class="_bottom">
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic1.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic2.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic3.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic4.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic5.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic6.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic7.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic8.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic9.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic10.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic11.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic12.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic13.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic14.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <img
              src="~@/assets/image/about_cooperationpartners_pic15.png"
              alt=""
              srcset=""
            />
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
.cooperationpartners_box {
  .layout_content_innerbox {
    .layout_content_title {
      &::before {
        content: "STRATEGY";
      }
    }
    ._bottom {
      width: 100%;
      padding-bottom: px(96);
      display: flex;
      flex-wrap: wrap;
      & > div {
        width: px(302);
        height: px(200);
        margin-right: px(24);
        &:nth-child(4n) {
          margin-right: 0;
        }
        margin-bottom: px(24);
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
}
</style>
