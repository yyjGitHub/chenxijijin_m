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
    component: Layout,
    children: [
      {
        path: "",
        name: "index",
        component: _import("home/Home"),
        meta: {
          label: "关于晨曦",
          title: "关于晨曦-晨曦基金"
        }
      }
    ],
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
        path: "QYJJ",
        name: "SYZG",
        meta: {
          label: "企业简介"
        }
      },
      {
        path: "QYFC",
        name: "QYFC",
        meta: {
          label: "企业风采"
        }
      },
      {
        path: "TZCL",
        name: "TZCL",
        meta: {
          label: "业务介绍"
        }
      },
      {
        path: "HZHB",
        name: "HZHB",
        meta: {
          label: "合作伙伴"
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
          label: "战略蓝图",
          title: "战略蓝图-晨曦基金"
        }
      },
      {
        path: "SYZG",
        name: "SYZG",
        meta: {
          label: "术有专攻"
        }
      },
      {
        path: "TZJD",
        name: "TZJD",
        meta: {
          label: "投资经典"
        }
      },
      {
        path: "SDDC",
        name: "SDDC",
        meta: {
          label: "深度洞察"
        }
      }
    ],
    meta: {
      label: "战略蓝图",
      title: "战略蓝图-晨曦基金"
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
          label: "晨曦视界",
          title: "晨曦视界-晨曦基金"
        }
      },
      {
        path: ":newsID",
        name: "newsietm",
        component: _import("news/Item"),
        meta: {
          label: "晨曦视界",
          title: "晨曦视界-晨曦基金",
          isntShow: true
        }
      },
      {
        path: "CXSJ",
        name: "CXSJ",
        meta: {
          label: "新闻动态"
        }
      },
      {
        path: "QYGG",
        name: "QYGG",
        meta: {
          label: "团队建设"
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
      label: "晨曦视界",
      title: "晨曦视界-晨曦基金"
    }
  },
  // {
  //   path: "/relation",
  //   name: "relation",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "",
  //       name: "index",
  //       component: _import("relation/Index"),
  //       meta: {
  //         label: "投资者关系",
  //         title: "投资者关系-晨曦基金"
  //       }
  //     }
  //   ],
  //   meta: {
  //     label: "投资者关系",
  //     title: "投资者关系-晨曦基金"
  //   }
  // },
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
          label: "联系我们",
          title: "联系我们-晨曦基金"
        }
      },
      {
        path: "SHZP",
        name: "SHZP",
        meta: {
          label: "社会招聘"
        }
      },
      {
        path: "LXWM",
        name: "LXWM",
        meta: {
          label: "联系我们"
        }
      }
    ],
    meta: {
      label: "联系我们",
      title: "联系我们-晨曦基金"
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
