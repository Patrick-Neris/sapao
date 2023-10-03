"use client";

import { serverLogout } from "@/actions/user";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { push } = useRouter();

  function logout() {
    serverLogout();
    push("/login");
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
          <a href="#">Favoritos</a>
        </li>
      </ul>

      <button onClick={logout}>Logout</button>
    </nav>
  );
}
