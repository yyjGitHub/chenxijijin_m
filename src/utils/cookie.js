const Menu = "cxjj_menu";

export function setMenu(menu) {
  return new Promise(resolve => {
    sessionStorage.setItem(Menu, menu);
    return resolve(true);
  });
}

export function getMenu() {
  return sessionStorage.getItem(Menu);
}

export function removeMenu() {
  return new Promise(resolve => {
    sessionStorage.removeItem(Menu);
    resolve(true);
  });
}
