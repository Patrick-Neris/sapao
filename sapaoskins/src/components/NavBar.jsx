"use client";

import { definirTitulo } from "@/utils/definirCookie";
import { serverLogout } from "@/actions/user";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const [titulo, setTitulo] = useState("");
  const { push } = useRouter();
  function logout() {
    serverLogout();
    push("/login");
  }

  function pesquisar(e) {
    e.preventDefault();
    definirTitulo(titulo);
    push("/");
  }
  return (
    <nav className="flex p-4 bg-slate-900 justify-between">
      <ul className="flex gap-20">
        <li>
          <a href="#">
            <h1>Sapão Jogos</h1>
          </a>
        </li>
        <li>
          <form onSubmit={pesquisar}>
            <input
              type="search"
              className="rounded bg-slate-600 p-1"
              placeholder="Pesquisar"
              onChange={(e) => {
                setTitulo(e.target.value);
              }}
            />
          </form>
        </li>
      </ul>

      <button onClick={logout}>Logout</button>
    </nav>
  );
}
