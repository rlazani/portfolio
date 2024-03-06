//import { initHeader } from "./src/header/Controller.js";
import { initMenu } from "./src/menu/Controller.js";
import { ControllerProjetos } from "./src/projetos/Controller.js";
import { ControllerExperiencia } from "./src/experiencia/Controller.js";

//initHeader();
initMenu();

//const constrollerProjetos = new ControllerProjetos();
//const constrollerConhecimentos = new ControllerConhecimentos();

const iniciandoProjetos = new ControllerProjetos();
const iniciandoExperiencia = new ControllerExperiencia();
