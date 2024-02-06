import { Header } from "./Header.js";

// Tarefas:
// a- definir elementos do DOM, b- chamar métodos do model com as dados
// c- chamar métodos da view para renderização.

let main = document.querySelector("main");

export const initHeader = () => {
  // Instanciar o Model:

  // Instanciou o Header:
  const objeto = new Header();
  main.innerHTML = objeto.headerHTML;
};
