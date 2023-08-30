"use client";

import Title from "@/components/title";
import CardSkin from "@/components/CardSkin";

export default function Home() {
  const skins = [
    {
      titulo: "AWP | Atherys",
      nota: "9.9",
      imagem: "https://aceskins.com.br/wp-content/uploads/2021/03/xLifnHS.png",
    },
    {
      titulo: "AWP | Atherys",
      nota: "9.9",
      imagem: "https://aceskins.com.br/wp-content/uploads/2021/03/xLifnHS.png",
    },
  ];
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
      <section className="flex flex-wrap">
        {skins.map((skin) => (
          <CardSkin skin={skin} />
        ))}
      </section>
      <Title>Promoções</Title>
    </>
  );
}
