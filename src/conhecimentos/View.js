export class View {
  dadosModel;

  link = document.querySelector("#conhecimentos");

  arrow = document.querySelector(".arrow__conhecimentos");

  listaConhecimentos = document.getElementById("lista-conhecimentos");

  constructor(dadosModel) {
    this.dadosModel = dadosModel;
    this.link.addEventListener("click", this.abrirModal);
    this.renderizarConhecimentos();
    this.arrow.addEventListener("click", this.fecharModal);
  }

  abrirModal() {
    const displayConhecimentos = document.getElementById(
      "display__conhecimentos"
    );
    displayConhecimentos.classList.remove("hideConhecimentos");
    const mainBlur = document.querySelector(".mainBlur");
    mainBlur.classList.add("blur");
  }

  renderizarConhecimentos() {
    this.dadosModel.forEach((el) => {
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
  }

  fecharModal() {
    const displayConhecimentos = document.getElementById(
      "display__conhecimentos"
    );
    displayConhecimentos.classList.add("hideConhecimentos");
    const mainBlur = document.querySelector(".mainBlur");
    mainBlur.classList.remove("blur");
  }
}
