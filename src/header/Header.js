export class Header {
  constructor() {
    console.log("construindo header");
  }
  headerHTML = `
     <header class="header">
          <h1 class="header__h1">Rodrigo Lazani</h1>
          <h3 class="header__h2">Desenvolvedor de Sistemas</h3>
          <a href="curriculo.pdf" download="curriculo.pdf">
            <button class="header__button">
              Currículo <br />
              <img
                class="curriculo__simbolo"
                src="img/download.svg"
                alt="simbolo"
              />
            </button>
          </a>
        </header>
        <section class="info">
          <div class="abrirModals" id="projetos">
            <h3 class="info__h3">Projetos</h3>
          </div>
          <div class="abrirModals" id="conhecimentos">
            <h3 class="info__h3">Conhecimentos</h3>
          </div>
        </section>
    `;
}
