export class View {
  constructor() {}
  menuData;

  setMenuData = (menu) => {
    this.menuData = menu;
  };
  criarHtmlMenu = () => {
    let renderizacaoMenu = this.menuData.map((item) => {
      const { url, icon } = item;
      return `
      <li class="contato__itens">
            <a
              href="${url}"
              target="_blank"
              class="nav-icon"
            >
              <i class="social__icon ${icon}"></i>
            </a>
          </li>
      `;
    });
    renderizacaoMenu = renderizacaoMenu.join("");
    return renderizacaoMenu;
  };
}
