import { Modal } from "./Modal.js";

export const initModal = () => {
  instancia("projetos");
  instancia("conhecimentos");
  fecharModal("arrowProjetos");
  fecharModal("arrowConhecimentos");
};

const instancia = (el) => {
  const link = document.getElementById(el);
  const instancia = new Modal();
  link.addEventListener("click", instancia.abrirModal);
};

const fecharModal = () => {
  const arrowProjetos = document.getElementById("arrowProjetos");
  const arrowConhecimentos = document.getElementById("arrowConhecimentos");
};
