"use client";

import Title from "@/components/title";
import CardSkin from "@/components/CardSkin";

async function carregarSkins() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const response = await fetch(url);
  const json = await response.json()
  return json.results;
}

export default async function Home() {
  const skins = await carregarSkins();
  return (
    // jsx
    <>
      <nav className="flex p-4 bg-slate-900">
        <ul className="flex gap-20">
          <li>
            <a href="#">
              <h1>Sapão Skins</h1>
            </a>
          </li>
          <li>
            <a href="#">Favoritos</a>
          </li>
        </ul>
      </nav>
      <Title>Em alta</Title>
      <section className="flex flex-wrap gap-2 m-2">
        {skins.map((skin) => (
          <CardSkin skin={skin} />
        ))}
      </section>
      <Title>Promoções</Title>
    </>
  );
}
