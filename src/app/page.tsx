import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black">
      <h1 className="text-4xl font-bold text-center mb-6">
        Olá, agende seu corte com facilidade ✂️
      </h1>

      <div className="flex gap-4">
        <Link
          href="/auth/login"
          className="px-6 py-3 bg-white  rounded-md hover:bg-gray-800 transition text-black"
        >
          Área do Barbeiro
        </Link>

        <Link
          href="/book"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Agendar Agora
        </Link>
      </div>
    </main>
  );
}
