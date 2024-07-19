pesquisarPersonagemPorId(1);

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    pesquisarPersonagemPorId(obterValorInput());
  }
});

function obterValorInput() {
  const valorInput = document.querySelector(
    ".pesquisar-personagem input"
  ).value;

  return valorInput;
}

function pesquisarPersonagemPorId(id) {
  let linkAPI = `https://rickandmortyapi.com/api/character/${id}`;
  let promise = axios.get(linkAPI);
  promise.then((response) => {
    renderizaDadosPersonagem(response);
    console.log(response);
  });
}

function renderizaDadosPersonagem(response) {
  const divImg = document.querySelector(".imagem-do-personagem");
  divImg.src = response.data.image;

  let nome = document.querySelector(".nome p");
  nome.innerHTML = response.data.name;

  let status = document.querySelector(".status p");
  status.innerHTML = response.data.status;

  let especie = document.querySelector(".especie p");
  especie.innerHTML = response.data.species;
}
