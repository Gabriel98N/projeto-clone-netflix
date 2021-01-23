const API = '797c238afa350fad4a4815081f01acc7';
const URL_BASE = 'https://api.themoviedb.org/3';

const fecthAPI = async (endPoint) => {
  const req = await fetch(`${URL_BASE}${endPoint}`);
  const json = req.json();
  return json;
}

export default async function listAll() {

  async function list() {
    return [{
        slug: 'originals',
        title: 'Originais da Netflix',
        itens: await fecthAPI(`/discover/tv?with_network=213&language=pt-BR&api_key=${API}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        itens: await fecthAPI(`/trending/all/week?language=pt-BR&api_key=${API}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        itens: await fecthAPI(`/movie/top_rated?language=pt-BR&api_key=${API}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        itens: await fecthAPI(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        itens: await fecthAPI(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        itens: await fecthAPI(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        itens: await fecthAPI(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API}`)
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        itens: await fecthAPI(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API}`)
      }
    ]
  }

  async function getInfo(id, type) {
    let info = {}

    if (id) {
      if (type === 'movie') {
        info = await fecthAPI(`/movie/${id}?language=pt-BR&api_key=${API}`);
      } else if (type === 'tv') {
        info = await fecthAPI(`/tv/${id}?language=pt-BR&api_key=${API}`);
        info.trailer = await fecthAPI(`/tv/${id}/videos?api_key=${API}&language=pt-BR`)
      }
    }
    return info;
  }

  return {
    list,
    getInfo
  }

}