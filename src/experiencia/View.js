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
       
             <li class="caixa_li">
              <h3 class="caixa_titulo">
            ${titulo}
              </h3>
              <p class="caixa_p">
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
