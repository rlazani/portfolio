import { Header } from "./Header.js";

let main = document.querySelector("main");

export const initHeader = () => {
  const objeto = new Header();
  main.innerHTML = objeto.headerHTML;
};
