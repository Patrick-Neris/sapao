"use server";

import { cookies } from "next/headers";

export async function definirTitulo(titulo) {
  cookies().set("titulo", titulo);
  return;
}

export async function clearTitulo() {
  cookies().delete("titulo");
}

export async function getTitulo() {
  if (cookies().has("titulo")) {
    return cookies().get("titulo").value;
  }
  return undefined;
}
