<template>
  <div class="news_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/m/news_top_bg.png" alt="" srcset="" />
      <div class="_title">共享成长 互利共赢</div>
    </div>
    <div class="page_bottom_box">
      <div class="tab_box">
        <van-tabs v-model="activeName" animated swipeable>
          <van-tab title="晨曦视界" name="CXSJ">
            <div class="part _part1">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    晨曦视界
                  </div>
                  <div class="_entitle">
                    NEWS
                  </div>
                  <div class="_info">
                    发现价值 协同合作
                  </div>
                  <div class="_line"></div>
                </div>
                <div class="_bottom">
                  结合管理团队过去的投资和运营经验以及对未来基金发展的规划，基金的投资理念和投资方式只要是理解全球发展规律，抓住中国独特的结构性社会。
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_listbox">
                  <div class="_item">
                    <img
                      src="~@/assets/m/news_part1_pic1.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span class="_title">
                        旭辉晨曦斩获中国最佳房地产股权投资机构TOP10
                      </span>
                      <span class="_date">
                        2019/07/18
                      </span>
                    </div>
                  </div>
                  <div class="_item">
                    <img
                      src="~@/assets/m/news_part1_pic2.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span class="_title">
                        秉承合作基因，旭辉晨曦与兴业银行共话未来
                      </span>
                      <span class="_date">
                        2018/09/05
                      </span>
                    </div>
                  </div>
                  <div class="_item">
                    <img
                      src="~@/assets/m/news_part1_pic3.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span class="_title">
                        类REITs挂牌上市|旭辉晨曦资产证券化创新破冰
                      </span>
                      <span class="_date">
                        2018/08/10
                      </span>
                    </div>
                  </div>
                  <div class="_item">
                    <img
                      src="~@/assets/m/news_part1_pic4.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span class="_title">
                        旭辉晨曦荣膺2018中国房地产基金品牌TOP10
                      </span>
                      <span class="_date">
                        2018/08/03
                      </span>
                    </div>
                  </div>
                  <div class="_item">
                    <img
                      src="~@/assets/m/news_part1_pic5.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span class="_title">
                        秉承合作基因，旭辉晨曦与兴业银行共话未来
                      </span>
                      <span class="_date">
                        2018/09/05
                      </span>
                    </div>
                  </div>
                  <div class="_item">
                    <img
                      src="~@/assets/m/news_part1_pic6.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span class="_title">
                        类REITs挂牌上市|旭辉晨曦资产证券化创新破冰
                      </span>
                      <span class="_date">
                        2018/08/03
                      </span>
                    </div>
                  </div>
                </div>
                <div class="pagination_box">
                  <el-pagination
                    small
                    background
                    layout="prev, pager, next"
                    :total="20"
                  >
                  </el-pagination>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="企业公告" name="QYGG">
            <div class="part _part2">
              <div class="part_top_box">
                <div class="_top">
                  <div class="_title">
                    企业公告
                  </div>
                  <div class="_entitle">
                    NOTICE
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_listbox">
                  <div class="_item">
                    <img
                      src="~@/assets/m/news_part2_pic1.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span class="_title">
                        曦盛1号私募投资基金备案成功
                      </span>
                      <span class="_into">
                        晨曦基金发起的第一支纯股基金——曦盛1号私募投资基金于2018年3月29日通过中国基金业协会备案，备案编号为SCN301。该基金采用双管理人的模式，历时3个多月的谈判，最终与项目方、资方大成一致合作意向。
                      </span>
                    </div>
                  </div>
                  <div class="_item">
                    <img
                      src="~@/assets/m/news_part1_pic2.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span class="_title">
                        中国首单民企长租公寓储架式权益类REITs获批
                      </span>
                      <span class="_into">
                        晨曦基金发起的第一支纯股基金——曦盛1号私募投资基金于2018年3月29日通过中国基金业协会备案，备案编号为SCN301。该基金采用双管理人的模式，历时3个多月的谈判，最终与项目方、资方大成一致合作意向。
                      </span>
                    </div>
                  </div>
                </div>
                <div class="pagination_box">
                  <el-pagination
                    small
                    background
                    layout="prev, pager, next"
                    :total="20"
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
                    CEO TALK
                  </div>
                  <div class="_entitle">
                    NOTICE
                  </div>
                  <div class="_line"></div>
                </div>
              </div>
              <div class="part_bottom_box">
                <div class="_listbox">
                  <div class="_item">
                    <img
                      src="~@/assets/m/news_part3_pic1.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span class="_title">
                        以最佳状态决必应之战
                      </span>
                      <span class="_into">
                        一上班，桌上的一堆文件、邮箱里的各类邮件、领导的临时布置和同事的求救呼叫……一天的时间很快就在忙忙碌碌中过掉了。相信很多同事都会有这样的经历，但忙碌是否就代表有效率？
                      </span>
                    </div>
                  </div>
                  <div class="_item">
                    <img
                      src="~@/assets/m/news_part3_pic2.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      <span class="_title">
                        以最佳状态决必应之战
                      </span>
                      <span class="_into">
                        一上班，桌上的一堆文件、邮箱里的各类邮件、领导的临时布置和同事的求救呼叫……一天的时间很快就在忙忙碌碌中过掉了。相信很多同事都会有这样的经历，但忙碌是否就代表有效率？
                      </span>
                    </div>
                  </div>
                </div>
                <div class="pagination_box">
                  <el-pagination
                    small
                    background
                    layout="prev, pager, next"
                    :total="20"
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
      activeName: "CEOTALK"
    };
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
              height: px(33);
              font-size: px(28);
              color: #333;
              line-height: px(33);
              font-weight: bold;
              margin-bottom: px(8);
            }
            ._date,
            ._into {
              font-size: px(18);
              color: #949494;
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
