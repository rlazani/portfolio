import { Modal } from "./Modal.js";

export const initModal = () => {
  instancia("projetos");
  instancia("conhecimentos");
};

const instancia = (el) => {
  const link = document.getElementById(el);
  const instancia = new Modal();
  link.addEventListener("click", instancia.abrirModal);
  // Fechar o modal:
  const arrow = document.querySelectorAll(".arrow");
  arrow.forEach(function (item) {
    item.addEventListener("click", instancia.fecharModal);
  });
};
