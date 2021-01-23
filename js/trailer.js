import listAll from "./api-list.js";

export default async function trailerList() {
  const lists = await (await listAll()).list();
  const overlayGeral = document.querySelector(".overlay-geral");
  const boxTrailer = document.querySelector(".trailer");
  const imgs = document.querySelectorAll(".img-capa img");

  const div = document.createElement("div");
  const descricao = document.createElement("p");
  const title = document.createElement("h2");
  const buttonTrailer = document.createElement('button');

  /* Lista de todas as séries */
  const resultsArray = [];
  lists.forEach((item) => {
    item.itens.results.forEach((item) => {
      resultsArray.push(item);
    });
  });

  imgs.forEach((img, index) => {
    async function handleImg(event) {
      event.stopPropagation();
      const imgClone = img.cloneNode(true);

      overlayGeral.classList.add("ativo");
      boxTrailer.classList.add("ativo");

      /* Título */
      title.innerText = resultsArray[index].name !== undefined ? resultsArray[index].name : resultsArray[index].title;

      /* Descrição */
      descricao.innerText = resultsArray[index].overview !== "" ? resultsArray[index].overview : "Descrição indisponível";

      /* Button Trailer */
      buttonTrailer.innerText = 'Trailer';

      div.appendChild(title);
      div.appendChild(descricao);
      div.appendChild(buttonTrailer);
      boxTrailer.appendChild(imgClone);
      boxTrailer.appendChild(div);
    }
    img.addEventListener("click", handleImg);

  });

  /* Remover ao clicar fora */

  document.addEventListener('click', (event) => {
    if (event.target === boxTrailer || event.target === overlayGeral) {
      boxTrailer.classList.remove("ativo");
      overlayGeral.classList.remove("ativo");
      boxTrailer.innerHTML = "";
    }
  })

  // resultsArray.forEach(result => {
  //   const trailer = listAll().then(response => response.getInfo(result.id, 'tv'));
  //   trailer.then(jsonDados => {
  //     console.log(jsonDados)
  //   })
  // })
}