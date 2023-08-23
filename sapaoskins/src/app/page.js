import Title from "@/components/title";

export default function Home() {
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
      <div id="card" className="flex flex-col w-40 justify-center items-center">
        <img
          className="rounded"
          src="https://place-hold.it/150x220/666"
          alt=""
        />
        <span className="font-bold text-center line-clamp-1">nome da skin</span>
        <div>
          <span>9.9</span>
        </div>
        <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">
          detalhes
        </a>
      </div>
      <Title>Promoções</Title>
    </>
  );
}
