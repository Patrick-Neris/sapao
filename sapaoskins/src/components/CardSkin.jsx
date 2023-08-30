import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CardSkin({ skin }) {
  const [favorito, setFavorito] = useState(false);

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
      <img className="rounded" src={skin.imagem} alt="" />
      <span className="font-bold text-center line-clamp-1">{skin.titulo}</span>
      <div>
        <span>{skin.nota}</span>
      </div>
      <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">
        detalhes
      </a>
    </div>
  );
}
