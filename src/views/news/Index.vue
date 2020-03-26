<template>
  <div class="news_index_box layout_content_box">
    <div class="page_top_box">
      <img :src="`${$basePicUrl}${topInfo.logo}`" alt="" srcset="" />
      <div class="_title">{{ topInfo.title }}</div>
    </div>
    <div class="page_bottom_box">
      <div class="tab_box">
        <van-tabs v-model="activeName" @click="onClick" animated swipeable>
          <van-tab title="新闻动态" name="CXSJ">
            <div class="part _part1">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    术有专攻
                    <div class="_info">
                      {{ CXSJ_Info.title }}
                    </div>
                  </div>
                  <div class="_entitle">
                    NEWS
                  </div>

                  <div class="_line"></div>
                </div>
                <div class="_bottom" v-html="CXSJ_Info.content"></div>
              </div>
              <div class="part_bottom_box">
                <div class="_listbox">
                  <div
                    class="_item"
                    v-for="(item, index) in CXSJ_List"
                    :key="index"
                    @click="toitem(item.url, item.id)"
                  >
                    <img :src="`${$basePicUrl}${item.file}`" alt="" srcset="" />
                    <div>
                      <span class="_title">
                        {{ item.title }}
                      </span>
                      <span class="_date">
                        {{ item.time.split(" ")[0] }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="pagination_box">
                  <el-pagination
                    small
                    background
                    :page-size="6"
                    layout="prev, pager, next"
                    :total="CXSJ_total"
                    @current-change="pageChange1"
                  >
                  </el-pagination>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="团队建设" name="QYGG">
            <div class="part _part2">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    投资经典
                  </div>
                  <div class="_entitle">
                    NOTICE
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_listbox">
                  <div
                    class="_item"
                    v-for="(item, index) in QYGG_List"
                    @click="toitem(item.url, item.id)"
                    :key="index"
                  >
                    <img :src="`${$basePicUrl}${item.file}`" alt="" srcset="" />
                    <div>
                      <span class="_title">
                        {{ item.title }}
                      </span>
                      <span class="_into" v-html="item.content"> </span>
                    </div>
                  </div>
                </div>
                <div class="pagination_box">
                  <el-pagination
                    small
                    @current-change="pageChange1"
                    background
                    :page-size="6"
                    layout="prev, pager, next"
                    :total="QYGG_total"
                  >
                  </el-pagination>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="CEO TALK" name="CEOTALK">
            <div class="part _part3">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    深度洞察
                  </div>
                  <div class="_entitle">
                    NOTICE
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_listbox">
                  <div
                    class="_item"
                    v-for="(item, index) in CEOTALK_List"
                    @click="toitem(item.url, item.id)"
                    :key="index"
                  >
                    <img :src="`${$basePicUrl}${item.file}`" alt="" srcset="" />
                    <div>
                      <span class="_title">
                        {{ item.title }}
                      </span>
                      <span class="_into" v-html="item.content"> </span>
                    </div>
                  </div>
                </div>
                <div class="pagination_box">
                  <el-pagination
                    small
                    background
                    layout="prev, pager, next"
                    :page-size="6"
                    :total="CEOTALK_total"
                    @current-change="pageChange3"
                  >
                  </el-pagination>
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
      activeName: "CEOTALK",
      topInfo: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      CXSJ_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      CXSJ_List: [],
      QYGG_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      QYGG_List: [
        {
          title: "",
          content: "",
          logo: ""
        }
      ],
      CEOTALK_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: ""
      },
      CEOTALK_List: [],
      CXSJ_p: 1,
      QYGG_p: 1,
      CEOTALK_p: 1,
      CXSJ_total: 0,
      QYGG_total: 0,
      CEOTALK_total: 0
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        console.log(newVal);
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
        .get(`${this.$baseUrl}content/id/12`)
        .then(({ data }) => {
          this.topInfo = data.data;
        })
        .catch(response => {
          console.log(response);
        });
    },
    toitem(url, index) {
      if (url) {
        window.open(url);
        return;
      }
      this.$router.push(`/news/${index}`);
    },
    onClick(name) {
      this.CXSJ_p = 1;
      this.QYGG_p = 1;
      this.CEOTALK_p = 1;
      let info_url = `${this.$baseUrl}`;
      let list_url = `${this.$baseUrl}`;
      switch (name) {
        case "CXSJ":
          info_url += `content/id/23`;
          list_url += `contentext/id/23/p/1/count/6`;
          break;
        case "QYGG":
          info_url += `content/id/13`;
          list_url += `contentext/id/13/p/1/count/6`;
          break;
        case "CEOTALK":
          info_url += `content/id/14`;
          list_url += `contentext/id/14/p/1/count/6`;
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
    },
    pageChange1(p) {
      this.CXSJ_p = p;
      // 晨曦世界
      this.axios
        .get(
          `${this.$baseUrl}contentext/id/23/p/${this.CXSJ_p}/count/6/sortTime/desc`
        )
        .then(({ data }) => {
          this.CXSJ_List = data.data;
          this.CXSJ_total = parseInt(data.count);
        })
        .catch(response => {
          console.log(response);
        });
    },
    pageChange2(p) {
      this.QYGG_p = p;
      // 企业公告
      this.axios
        .get(`${this.$baseUrl}contentext/id/13/p/${this.QYGG_p}/count/6`)
        .then(({ data }) => {
          this.QYGG_List = data.data;
          this.QYGG_total = parseInt(data.count);
        })
        .catch(response => {
          console.log(response);
        });
    },
    pageChange3(p) {
      this.CEOTALK_p = p;
      // CEOTALK
      this.axios
        .get(`${this.$baseUrl}contentext/id/14/p/${this.CEOTALK_p}/count/6`)
        .then(({ data }) => {
          this.CEOTALK_List = data.data;
          this.CEOTALK_total = parseInt(data.count);
        })
        .catch(response => {
          console.log(response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.news_index_box {
  ._part1,
  ._part2,
  ._part3 {
    .part_bottom_box {
      ._listbox {
        padding-bottom: px(24);
        & > ._item {
          width: 100%;
          padding: px(24);
          box-sizing: border-box;
          background-color: #f8f8f8;
          margin-bottom: px(24);
          & > img {
            display: block;
            width: 100%;
            height: px(218);
            margin-bottom: px(24);
          }
          & > div {
            span {
              display: block;
            }
            ._title {
              font-size: px(28);
              color: #333;
              line-height: px(33);
              font-weight: bold;
              margin-bottom: px(8);
            }
            ._date,
            ._into {
              font-size: px(20);
              color: #949494;
              line-height: px(24);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 5;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
  ._part2,
  ._part3 {
    .part_bottom_box {
      ._listbox {
        ._item {
          & > div {
            ._into {
              line-height: px(32);
            }
          }
        }
      }
    }
  }
  ._part2,
  ._part3 {
    .part_top_box {
      padding-bottom: px(20) !important;
      ._top {
        margin-bottom: px(60) !important;
        ._line {
          bottom: px(-32) !important;
        }
      }
    }
  }
}
</style>
