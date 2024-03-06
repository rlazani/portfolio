// import { View } from "./View.js";
import { Model } from "./Model.js";
import { View } from "./View.js";
// Tarefas: a- buscar dados do Model, b- chamar renderização da View (gerenciar)

export class ControllerExperiencia {
  dadosModel;
  constructor() {
    // Model:
    const model = new Model();
    this.dadosModel = model.infoExperiencia;
    console.log(this.dadosModel);
    // View:
    const view = new View(this.dadosModel);
  }
}
