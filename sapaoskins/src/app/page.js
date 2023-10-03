import Title from "@/components/title";
import CardJogo from "@/components/CardJogo";
import NavBar from "@/components/NavBar";

async function carregarJogos() {
  const url = "https://www.cheapshark.com/api/1.0/deals"
  const response = await fetch(url);
  const json = await response.json()
  return json;
}

export default async function Home() {
  const jogos = await carregarJogos();
  return (
    // jsx
    <>
      <NavBar/>
      <Title>Em alta</Title>
      <section className="flex flex-wrap gap-2 m-2">
        {jogos.map((jogo) => (
          <CardJogo jogo={jogo} />
        ))}
      </section>
      <Title>Promoções</Title>
    </>
  );
}
