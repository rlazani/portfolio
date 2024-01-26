import { lerStatus } from "./statusModal.js";
import * as status from "./statusModal.js";

//import { myConst } from "./myModule.js";

//const arrows = document.querySelectorAll(".arrow");

const displayProjetos = document.getElementById("display__projetos");
const displayConhecimentos = document.getElementById("display__conhecimentos");
const mainBlur = document.querySelector(".mainBlur");
/* const abrirProjetos = document.getElementById("projetos");
const abrirConhecimentos = document.getElementById("conhecimentos"); */
const abrirModals = document.querySelectorAll(".abrirModals");

abrirModals.forEach(function (modal) {
  modal.addEventListener("click", function (e) {
    const display = e.currentTarget.id;
    if (display === "projetos") {
      displayProjetos.classList.toggle("hide");
      status.mudarStatusProjetos();
      console.log(`Mudando: ${status.getProjetoAberto()}`);
    } else if (display === "conhecimentos") {
      displayConhecimentos.classList.toggle("hide");
      status.mudarStatusProjetos();
    }
    mainBlur.classList.toggle("blur");
  });
});

// Fazer uma função para modificar o status de projetosAberto e conhecimentosAberto
