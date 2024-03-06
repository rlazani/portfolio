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
       
         <li class="experiencia_li">
              <strong>${titulo}:</strong> ${itens}
            </li>
           
      `;
    });
    renderizacaoExperiencia = renderizacaoExperiencia.join("");

    const listaExperiencia = document.querySelector(".experiencia_ul");
    listaExperiencia.innerHTML = renderizacaoExperiencia;
  }
}
