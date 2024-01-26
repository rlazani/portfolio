import "./abrirModal.js";
import * as status from "./statusModal.js";

const arrowProjetos = document.getElementById("arrowProjetos");
const arrowConhecimentos = document.getElementById("arrowConhecimentos");
const displayProjetos = document.getElementById("display__projetos");
const displayConhecimentos = document.getElementById("display__conhecimentos");
const mainBlur = document.querySelector(".mainBlur");

const fecharModal = () => {
  // Fechar o modal
  if (status.getProjetoAberto() === true) {
    displayProjetos.classList.add("hide");
    status.mudarStatusProjetos();
    mainBlur.classList.remove("blur");
  }
  if (status.getConhecimentoAberto() === true) {
    displayConhecimentos.classList.add("hide");
    status.mudarStatusConhecimentos();
    mainBlur.classList.remove("blur");
  }
};

arrowProjetos.addEventListener("click", fecharModal);
arrowConhecimentos.addEventListener("click", fecharModal);
