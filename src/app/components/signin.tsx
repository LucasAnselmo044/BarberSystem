import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/book" })}
      className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
    >
      Login com Google
    </button>
  );
}
