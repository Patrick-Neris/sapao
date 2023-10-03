"use client";

export default function CardJogo({ jogo }) {
  const urlImagem = jogo.thumb;

  return (
    <div id="card" className="flex flex-col w-40 justify-center items-center">
      <img className="rounded" src={urlImagem} alt="" />
      <span className="font-bold text-center line-clamp-1">{jogo.title}</span>
      <div>
        {jogo.steamRatingPercent ? (
          <span>Nota Steam: {jogo.steamRatingPercent}</span>
        ) : undefined}
      </div>
      <div>
        <span>Nota Metacritic: {jogo.metacriticScore}</span>
      </div>
      <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">
        detalhes
      </a>
    </div>
  );
}
