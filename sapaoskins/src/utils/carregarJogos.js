import { getTitulo } from "./definirCookie";

export async function carregarJogos() {
  const titulo = await getTitulo();
  console.log(titulo);
  const url = titulo
    ? `https://www.cheapshark.com/api/1.0/games?title=${titulo}`
    : "https://www.cheapshark.com/api/1.0/deals";
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
