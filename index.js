import { initHeader } from "./src/header/Controller.js";
import { initMenu } from "./src/menu/Controller.js";
import { ControllerProjetos } from "./src/projetos/Controller.js";
import { ControllerConhecimentos } from "./src/conhecimentos/Controller.js";

//initHeader();
initMenu();

const constrollerProjetos = new ControllerProjetos();
const constrollerConhecimentos = new ControllerConhecimentos();
