import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CardSkin({ skin }) {
  const [favorito, setFavorito] = useState(false);
  const urlImagem = `https://image.tmdb.org/t/p/w200/${skin.poster_path}`

  function favoritar(){
    setFavorito(true)
    // requisição para favoritar no tmdb
  }

  function desfavoritar(){
    setFavorito(false)
    //requisição
  }
  return (
    <div id="card" className="flex flex-col w-40 justify-center items-center">
      {favorito ? (
        <HeartIcon
          onClick={() => {
            setFavorito(false);
          }}
          className="h-6 w-6 text-slate-100"
        />
      ) : (
        <HeartIcon
          onClick={() => {
            setFavorito(true);
          }}
          className="h-6 w-6 text-rose-600"
        />
      )}
      <img className="rounded" src={urlImagem} alt="" />
      <span className="font-bold text-center line-clamp-1">{skin.title}</span>
      <div>
        <span>{skin.vote_average.toFixed(1)}</span>
      </div>
      <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">
        detalhes
      </a>
    </div>
  );
}
