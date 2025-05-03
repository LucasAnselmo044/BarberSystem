import { auth } from "@/auth";

export default async function Book() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;
  return (
    <main className="">
      <p className="">Olá, faça aqui seu agendamento:</p>
    </main>
  );
}
