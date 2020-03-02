<template>
  <div class="news_item_box layout_content_box">
    <div class="_box">
      <div class="_top">
        <div class="news_title">
          {{ page_Info.title }}
        </div>
        <div class="news_date">{{ page_Info.time.split(" ")[0] }}</div>
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
        content: ""
      }
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
          .catch(response => {
            console.log(response);
          });
      },
      deep: true,
      immediate: true
    }
  }
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
        margin-bottom: px(24);
      }
      border-bottom: 1px solid #979797;
      margin-bottom: px(29);
    }
    ._bottom {
      font-size: px(28);
      color: #333;
      line-height: px(32);
      img {
        display: block;
        width: 100%;
      }
      p {
        margin: 0;
        margin-bottom: px(20);
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
