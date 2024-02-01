import { dataProjetos, dataConhecimentos } from "./dataModal.js";

export class Modal {
  constructor() {
    // Abertura:

    this.linkProjetos.addEventListener("click", this.abrirModal.bind(this));
    this.linkConhecimentos.addEventListener(
      "click",
      this.abrirModal.bind(this)
    );
    // Fechamento:
    this.arrowConhecimentos.addEventListener(
      "click",
      this.fecharModal.bind(this)
    );
    this.arrowProjetos.addEventListener("click", this.fecharModal.bind(this));
  }

  logiTeste = () => {
    console.log("Classe funcionando!!!");
    console.log(this.displayProjetos);
  };

  // Event Listeners (Controller):
  // Propriedades que captam os event listeners:
  displayProjetos = document.getElementById("display__projetos");
  displayConhecimentos = document.getElementById("display__conhecimentos");
  linkProjetos = document.getElementById("projetos");
  linkConhecimentos = document.getElementById("conhecimentos");
  mainBlur = document.querySelector(".mainBlur");
  abrirModals = document.querySelectorAll(".abrirModals");
  arrowProjetos = document.getElementById("arrowProjetos");
  arrowConhecimentos = document.getElementById("arrowConhecimentos");
  listaProjetos = document.getElementById("lista-projetos");
  listaConhecimentos = document.getElementById("lista-conhecimentos");

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
    } else if (this.projetosAberto === false) {
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

  // Abrir e Fechar

  abrirModal = (e) => {
    const displayTarget = e.currentTarget.id;
    console.log(displayTarget);
    if (this.getProjetoAberto() === false && displayTarget === "projetos") {
      this.displayProjetos.classList.remove("hide");
      this.mudarStatusProjetos();
      this.mainBlur.classList.add("blur");
      // Insere o HTML criado no template renderizado
      this.listaProjetos.innerHTML = this.criarHTMLProjetos();
    } else if (
      this.getConhecimentoAberto() === false &&
      displayTarget === "conhecimentos"
    ) {
      this.displayConhecimentos.classList.remove("hide");
      this.mudarStatusConhecimentos();
      this.mainBlur.classList.add("blur");
      // Insere o HTML criado no template renderizado
      //this.listaProjetos.innerHTML = this.criarHTMLProjetos();
      this.criarHTMLConhecimentos();
    }
  };

  fecharModal = () => {
    // Fechar o modal
    if (this.getProjetoAberto() === true) {
      this.displayProjetos.classList.add("hide");
      this.mudarStatusProjetos();
      this.mainBlur.classList.remove("blur");
      this.listaProjetos = "";
    } else if (this.getConhecimentoAberto() === true) {
      this.displayConhecimentos.classList.add("hide");
      this.mudarStatusConhecimentos();
      this.mainBlur.classList.remove("blur");
      this.mainBlur.classList.remove("esconderResponsivo");
      this.listaConhecimentos = "";
    }
  };

  // criar HTML:

  criarHTMLProjetos = () => {
    let renderizacaoProjetos = dataProjetos.map((projeto) => {
      const { titulo, descricao, link, github } = projeto;
      return `
        <li>
          <h3 class="titulo">${titulo}</h3>
           <p class="descricao">
            ${descricao}
          </p>
          <div class="links">
            <a href="${link}" target="_blank">
              <button class="visitar">Visitar</button>
              </a>
              <a
                href="https://github.com/rlazani"
                target="_blank"
                class="nav-icon"
              >
              </a>
              <i class="fa-brands fa-github social__icon"></i>
            </a>
          </div>
        </li>
      `;
    });
    renderizacaoProjetos = renderizacaoProjetos.join("");
    return renderizacaoProjetos;
  };

  criarHTMLConhecimentos = () => {
    dataConhecimentos.forEach((el) => {
      //Criando o título:
      const li = document.createElement("li");
      li.classList.add("elemento-lista");
      const h3 = document.createElement("h3");
      h3.classList.add("titulo");
      h3.textContent = el.titulo;
      li.append(h3);
      const ul = document.createElement("ul");
      ul.classList.add("ul__conhecimentos");
      // Iteração sob os itens:
      el.itens.forEach((item) => {
        const liItem = document.createElement("li");
        liItem.textContent = item;
        li.append(liItem);
      });
      this.listaConhecimentos.append(li);
    });
  };
} // Fechamento da Classe
