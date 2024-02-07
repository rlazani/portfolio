// import { View } from "./View.js";
import { Model } from "./Model.js";
// Tarefas: a- buscar dados do Model, b- chamar renderização da View (gerenciar)

export class ControllerProjetos {
  constructor() {
    console.log("controlling projetos");
    const model = new Model();
    model
      .fetchData()
      .then((data) => {
        console.log(data);
        /* objeto.setMenuData(data);
        contato__lista.innerHTML = objeto.criarHtmlMenu(); */
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}
