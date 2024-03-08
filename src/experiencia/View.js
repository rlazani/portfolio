export class View {
  dadosModel;

  constructor(dadosModel) {
    this.dadosModel = dadosModel;
    this.renderizarExperiencia();
  }

  renderizarExperiencia() {
    let renderizacaoExperiencia = this.dadosModel.map((experiencia) => {
      const { titulo, itens } = experiencia;
      return `
       
             <li class="projetos_li">
              <h3 class="projetos_titulo">
            ${titulo}
              </h3>
              <p class="projetos_p">
               ${itens}
              </p>
            </li>
           
      `;
    });
    renderizacaoExperiencia = renderizacaoExperiencia.join("");

    const listaExperiencia = document.querySelector(".experiencia_ul");
    listaExperiencia.innerHTML = renderizacaoExperiencia;
  }
}
