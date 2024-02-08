import { Model } from "./Model.js";
import { View } from "./View.js";

export class ControllerConhecimentos {
  dadosModel;
  constructor() {
    // Model:
    const model = new Model();
    this.dadosModel = model.data;
    // View:
    const view = new View(this.dadosModel);
  }
}
