export class Modal {
  constructor() {
    // Abertura (30/01):

    // Fechamento:
    this.arrowConhecimentos.addEventListener(
      "click",
      this.fecharModal.bind(this)
    );
    this.arrowProjetos.addEventListener("click", this.fecharModal.bind(this));
  }

  logiTeste = () => {
    console.log("Classe funcionando!!!");
    console.log(this.displayProjetos.innerHTML);
  };

  // Event Listeners (Controller):
  // Propriedades que captam os event listeners:
  displayProjetos = document.getElementById("display__projetos");
  displayConhecimentos = document.getElementById("display__conhecimentos");
  mainBlur = document.querySelector(".mainBlur");
  abrirModals = document.querySelectorAll(".abrirModals");
  arrowProjetos = document.getElementById("arrowProjetos");
  arrowConhecimentos = document.getElementById("arrowConhecimentos");

  // Gerenciamento de status do Modal:
  projetosAberto = false;
  conhecimentosAberto = false;

  lerStatus = () => {
    console.log("lendo status");
  };

  getProjetoAberto = () => {
    return this.projetosAberto;
  };

  getConhecimentoAberto = () => {
    return this.conhecimentosAberto;
  };

  mudarStatusProjetos = () => {
    if (this.projetosAberto === true) {
      this.projetosAberto = false;
    }
    if (this.projetosAberto === false) {
      this.projetosAberto = true;
    }
  };

  mudarStatusConhecimentos = () => {
    if (this.conhecimentosAberto === true) {
      this.conhecimentosAberto = false;
    } else {
      this.conhecimentosAberto = true;
    }
  };

  fecharModal = () => {
    console.log("fechando o modal na classe@@@");
    // Fechar o modal
    if (this.getProjetoAberto() === false) {
      console.log("projeto está aberto%%%");
      this.displayProjetos.classList.add("hide");
      this.mudarStatusProjetos();
      this.mainBlur.classList.remove("blur");
    }
    if (this.getConhecimentoAberto() === true) {
      this.displayConhecimentos.classList.add("hide");
      this.mudarStatusConhecimentos();
      this.mainBlur.classList.remove("blur");
      this.mainBlur.classList.remove("esconderResponsivo");
    }
  };
} // Fechamento da Classe

// Fechar Modal:
