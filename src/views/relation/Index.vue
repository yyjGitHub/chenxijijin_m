<template>
  <div class="relation_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/image/relation_index_toppic.png" alt="" srcset="" />
      <div class="_box">
        <div class="_title">发现价值 协同合作</div>
        <div class="_into">
          公司以“轻资产运营”为导向，多元发展地产基金和股权投资等多个业务板块，致力于
          成为房地产综合服务提供商和独具特色的股权投资机构
        </div>
      </div>
    </div>
    <div class="page_bottom_box layout_content_innerbox">
      <div class="_c">
        <div class="layout_content_title">
          晨曦通函
        </div>
        <div class="layout_content_into">
          发现价值 协同合作
        </div>
        <div class="_bottom">
          <div class="_box">
            <div>
              <div class="_date">2018/03/30</div>
              <div class="_b">
                <div class="_title">曦盛1号私募投资基金备案成功</div>
                <div class="_more">
                  <div>
                    <span>查看PDF</span>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="_date">2018/03/30</div>
              <div class="_b">
                <div class="_title">收购资产的公告</div>
                <div class="_more">
                  <div>
                    <span>查看PDF</span>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="_date">2018/03/30</div>
              <div class="_b">
                <div class="_title">第三次监事会第二次会议决议公告</div>
                <div class="_more">
                  <div>
                    <span>查看PDF</span>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="_date">2018/03/30</div>
              <div class="_b">
                <div class="_title">曦盛1号私募投资基金备案成功</div>
                <div class="_more">
                  <div>
                    <span>查看PDF</span>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="_date">2018/03/30</div>
              <div class="_b">
                <div class="_title">收购资产的公告</div>
                <div class="_more">
                  <div>
                    <span>查看PDF</span>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
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
.relation_index_box {
  .layout_content_innerbox {
    .layout_content_title {
      &::before {
        content: "NEWS" !important;
      }
    }
    ._bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: px(80);
      padding-bottom: px(120);
      ._box {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: px(16);
        & > div {
          width: 100%;
          height: px(211);
          background-color: #f8f8f8;
          box-sizing: border-box;
          padding: px(60);
          margin-bottom: px(40);
          ._date {
            height: px(24);
            font-size: px(24);
            color: #7f7f7f;
            line-height: px(24);
          }
          ._b {
            margin-top: px(24);
            display: flex;
            align-items: center;
            justify-content: space-between;
            ._title {
              font-size: px(32);
              color: #333;
              max-width: px(660);
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            ._more {
              cursor: pointer;
              padding: 0 px(24);
              display: inline-block;
              height: px(40);
              border: px(2) solid #599ae5;
              & > div {
                height: 100%;
                display: flex;
                align-items: center;
                span {
                  font-size: px(14);

                  color: #599ae5;
                  display: block;
                  margin-right: px(8);
                }
                i {
                  display: block;
                  width: px(7);
                  height: px(14);
                  background: url("~@/assets/image/arrow_right_active.png")
                    no-repeat center;
                  background-size: cover;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
