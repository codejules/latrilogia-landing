import UiSpinner from "@/icons/Spinner.tsx";
import { useState, useEffect } from "preact/hooks";
import AddFile from "./AddFile";
import { createClient } from "@supabase/supabase-js";

// Inicializa Supabase con persistencia de sesión automática
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true, // Maneja la sesión automáticamente en cookies seguras
    detectSessionInUrl: true,
  },
});

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState<boolean | null>(null); // null para evitar parpadeo al recargar

  useEffect(() => {
    // Verificar si hay una sesión activa al cargar la página
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setAuth(!!data.session); // Si hay sesión, auth será true
    };

    checkSession();
  }, []);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error || !data.session) {
        throw new Error("Credenciales inválidas.");
      }

      setAuth(true); // Usuario autenticado correctamente
    } catch (err: any) {
      setError("Ocurrió un error durante la autenticación.");
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (auth === null) {
    return ( 
      <div class="flex justify-center items-center h-screen">
        <UiSpinner /> {/* Mostrar un spinner mientras se carga la sesión */}
      </div>
    );
  }

  if (auth) {
    return <AddFile />;
  }

  return (
    <div class="pt-24 md:pt-48 px-4">
      <div class="max-w-screen-xl mx-auto">
        <div class="flex flex-col gap-8 items-center">
          <div class="flex flex-col gap-4">
            <h2 class="text-slate-500 text-2xl md:text-4xl">Área de Administración</h2>
          </div>
          <div class="bg-button p-4 md:p-8 rounded-xl w-full md:w-1/2">
            <div class="p-3 md:p-6 bg-white rounded-xl">
              <h2 class="text-2xl text-gray-900 mb-6">Accede con tus credenciales</h2>

              <form onSubmit={handleSubmit} class="space-y-4">
                <div class="flex flex-col gap-4">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    class="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email..."
                    autocomplete="email"
                    onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
                  />
                  <input
                    onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
                    placeholder="Contraseña..."
                    type="password"
                    id="password"
                    required
                    autocomplete="new-password"
                    class="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {error && <p class="text-red-500 text-sm">{error}</p>}

                <div class="flex place-content-center py-5">
                  <button 
                    type="submit"
                    class={`w-3/4 md:w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm 
                            text-sm font-medium text-white bg-button hover:text-black hover:bg-[#f2e4d3] transition ease-in duration-300 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                            ${loading && "opacity-50 cursor-not-allowed"}`}
                  >
                    {loading ? <UiSpinner /> : "Enviar"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
