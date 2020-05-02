import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAMap from "vue-amap";
import store from "./store";
import "normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import { Pagination } from "element-ui";
import animated from "animate.css";
import "./styles/app.scss";
import VueAwesomeSwiper from "vue-awesome-swiper";
import axios from "axios";
import VueAxios from "vue-axios";
import { Icon } from "vant";
import { Tab, Tabs } from "vant";
import { Collapse, CollapseItem } from "vant";

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

let baseurl = "";
let basepicurl = "";
const ishttps = "https:" == document.location.protocol ? true : false;
if (ishttps) {
  // alert("这是一个https请求");
  baseurl = "https://chenxifunds.com/Home/index/";
  basepicurl = "https://chenxifunds.com/Public/Uploads/";
} else {
  //  alert("http");
  baseurl = "http://chenxifunds.com/Home/index/";
  basepicurl = "https://chenxifunds.com/Public/Uploads/";
}

Vue.prototype.$baseUrl = baseurl;
Vue.prototype.$basePicUrl = basepicurl;

// Vue.prototype.$baseUrl = "http://taomaidian.cn/Home/index/";
// Vue.prototype.$basePicUrl = "http://taomaidian.cn/Public/Uploads/";

Vue.use(VueAMap);
Vue.use(Icon);
Vue.use(Tab).use(Tabs);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Pagination);
Vue.use(VueAxios, axios);
Vue.use(animated);

VueAMap.initAMapApiLoader({
  key: "1787da644b789c9eb13218cc6b404a26",
  plugin: ["AMap.Scale"],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4",
  uiVersion: "1.0.11",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    if (this.IsPC()) {
      window.location.href =
        location.protocol + "//" + location.host + "/index.html#/";
    }
  },
  mounted() {
    const that = this;
    that.resetFontSize();
    window.onresize = () => {
      return (() => {
        that.resetFontSize();
      })();
    };
  },
  methods: {
    resetFontSize() {
      let rootHtml = document.documentElement;
      let deviceWidth = rootHtml.clientWidth;

      rootHtml.style.fontSize = (deviceWidth * 100) / 750 + "px";
    },
    IsPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod",
      ];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
  },
}).$mount("#app");
