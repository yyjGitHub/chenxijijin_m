<template>
  <div class="business_index_box layout_content_box">
    <div class="page_bottom_box">
      <div class="tab_box">
        <van-tabs v-model="activeName" @click="onClick" animated swipeable>
          <van-tab :title="SYZG_Info.ctitle" name="SYZG">
            <div class="part _part1">
              <div class="part_top_box iss">
                <div class="_top iss">
                  <div class="_title">
                    {{ SYZG_Info.ctitle }}
                  </div>
                  <div class="_line iss"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_listbox">
                  <div
                    class="_item"
                    v-for="(item, index) in SYZG_List"
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
                    :total="SYZG_total"
                    @current-change="pageChange1"
                  >
                  </el-pagination>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab :title="TZJD_Info.ctitle" name="TZJD">
            <div class="part _part2">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    {{ TZJD_Info.ctitle }}
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_listbox">
                  <div
                    class="_item"
                    v-for="(item, index) in TZJD_List"
                    @click="toitem(item.url, item.id)"
                    :key="index"
                  >
                    <img :src="`${$basePicUrl}${item.file}`" alt="" srcset="" />
                    <div>
                      <span class="_date">
                        {{ item.entitle }}
                      </span>
                      <span class="_title">
                        {{ item.title }}
                      </span>
                      <span class="_into">
                        {{ item.category }}
                      </span>
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
                    :total="TZJD_total"
                  >
                  </el-pagination>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab :title="SDDC_Info.ctitle" name="SDDC">
            <div class="part _part3">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    {{ SDDC_Info.ctitle }}
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_listbox">
                  <div
                    class="_item"
                    v-for="(item, index) in SDDC_List"
                    @click="toitem(item.url, item.id)"
                    :key="index"
                  >
                    <img :src="`${$basePicUrl}${item.file}`" alt="" srcset="" />
                    <div>
                      <span class="_date">
                        {{ item.entitle }}
                      </span>
                      <span class="_title">
                        {{ item.title }}
                      </span>
                      <span class="_into">
                        {{ item.category }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="pagination_box">
                  <el-pagination
                    small
                    background
                    layout="prev, pager, next"
                    :page-size="6"
                    :total="SDDC_total"
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
      activeName: "SYZG",
      SYZG_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: "",
      },
      SYZG_List: [],
      TZJD_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: "",
      },
      TZJD_List: [
        {
          title: "",
          content: "",
          logo: "",
        },
      ],
      SDDC_Info: {
        title: "",
        entitle: "",
        content: "",
        logo: "",
      },
      SDDC_List: [],
      SYZG_p: 1,
      TZJD_p: 1,
      SDDC_p: 1,
      SYZG_total: 0,
      TZJD_total: 0,
      SDDC_total: 0,
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
      deep: true,
    },
  },
  mounted() {
    this.onClick("SYZG");
    this.onClick("TZJD");
    this.onClick("SDDC");
  },
  methods: {
    toitem(url, index) {
      if (url) {
        window.open(url);
        return;
      }
      this.$router.push(`/news/${index}`);
    },
    onClick(name) {
      this.SYZG_p = 1;
      this.TZJD_p = 1;
      this.SDDC_p = 1;
      let info_url = `${this.$baseUrl}`;
      let list_url = `${this.$baseUrl}`;
      switch (name) {
        case "SYZG":
          info_url += `content/id/9`;
          list_url += `contentext/id/9/p/1/count/6`;
          break;
        case "TZJD":
          info_url += `content/id/10`;
          list_url += `contentext/id/10/p/1/count/6`;
          break;
        case "SDDC":
          info_url += `content/id/11`;
          list_url += `contentext/id/11/p/1/count/6`;
          break;
        default:
          break;
      }
      this.axios
        .get(info_url)
        .then(({ data }) => {
          this.$data[`${name}_Info`] = data.data;
        })
        .catch((response) => {
          console.log(response);
        });
      this.axios
        .get(list_url)
        .then(({ data }) => {
          this.$data[`${name}_List`] = data.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
    pageChange1(p) {
      this.SYZG_p = p;
      // 晨曦世界
      this.axios
        .get(`${this.$baseUrl}contentext/id/9/p/${this.SYZG_p}/count/6`)
        .then(({ data }) => {
          if (data.data) {
            this.SYZG_List = data.data;
          }
          this.SYZG_total = parseInt(data.count);
        })
        .catch((response) => {
          console.log(response);
        });
    },
    pageChange2(p) {
      this.TZJD_p = p;
      // 企业公告
      this.axios
        .get(`${this.$baseUrl}contentext/id/10/p/${this.TZJD_p}/count/6`)
        .then(({ data }) => {
          if (data.data) {
            this.TZJD_List = data.data;
          }
          this.TZJD_total = parseInt(data.count);
        })
        .catch((response) => {
          console.log(response);
        });
    },
    pageChange3(p) {
      this.SDDC_p = p;
      // SDDC
      this.axios
        .get(`${this.$baseUrl}contentext/id/11/p/${this.SDDC_p}/count/6`)
        .then(({ data }) => {
          if (data.data) {
            this.SDDC_List = data.data;
          }
          console.log(this.SDDC_List);
          this.SDDC_total = parseInt(data.count);
        })
        .catch((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style lang="scss">
.business_index_box {
  ._part1,
  ._part2,
  ._part3 {
    .part_bottom_box {
      ._listbox {
        padding-bottom: px(24);
        & > ._item {
          width: 100%;
          padding: px(26) px(24);
          box-sizing: border-box;
          background-color: #f8f8f8;
          margin-bottom: px(40);
          & > img {
            display: block;
            width: 100%;
            height: px(259);
            margin-bottom: px(22);
          }
          & > div {
            span {
              display: block;
            }
            ._date {
              height: px(24);
              font-size: px(20);
              line-height: px(24);
              margin-bottom: px(13);
            }
            ._title {
              font-size: px(28);
              color: #333;
              line-height: px(36);
              font-weight: bold;
              margin-bottom: px(2);
            }
            ._into {
              height: px(43);
              font-size: px(20);
              line-height: px(40);
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
