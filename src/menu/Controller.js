import { View } from "./View.js";
import { fetchData } from "./Model.js";

// Irá fazer a seleção no browser e passar para o View
// Irá fazer a selecção no dataMenu e também passar para o View.

// Tarefas:
// a- definir elementos do DOM / b- pegar dados do model / c- chamar funções do View para renderização

let contato__lista = document.querySelector(".contato__lista");

export const initMenu = () => {
  const objeto = new View();

  // Chama os dados do Model e dentro do Model a função de renderização da View:
  fetchData()
    .then((data) => {
      objeto.setMenuData(data);
      contato__lista.innerHTML = objeto.criarHtmlMenu();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
