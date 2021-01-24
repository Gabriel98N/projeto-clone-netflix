import listAll from "./api-list.js";
import header from "./header.js";
import trailerList from "./trailer.js";
import menu from "./menu.js";

header();
menu();

/* Função para criar elementos */
const criaElements = (element) => document.createElement(element);

async function getList() {
  const listsAll = await (await listAll()).list();
  const containerLista = document.querySelector(".container-listas");
  const introducao = document.querySelector(".introducao");
  const destaque = document.querySelector(".destaque");

  /* Pegando os recomendados para você netflix */
  const originals = listsAll.filter((item) => item.slug === "originals");
  const random = Math.floor(Math.random() * originals[0].itens.results.length - 1);
  const imgEscolhido = originals[0].itens.results[random];

  const getID = await (await listAll()).getInfo(imgEscolhido.id, "tv");
  const title = criaElements("h1");
  const infos = criaElements("div");
  const descricao = criaElements("div");
  const generos = criaElements("div");
  const divButtons = criaElements("div");
  const btnAssistir = criaElements("button");
  const btnMinhaLista = criaElements("button");
  const ano = new Date(getID.first_air_date);

  title.innerHTML = getID.name;
  infos.classList.add("infos");
  infos.innerHTML = `
    <p>${getID.vote_average} pontos</p>
    <p>${ano.getFullYear()}</p>
    <p>${getID.number_of_seasons} temporada${getID.number_of_seasons !== 1 ? "s" : ""}</p>`;
  descricao.classList.add("descricao");
  descricao.innerHTML = `<p>${getID.overview}</p>`;

  let genres = [];
  getID.genres.forEach((genre) => {
    genres.push(genre.name);
  });

  generos.classList.add("generos");
  generos.innerHTML = `<p><strong>Gêneros: </strong>${genres.join(", ")}</p>`;

  /* Buttons Destaques (Assistir e minha Lista) */
  btnAssistir.innerText = "► Assistir";
  btnMinhaLista.innerText = "+ Minha lista";

  divButtons.classList.add("div-buttons");
  divButtons.appendChild(btnAssistir);
  divButtons.appendChild(btnMinhaLista);

  destaque.appendChild(title);
  destaque.appendChild(infos);
  destaque.appendChild(descricao);
  destaque.appendChild(divButtons);
  destaque.appendChild(generos);

  /* Fundo aleatório dos destaques */
  introducao.setAttribute(
    "style",
    `
    background-image: url('https://image.tmdb.org/t/p/original${imgEscolhido.backdrop_path}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `
  );

  const mapLists = listsAll.map((list) => {
    /* Criando divs para as séries */
    const sectionCapa = criaElements("section");
    sectionCapa.classList.add("catalago");
    const ImgCapa = criaElements("div");
    ImgCapa.classList.add("img-capa");

    sectionCapa.innerHTML = `<h2>${list.title}</h2>`;

    /*Pegando os Results*/
    list.itens.results.forEach((result) => {
      const img = criaElements("img");
      const urlIMG = `https://image.tmdb.org/t/p/w200${result.poster_path}`;
      img.src = urlIMG;
      ImgCapa.appendChild(img);

      return result;
    });

    sectionCapa.appendChild(ImgCapa);
    containerLista.appendChild(sectionCapa);

    return list;
  });

  /*Trailer*/
  trailerList();
}
getList();