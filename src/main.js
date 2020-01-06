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

Vue.prototype.$baseUrl = "http://fund.xjcode.top/Home/index/";
Vue.prototype.$basePicUrl = "http://fund.xjcode.top/Public/Uploads/";

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
  uiVersion: "1.0.11"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
