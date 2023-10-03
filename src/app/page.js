import Title from "@/components/Title";
import CardJogo from "@/components/CardJogo";
import NavBar from "@/components/NavBar";
import { carregarJogos } from "@/utils/carregarJogos";

export default async function Home() {
  const jogos = await carregarJogos();
  return (
    // jsx
    <>
      <NavBar />
      <Title>Jogos e Expansões</Title>
      <section className="flex flex-wrap gap-2 m-2">
        {jogos.map((jogo) => (
          <CardJogo jogo={jogo} />
        ))}
      </section>
    </>
  );
}
