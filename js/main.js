/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/api-list.js":
/*!************************!*\
  !*** ./js/api-list.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ listAll\n/* harmony export */ });\nconst API = '797c238afa350fad4a4815081f01acc7';\nconst URL_BASE = 'https://api.themoviedb.org/3';\n\nconst fecthAPI = async (endPoint) => {\n  const req = await fetch(`${URL_BASE}${endPoint}`);\n  const json = req.json();\n  return json;\n}\n\nasync function listAll() {\n\n  async function list() {\n    return [{\n        slug: 'originals',\n        title: 'Originais da Netflix',\n        itens: await fecthAPI(`/discover/tv?with_network=213&language=pt-BR&api_key=${API}`)\n      },\n      {\n        slug: 'trending',\n        title: 'Recomendados para Você',\n        itens: await fecthAPI(`/trending/all/week?language=pt-BR&api_key=${API}`)\n      },\n      {\n        slug: 'toprated',\n        title: 'Em Alta',\n        itens: await fecthAPI(`/movie/top_rated?language=pt-BR&api_key=${API}`)\n      },\n      {\n        slug: 'action',\n        title: 'Ação',\n        itens: await fecthAPI(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API}`)\n      },\n      {\n        slug: 'comedy',\n        title: 'Comédia',\n        itens: await fecthAPI(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API}`)\n      },\n      {\n        slug: 'horror',\n        title: 'Terror',\n        itens: await fecthAPI(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API}`)\n      },\n      {\n        slug: 'romance',\n        title: 'Romance',\n        itens: await fecthAPI(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API}`)\n      },\n      {\n        slug: 'documentary',\n        title: 'Documentário',\n        itens: await fecthAPI(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API}`)\n      }\n    ]\n  }\n\n  async function getInfo(id, type) {\n    let info = {}\n\n    if (id) {\n      if (type === 'movie') {\n        info = await fecthAPI(`/movie/${id}?language=pt-BR&api_key=${API}`);\n      } else if (type === 'tv') {\n        info = await fecthAPI(`/tv/${id}?language=pt-BR&api_key=${API}`);\n        info.trailer = await fecthAPI(`/tv/${id}/videos?api_key=${API}&language=pt-BR`)\n      }\n    }\n    return info;\n  }\n\n  return {\n    list,\n    getInfo\n  }\n\n}\n\n//# sourceURL=webpack://site-2020.10/./js/api-list.js?");

/***/ }),

/***/ "./js/header.js":
/*!**********************!*\
  !*** ./js/header.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ header\n/* harmony export */ });\nfunction header(){\r\n  const header = document.querySelector('.header');\r\n  function scrollHeader(){\r\n    if(window.scrollY > 10){\r\n      header.classList.add('black');\r\n    }else{\r\n      header.classList.remove('black');\r\n    }\r\n  }\r\n  window.addEventListener('scroll', scrollHeader);\r\n\r\n  return () => {\r\n    window.removeEventListener('scroll', scrollHeader);\r\n  }\r\n}\n\n//# sourceURL=webpack://site-2020.10/./js/header.js?");

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ menu\n/* harmony export */ });\nfunction menu (){\r\n  const menu = document.querySelector('.menu');\r\n  const hamburguer = document.querySelector('.menu-hamburguer');\r\n  const mobile = document.querySelector('.mobile');\r\n\r\n  function handleMenu(){\r\n    menu.classList.toggle('ativo');\r\n    mobile.classList.toggle('ativo');\r\n  }\r\n  hamburguer.addEventListener('click', handleMenu);\r\n}\n\n//# sourceURL=webpack://site-2020.10/./js/menu.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-list.js */ \"./js/api-list.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./js/header.js\");\n/* harmony import */ var _trailer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trailer.js */ \"./js/trailer.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./js/menu.js\");\n\n\n\n\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n/* Função para criar elementos */\nconst criaElements = (element) => document.createElement(element);\n\nasync function getList() {\n  const listsAll = await (await (0,_api_list_js__WEBPACK_IMPORTED_MODULE_0__.default)()).list();\n  const containerLista = document.querySelector(\".container-listas\");\n  const introducao = document.querySelector(\".introducao\");\n  const destaque = document.querySelector(\".destaque\");\n\n  /* Pegando os originais netflix */\n  const originals = listsAll.filter((item) => item.slug === \"originals\");\n  const random = Math.floor(Math.random() * originals[0].itens.results.length - 1);\n  const imgEscolhido = originals[0].itens.results[random];\n\n  const getID = await (await (0,_api_list_js__WEBPACK_IMPORTED_MODULE_0__.default)()).getInfo(imgEscolhido.id, \"tv\");\n  const title = criaElements(\"h1\");\n  const infos = criaElements(\"div\");\n  const descricao = criaElements(\"div\");\n  const generos = criaElements(\"div\");\n  const divButtons = criaElements(\"div\");\n  const btnAssistir = criaElements(\"button\");\n  const btnMinhaLista = criaElements(\"button\");\n  const ano = new Date(getID.first_air_date);\n\n  title.innerHTML = getID.name;\n  infos.classList.add(\"infos\");\n  infos.innerHTML = `\n    <p>${getID.vote_average} pontos</p>\n    <p>${ano.getFullYear()}</p>\n    <p>${getID.number_of_seasons} temporada${getID.number_of_seasons !== 1 ? \"s\" : \"\"}</p>`;\n  descricao.classList.add(\"descricao\");\n  descricao.innerHTML = `<p>${getID.overview}</p>`;\n\n  let genres = [];\n  getID.genres.forEach((genre) => {\n    genres.push(genre.name);\n  });\n\n  generos.classList.add(\"generos\");\n  generos.innerHTML = `<p><strong>Gêneros: </strong>${genres.join(\", \")}</p>`;\n\n  /* Buttons Destaques (Assistir e minha Lista) */\n  btnAssistir.innerText = \"► Assistir\";\n  btnMinhaLista.innerText = \"+ Minha lista\";\n\n  divButtons.classList.add(\"div-buttons\");\n  divButtons.appendChild(btnAssistir);\n  divButtons.appendChild(btnMinhaLista);\n\n  destaque.appendChild(title);\n  destaque.appendChild(infos);\n  destaque.appendChild(descricao);\n  destaque.appendChild(divButtons);\n  destaque.appendChild(generos);\n\n  /* Fundo aleatório dos destaques */\n  introducao.setAttribute(\n    \"style\",\n    `\n    background-image: url('https://image.tmdb.org/t/p/original${imgEscolhido.backdrop_path}');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n  `\n  );\n\n  const mapLists = listsAll.map((list) => {\n    /* Criando divs para as séries */\n    const sectionCapa = criaElements(\"section\");\n    sectionCapa.classList.add(\"catalago\");\n    const ImgCapa = criaElements(\"div\");\n    ImgCapa.classList.add(\"img-capa\");\n\n    sectionCapa.innerHTML = `<h2>${list.title}</h2>`;\n\n    /*Pegando os Results*/\n    list.itens.results.forEach((result) => {\n      const img = criaElements(\"img\");\n      const urlIMG = `https://image.tmdb.org/t/p/w200${result.poster_path}`;\n      img.src = urlIMG;\n      ImgCapa.appendChild(img);\n\n      return result;\n    });\n\n    sectionCapa.appendChild(ImgCapa);\n    containerLista.appendChild(sectionCapa);\n\n    return list;\n  });\n\n  /*Trailer*/\n  (0,_trailer_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\ngetList();\n\n//# sourceURL=webpack://site-2020.10/./js/script.js?");

/***/ }),

/***/ "./js/trailer.js":
/*!***********************!*\
  !*** ./js/trailer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ trailerList\n/* harmony export */ });\n/* harmony import */ var _api_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-list.js */ \"./js/api-list.js\");\n\r\n\r\nasync function trailerList() {\r\n  const lists = await (await (0,_api_list_js__WEBPACK_IMPORTED_MODULE_0__.default)()).list();\r\n  const overlayGeral = document.querySelector(\".overlay-geral\");\r\n  const boxTrailer = document.querySelector(\".trailer\");\r\n  const imgs = document.querySelectorAll(\".img-capa img\");\r\n\r\n  const div = document.createElement(\"div\");\r\n  const descricao = document.createElement(\"p\");\r\n  const title = document.createElement(\"h2\");\r\n  const buttonTrailer = document.createElement('button');\r\n\r\n  console.log(lists)\r\n\r\n  /* Lista de todas as séries */\r\n  const resultsArray = [];\r\n  lists.forEach((item) => {\r\n    item.itens.results.forEach((item) => {\r\n      resultsArray.push(item);\r\n    });\r\n  });\r\n\r\n  imgs.forEach((img, index) => {\r\n    async function handleImg(event) {\r\n      event.stopPropagation();\r\n      const imgClone = img.cloneNode(true);\r\n\r\n      overlayGeral.classList.add(\"ativo\");\r\n      boxTrailer.classList.add(\"ativo\");\r\n\r\n      /* Título */\r\n      title.innerText = resultsArray[index].name !== undefined ? resultsArray[index].name : resultsArray[index].title;\r\n\r\n      /* Descrição */\r\n      descricao.innerText = resultsArray[index].overview !== \"\" ? resultsArray[index].overview : \"Descrição indisponível\";\r\n\r\n      /* Button Trailer */\r\n      buttonTrailer.innerText = 'Trailer';\r\n\r\n      div.appendChild(title);\r\n      div.appendChild(descricao);\r\n      div.appendChild(buttonTrailer);\r\n      boxTrailer.appendChild(imgClone);\r\n      boxTrailer.appendChild(div);\r\n    }\r\n    img.addEventListener(\"click\", handleImg);\r\n\r\n  });\r\n\r\n  /* Remover ao clicar fora */\r\n\r\n  document.addEventListener('click', (event) => {\r\n    if (event.target === boxTrailer || event.target === overlayGeral) {\r\n      boxTrailer.classList.remove(\"ativo\");\r\n      overlayGeral.classList.remove(\"ativo\");\r\n      boxTrailer.innerHTML = \"\";\r\n    }\r\n  })\r\n\r\n  // resultsArray.forEach(result => {\r\n  //   const trailer = listAll().then(response => response.getInfo(result.id, 'tv'));\r\n  //   trailer.then(jsonDados => {\r\n  //     console.log(jsonDados)\r\n  //   })\r\n  // })\r\n}\n\n//# sourceURL=webpack://site-2020.10/./js/trailer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;