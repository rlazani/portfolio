export class View {
  dadosModel;

  constructor(dadosModel) {
    this.dadosModel = dadosModel;
    this.renderizarProjetos();
  }

  renderizarProjetos() {
    let renderizacaoProjetos = this.dadosModel.map((projeto) => {
      const { titulo, descricao, link, github } = projeto;
      return `
       
         <li class="caixa_li">
              <h3 class="caixa_titulo">
            ${titulo}
              </h3>
              <p class="caixa_p">
               ${descricao}
              </p>
              <div class="links">
                <a href="${link}" target="_blank">
                  <button class="visitar">Visitar</button>
                </a>
                <a href="${github}" target="_blank" class="nav-icon">
                  <i class="fa-brands fa-github social__icon github"></i>
                </a>
              </div>
            </li>
           
      `;
    });
    renderizacaoProjetos = renderizacaoProjetos.join("");
    //return renderizacaoProjetos;
    const listaProjetos = document.querySelector(".projetos_div");
    listaProjetos.innerHTML = renderizacaoProjetos;
  }
}
