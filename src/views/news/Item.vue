<template>
  <div class="news_item_box layout_content_box">
    <div class="_box">
      <div class="_top">
        <div class="news_title">
          {{ page_Info.title }}
        </div>
        <div class="news_date">{{ page_Info.date }}</div>
      </div>
      <div class="_bottom" v-html="page_Info.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page_Info: {
        title: "",
        time: "",
        content: "",
      },
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        //  晨曦视界
        this.axios
          .get(`${this.$baseUrl}extdetail/id/${newVal.params.newsID}`)
          .then(({ data }) => {
            this.page_Info = data.data;
          })
          .catch((response) => {
            console.log(response);
          });
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.news_item_box {
  background-color: #fff;
  position: relative;
  z-index: 90;
  ._box {
    width: px(654);
    margin: 0 auto;
    padding-top: px(63);
    padding-bottom: px(120);
    ._top {
      .news_title {
        text-align: center;
        color: #333;
        font-size: px(34);
        line-height: px(44);
        height: px(88);
        margin-bottom: px(30);
        font-weight: bold;
      }
      .news_date {
        text-align: center;
        color: #7f7f7f;
        font-size: px(22);
        line-height: px(24);
        height: px(24);
        padding-bottom: px(24);
      }
      position: relative;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 1px;
        background-color: #979797;
        -webkit-transform: scaleY(0.5);
      }
      margin-bottom: px(29);
    }
    ._bottom {
      font-size: px(28);
      color: #6e6e6e;
      line-height: px(48);
      img {
        display: block;
        width: 100%;
      }
      p {
        margin: 0;
        margin-bottom: px(26);
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
