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
       
         <li class="projetos_li">
              <h3 class="projetos_titulo">
            ${titulo}
              </h3>
              <p class="projetos_p">
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

/*  <li>
    <h3 class="titulo">${titulo}</h3>
    <p class="descricao">${descricao}</p>
    <div class="links">
      <a href="${link}" target="_blank">
        <button class="visitar">Visitar</button>
      </a>
      <a href="${github}" target="_blank" class="nav-icon">
        <i class="fa-brands fa-github social__icon"></i>
      </a>
    </div>
  </li>;  */
