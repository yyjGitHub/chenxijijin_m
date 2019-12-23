import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
import Layout from "@/views/layout/Index";

const _import = file => require(`@/views/${file}.vue`).default;

Vue.use(VueRouter);

const baseroutes = [
  {
    path: "/",
    redirect: "/home"
  }
];

const mainroutes = [
  {
    path: "/home",
    name: "home",
    component: _import("home/Home"),
    meta: {
      label: "首页",
      title: "首页-晨曦基金"
    }
  },
  {
    path: "/about",
    name: "about",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("about/Index"),
        meta: {
          label: "关于晨曦",
          title: "关于晨曦-晨曦基金"
        }
      },
      {
        path: "CompanyProfile",
        name: "CompanyProfile",
        component: _import("about/CompanyProfile"),
        meta: {
          label: "企业简介",
          title: "企业简介-晨曦基金"
        }
      },
      {
        path: "CorporateVision/QYYJ",
        name: "CorporateVision",
        component: _import("about/CorporateVision"),
        meta: {
          label: "企业愿景",
          title: "企业愿景-晨曦基金"
        }
      },
      {
        path: "CorporateVision/QYRY",
        name: "CorporateVision",
        component: _import("about/CorporateVision"),
        meta: {
          label: "企业荣誉",
          title: "企业荣誉-晨曦基金"
        }
      },
      {
        path: "InvestmentStrategy",
        name: "InvestmentStrategy",
        component: _import("about/InvestmentStrategy"),
        meta: {
          label: "投资策略",
          title: "投资策略-晨曦基金"
        }
      },
      {
        path: "CooperationPartners",
        name: "CooperationPartners",
        component: _import("about/CooperationPartners"),
        meta: {
          label: "合作伙伴",
          title: "合作伙伴-晨曦基金"
        }
      }
    ],
    meta: {
      label: "关于晨曦",
      title: "关于晨曦-晨曦基金"
    }
  },
  {
    path: "/business",
    name: "business",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("business/Index"),
        meta: {
          label: "业务领域",
          title: "业务领域-晨曦基金"
        }
      },
      {
        path: "DCJJ",
        name: "DCJJ",
        meta: {
          label: "地产基金"
        }
      },
      {
        path: "JGYW",
        name: "JGYW",
        meta: {
          label: "机构业务"
        }
      },
      {
        path: "CFGL",
        name: "CFGL",
        meta: {
          label: "财富管理"
        }
      }
    ],
    meta: {
      label: "业务领域",
      title: "业务领域-晨曦基金"
    }
  },
  {
    path: "/news",
    name: "news",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("news/Index"),
        meta: {
          label: "新闻资讯",
          title: "新闻资讯-晨曦基金"
        }
      },
      {
        path: ":newsID",
        name: "newsietm",
        component: _import("news/Item"),
        meta: {
          label: "新闻资讯",
          title: "新闻资讯-晨曦基金",
          isntShow: true
        }
      },
      {
        path: "CXSJ",
        name: "CXSJ",
        meta: {
          label: "晨曦视界"
        }
      },
      {
        path: "QYGG",
        name: "QYGG",
        meta: {
          label: "企业公告"
        }
      },
      {
        path: "CEOTALK",
        name: "CEOTALK",
        meta: {
          label: "CEO TALK"
        }
      }
    ],
    meta: {
      label: "新闻资讯",
      title: "新闻资讯-晨曦基金"
    }
  },
  {
    path: "/relation",
    name: "relation",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("relation/Index"),
        meta: {
          label: "投资者关系",
          title: "投资者关系-晨曦基金"
        }
      },
      {
        path: "2016GG",
        name: "2016GG",
        meta: {
          label: "2016年公告"
        }
      },
      {
        path: "2017GG",
        name: "2017GG",
        meta: {
          label: "2017年公告"
        }
      },
      {
        path: "2018GG",
        name: "2018GG",
        meta: {
          label: "2018年公告"
        }
      }
    ],
    meta: {
      label: "投资者关系",
      title: "投资者关系-晨曦基金"
    }
  },
  {
    path: "/service",
    name: "service",
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("service/Index"),
        meta: {
          label: "服务中心",
          title: "服务中心-晨曦基金"
        }
      },
      {
        path: "LXWM",
        name: "LXWM",
        meta: {
          label: "联系我们"
        }
      },
      {
        path: "SHZP",
        name: "SHZP",
        meta: {
          label: "社会招聘"
        }
      }
    ],
    meta: {
      label: "服务中心",
      title: "服务中心-晨曦基金"
    }
  }
];
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  loadingroutes: false,
  isCreateMenu: false,
  routes: [...baseroutes, ...mainroutes],
  scrollBehavior() {
    // to, from, savedPosition
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (router.options.isCreateMenu) {
    document.getElementsByTagName("title")[0].innerText = to.meta.title;
    next();
  } else {
    store.dispatch("saveMenuList", mainroutes).then(() => {
      router.options.isCreateMenu = true;
      document.getElementsByTagName("title")[0].innerText = to.meta.title;
      next();
    });
  }
});

export default router;
