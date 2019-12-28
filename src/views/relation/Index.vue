<template>
  <div class="relation_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/m/relation_top_bg.png" alt="" srcset="" />
      <div class="_title">发现价值 协同合作</div>
    </div>
    <div class="page_center_box">
      <div @click="showList = !showList">
        <span>2019年公告</span>
        <img src="~@/assets/m/arrow_right_active.png" alt="" srcset="" />
      </div>
      <div class="_list" v-if="showList">
        <div class="item" @click="showList = !showList">
          <span>2019年公告</span>
          <img src="~@/assets/m/arrow_right.png" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div class="page_bottom_box">
      <div class="tab_box">
        <div class="part">
          <div class="part_top_box">
            <div class="_top">
              <div class="_title">
                晨曦通函
              </div>
              <div class="_entitle">
                NEWS
              </div>
              <div class="_info">
                发现价值 协同合作
              </div>
              <div class="_line"></div>
            </div>
          </div>
          <div class="part_bottom_box">
            <div class="_listbox">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showList: false
    };
  }
};
</script>

<style lang="scss" scoped>
.relation_index_box {
  .page_center_box {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    position: relative;
    & > :not(._list) {
      width: 100%;
      margin: px(0) px(48);
      height: px(57);
      border: 1px solid rgba(91, 155, 228, 1);
      margin-top: px(40);
      padding: 0 px(24);
      display: flex;
      align-items: center;
      box-sizing: border-box;
      justify-content: space-between;
      & > img {
        display: block;
        width: px(12);
        height: px(21);
        transform: rotateZ(90deg);
      }
      & > span {
        font-size: px(18);
        color: rgba(91, 155, 228, 1);
      }
    }

    & > ._list {
      position: absolute;
      top: 100%;
      width: calc(100% - 0.98rem);
      margin: 0rem 0.48rem;
      box-sizing: border-box;
      left: 0;
      & > .item {
        display: flex;
        height: px(57);
        width: 100%;
        background-color: #f8f8f8;
        color: #333;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        justify-content: space-between;
        padding: 0 px(24);
        margin-top: px(12);
        &:active {
          background-color: #5b9be4;
          color: #fff;
        }
        span {
          font-size: px(18);
          color: #333;
        }
        img {
          display: block;
          width: px(12);
          height: px(21);
        }
      }
    }
  }
  .part {
    .part_top_box {
      ._top {
        ._title {
          position: relative;
          z-index: 2;
        }
        ._entitle {
          z-index: 1 !important;
        }
      }
    }
    .part_bottom_box {
      ._listbox {
        padding-bottom: px(24);
        & > div {
          width: 100%;
          height: px(108);
          background-color: #f8f8f8;
          box-sizing: border-box;
          padding: px(24);
          margin-bottom: px(24);
          ._date {
            height: px(18);
            font-size: px(24);
            color: #7f7f7f;
            line-height: px(24);
          }
          ._b {
            margin-top: px(4);
            display: flex;
            align-items: center;
            justify-content: space-between;
            ._title {
              font-size: px(28);
              color: #333;
              max-width: px(660);
              font-weight: bold;
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
                  background: url("~@/assets/m/arrow_right_active.png")
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
