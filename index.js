import { initHeader } from "./src/header/Controller.js";
import { initMenu } from "./src/menu/Controller.js";
import { initModal } from "./src/modal/Controller.js";
import { fetchData } from "./src/menu/Model.js";

initHeader();
initMenu();
initModal();
/* fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  }); */
