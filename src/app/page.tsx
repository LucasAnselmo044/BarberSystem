"use client";

import Link from "next/link";
import SignIn from "./components/signin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6">
        Agende seu corte com facilidade ✂️
      </h1>

      <p className="text-lg md:text-xl text-center mb-8 max-w-2xl">
        Bem-vindo ao nosso sistema de agendamento para barbearias. Faça seu
        login e escolha o melhor horário para seu corte.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="/auth/login"
          className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition"
        >
          Área do Barbeiro
        </Link>

        <SignIn />
      </div>
    </main>
  );
}
