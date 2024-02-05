import { Menu } from "./Menu.js";
import { menu } from "./dataMenu.js";

// Irá fazer a seleção no browser e passar para o View
// Irá fazer a selecção no dataMenu e também passar para o View.

const menuData = menu;
let contato__lista = document.querySelector(".contato__lista");

export const initMenu = () => {
  const objeto = new Menu();
  objeto.setMenuData(menuData);
  contato__lista.innerHTML = objeto.criarHtmlMenu();
};
