import { View } from "./View.js";
import { menu } from "./dataMenu.js";
import { menuJson } from "./Model.js";
import { fetchData } from "./Model.js";

// Irá fazer a seleção no browser e passar para o View
// Irá fazer a selecção no dataMenu e também passar para o View.

// Tarefas:
// a- definir elementos do DOM / b- pegar dados do model / c- chamar funções do View para renderização

let menuData = menu;
let contato__lista = document.querySelector(".contato__lista");

export const initMenu = () => {
  const objeto = new View();
  objeto.setMenuData(menuData);
  contato__lista.innerHTML = objeto.criarHtmlMenu();
};
