import { useState, useEffect } from "preact/hooks";
import { supabase } from "@/lib/supabaseClient";
import Spinner from "@/icons/Spinner";


export default function AuthForm({ onAuthSuccess }: { onAuthSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error, data } = await supabase.auth.signInWithPassword({
      email, password
    });

    if (error || !data.session) {
      setError("Credenciales inválidas");
      setLoading(false);
      return;
    }

    onAuthSuccess(); // Llama a la función para indicar que la autenticación fue exitosa
  };

  return (
    <div class="bg-button p-4 md:p-8 rounded-xl w-full md:w-2/4 xl:w-2/6 mx-auto">
      <div class="p-3 md:p-6 bg-white rounded-xl">
        <h2 class="text-2xl text-gray-900 mb-6">Accede con tus credenciales</h2>

        <form onSubmit={handleSubmit} class="space-y-4">
          <input
            type="email"
            placeholder="Email"
            class="w-full p-2 rounded border"
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            class="w-full p-2 rounded border"
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
            required
          />
          {error && <p class="text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            class={`w-1/2 flex justify-center mx-auto bg-indigo-600 text-white p-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? <Spinner /> : "Iniciar Sesión"}
          </button>

        </form>
      </div>
    </div>
  );
}
