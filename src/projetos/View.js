export class View {
  dadosModel;

  link = document.querySelector("#projetos");

  arrow = document.querySelector(".arrow__projetos");

  constructor(dadosModel) {
    this.dadosModel = dadosModel;
    this.link.addEventListener("click", this.abrirModal);
    this.renderizarProjetos();
    this.arrow.addEventListener("click", this.fecharModal);
  }

  abrirModal() {
    const displayProjetos = document.getElementById("display__projetos");
    displayProjetos.classList.remove("hideProjetos");
    const mainBlur = document.querySelector(".mainBlur");
    mainBlur.classList.add("blur");
  }
  renderizarProjetos() {
    let renderizacaoProjetos = this.dadosModel.map((projeto) => {
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
    //return renderizacaoProjetos;
    const listaProjetos = document.getElementById("lista-projetos");
    listaProjetos.innerHTML = renderizacaoProjetos;
  }
  fecharModal() {
    const displayProjetos = document.getElementById("display__projetos");
    displayProjetos.classList.add("hideProjetos");
    const mainBlur = document.querySelector(".mainBlur");
    mainBlur.classList.remove("blur");
  }
}
