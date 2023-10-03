"use client";

export default function CardJogo({ jogo }) {
  const urlImagem = jogo.thumb;

  return (
    <div id="card" className="flex flex-col w-40 justify-center items-center">
      <img className="rounded" src={urlImagem} alt="" />
      <span className="font-bold text-center line-clamp-2">
        {jogo.title ? jogo.title : jogo.external}
      </span>
      <div>
        {jogo.steamRatingPercent ? (
          <span>Nota Steam: {jogo.steamRatingPercent}</span>
        ) : (
          <span>Menor Preço: ${jogo.cheapest}</span>
        )}
      </div>
      <div>
        {jogo.metacriticScore ? (
          <span>Nota Metacritic: {jogo.metacriticScore}</span>
        ) : undefined}
      </div>
    </div>
  );
}
