<template>
  <footer :class="[isHome ? 'isHome' : '']">
    <div class="_box">
      <div class="_left">
        <div class="_top">
          <div>关于晨曦</div>
          <div>业务领域</div>
          <div>新闻资讯</div>
          <div>服务中心</div>
        </div>
        <div class="_company">Copyright©️ 上海晨曦股权投资基金管理有限公司</div>
        <div class="_beian">备案号：泸ICP18001865号</div>
      </div>
      <div class="_right">
        <img src="~@/assets/image/company_qrcode.png" alt="" srcset="" />
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
footer {
  background-color: #f8f8f8;
  &.isHome {
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(50% + 6.4rem);
    display: flex;
    justify-content: flex-end;
    ._box {
      margin: 0;
      ._right {
        margin-right: px(120);
      }
    }
  }
  ._box {
    width: px(1280);
    height: px(180);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ._left {
      display: flex;
      flex-direction: column;
      color: #7f7f7f;
      font-size: px(14);
      line-height: px(17);
      ._top {
        display: flex;
        align-items: center;
        margin-bottom: px(32);
        & > div {
          font-size: px(16);

          margin-right: px(120);
          cursor: pointer;
        }
      }
      ._company {
        margin-bottom: px(8);
      }
    }
    ._right {
      width: px(100);
      height: px(100);
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
