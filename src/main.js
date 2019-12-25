import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAMap from "vue-amap";
import store from "./store";
import "normalize.css";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import "./styles/app.scss";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { Icon } from "vant";

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.use(VueAMap);
Vue.use(Icon);

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
