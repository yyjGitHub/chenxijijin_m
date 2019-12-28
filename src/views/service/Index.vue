<template>
  <div class="service_index_box layout_content_box">
    <div class="page_top_box">
      <img src="~@/assets/m/relation_top_bg.png" alt="" srcset="" />
      <div class="_title">高效及时 用心服务</div>
    </div>
    <div class="page_bottom_box">
      <div class="tab_box">
        <div class="part">
          <div class="part_top_box">
            <div class="_top">
              <div class="_title">
                联系我们
              </div>
              <div class="_entitle">
                CONTACT
              </div>
              <div class="_line"></div>
            </div>
          </div>
          <div class="part_bottom_box">
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="part1" id="LXWM">
        <div class="_c">
          <div class="layout_content_title">
            联系我们
          </div>
          <div class="layout_content_into">
            发现价值 协同合作
          </div>
          <div class="_bottom">
            <div class="_box">
              <div class="map_wrapper">
                <el-amap
                  ref="map"
                  vid="amapDemo"
                  :amap-manager="amapManager"
                  :center="center"
                  :zoom="zoom"
                  class="amap-demo"
                >
                  <el-amap-marker
                    vid="component-marker"
                    :position="center"
                  ></el-amap-marker>
                </el-amap>
                <div class="_tooltip">
                  <img
                    src="~@/assets/image/telphone_icon.png"
                    class="_icon"
                    alt=""
                    srcset=""
                  />
                  <span>021-58995866</span>
                  <div class="line"></div>
                  <img
                    src="~@/assets/image/address_icon.png"
                    class="_icon"
                    alt=""
                    srcset=""
                  />
                  <span class="_address"
                    >浦东新区张杨路2389弄置汇旭辉广场C座15楼</span
                  >
                </div>
              </div>
              <div class="_form">
                <div class="_title">
                  CONTACT US
                </div>
                <div class="_subtitle">
                  联系我们
                </div>
                <el-input
                  class="name"
                  v-model="name"
                  placeholder="用户名"
                ></el-input>
                <el-input
                  class="contact"
                  v-model="contact"
                  placeholder="邮箱/手机"
                ></el-input>
                <el-input
                  class="content"
                  type="textarea"
                  placeholder="请输入留言信息"
                  v-model="content"
                >
                </el-input>
                <div class="submit_share">
                  <div class="_left">
                    <img
                      src="~@/assets/image/wechat_icon.png"
                      alt=""
                      srcset=""
                    />
                    <img
                      src="~@/assets/image/weibo_icon.png"
                      alt=""
                      srcset=""
                    />
                    <img
                      src="~@/assets/image/share_icon.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="_submit">提交</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { AMapManager } from "vue-amap";
let amapManager = new AMapManager();
export default {
  data() {
    return {
      // amapManager,
      // zoom: "12",
      // center: [121.545101, 31.236498]
      amapManager,
      zoom: 16,
      center: [121.545101, 31.236498],
      mapStyle: "fresh",
      name: "",
      contact: "",
      content: ""
    };
  }
};
</script>

<style lang="scss">
.service_index_box {
  .part {
    .part_top_box {
      padding-bottom: px(20) !important;
      ._top {
        margin-bottom: px(60) !important;
        ._line {
          bottom: px(-32) !important;
        }
      }
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
  }
}
</style>
