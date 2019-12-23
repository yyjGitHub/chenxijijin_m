import { setMenu, getMenu } from "@/utils/cookie";
const menu = {
  state: {
    menulist: getMenu()
  },
  mutations: {
    SAVE_MENULIST: (state, list) => {
      setMenu(list);
      state.menulist = list;
    }
  },
  actions: {
    saveMenuList({ commit }, list) {
      return new Promise(resolve => {
        commit("SAVE_MENULIST", list);
        resolve(true);
      });
    }
  }
};

export default menu;
