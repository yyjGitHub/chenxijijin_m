import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAMap from "vue-amap";
import store from "./store";
import "normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import { Pagination } from "element-ui";
import "./styles/app.scss";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { Icon } from "vant";
import { Tab, Tabs } from "vant";
import { Collapse, CollapseItem } from "vant";

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.use(VueAMap);
Vue.use(Icon);
Vue.use(Tab).use(Tabs);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Pagination);

VueAMap.initAMapApiLoader({
  key: "1787da644b789c9eb13218cc6b404a26",
  plugin: ["AMap.Scale"],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4",
  uiVersion: "1.0.11"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted() {
    let _this = this;
    this.resetFontsize();
    window.onresize = () => {
      return (() => {
        console.log(1);
        _this.resetFontsize();
      })();
    };
  },
  methods: {
    resetFontsize() {
      let rootHtml = document.documentElement;
      let deviceWidth = rootHtml.clientWidth;
      rootHtml.style.fontSize = (deviceWidth * 100) / 750 + "px";
    }
  },
  render: h => h(App)
}).$mount("#app");
