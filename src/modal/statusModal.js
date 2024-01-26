let projetosAberto = false;
let conhecimentosAberto = false;

console.log(`Inicio: ${projetosAberto}`);

const lerStatus = () => {
  console.log("lendo status");
};

const getProjetoAberto = () => {
  return projetosAberto;
};

const getConhecimentoAberto = () => {
  return projetosAberto;
};

const mudarStatusProjetos = () => {
  if (projetosAberto === true) {
    projetosAberto = false;
  }
  if (projetosAberto === false) {
    projetosAberto = true;
  }
};

const mudarStatusConhecimentos = () => {
  if (conhecimentosAberto === true) {
    conhecimentosAberto = false;
  } else {
    conhecimentosAberto = true;
  }
};

export {
  lerStatus,
  mudarStatusProjetos,
  mudarStatusConhecimentos,
  getProjetoAberto,
  getConhecimentoAberto,
};
// (age >= 18) ? 'Adult' : 'Minor';
