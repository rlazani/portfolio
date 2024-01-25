console.log("funcionando");

// Seção Display Projetos / Conhecimentos:

//const arrows = document.querySelectorAll(".arrow");
const arrowProjetos = document.getElementById("arrowProjetos");
const arrowConhecimentos = document.getElementById("arrowConhecimentos");
const displayProjetos = document.getElementById("display__projetos");
const displayConhecimentos = document.getElementById("display__conhecimentos");
const mainBlur = document.querySelector(".mainBlur");
const abrirProjetos = document.getElementById("projetos");
const abrirConhecimentos = document.getElementById("conhecimentos");
const abrirModals = document.querySelectorAll(".abrirModals");

// Gerenciadores de abertura Projetos / Conhecimentos:
let projetosAberto = false;
let conhecimentosAberto = false;

const fecharModal = () => {
  console.log("fechando modal de conhecimentos");
  // Fechar o modal
  if (projetosAberto === true) {
    console.log("fechando projetos");
    displayProjetos.classList.add("hide");
    projetosAberto === false;
    mainBlur.classList.remove("blur");
    console.log(projetosAberto);
  }
  if (conhecimentosAberto === true) {
    console.log("fechando conhecimento");
    displayConhecimentos.classList.add("hide");
    conhecimentosAberto === false;
    mainBlur.classList.remove("blur");
    console.log(conhecimentosAberto);
  }
};

arrowProjetos.addEventListener("click", fecharModal);
arrowConhecimentos.addEventListener("click", fecharModal);

/* arrows.forEach(function (arrow) {
  arrow.addEventListener("click", fecharModal);
}); */

abrirModals.forEach(function (modal) {
  modal.addEventListener("click", function (e) {
    const display = e.currentTarget.id;
    if (display === "projetos") {
      displayProjetos.classList.toggle("hide");
      projetosAberto = true;
    } else if (display === "conhecimentos") {
      displayConhecimentos.classList.toggle("hide");
      conhecimentosAberto = true;
    }
    mainBlur.classList.toggle("blur");
  });
});

// #Próximo dia: finalizar o fechar modal para conhecimentos

//abrirProjetos.addEventListener("click", modal);
// # CAPTAR ONDE OCORREU O CLICK (e.target) PARA ENCAMINHAR O MODAL:
//abrirConhecimentos.addEventListener("click", modal);

/* const moverModal = () => {
  // Escolher o modal através de uma variável:
  displayProjetos.classList.toggle("hide");
  // Acrescentar o blur:
  mainBlur.classList.toggle("blur");
}; */
