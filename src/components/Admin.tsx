import UiSpinner from "@/icons/Spinner.tsx";
import { useState, useEffect } from "preact/hooks";
import AddFile from "./AddFile";
import { createClient } from "@supabase/supabase-js";

// Inicializa Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Admin() {

  type Button = {
    text: string;
    type: "reset" | "submit" | "button";
    classes: string;
  };

  const BUTTON: Button[] = [
    {
      text: "Enviar",
      type: "submit",
      classes:
        `w-3/4 md:w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm 
                text-sm font-medium text-white bg-button hover:text-black hover:bg-[#f2e4d3] transition ease-in duration-300 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
    },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Activar el spinner

    try {

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });


      if (error || !data) {
        throw new Error("Error al obtener la contraseña almacenada.");
      }

      if (data) {
        // localStorage.setItem('auth_token', data.session.access_token);
        setAuth(true);
      } else {
        setError("Credenciales inválidas");
        setPassword("");
      }
    } catch (err: any) {
      console.error(err.message);
      setError("Ocurrió un error durante la autenticación.");
    } finally {
      setLoading(false); // Desactivar el spinner
    }
  };

  if (auth) {
    return <AddFile />
  }


  return (

    <div class="pt-24 md:pt-48 px-4">
      <div class="max-w-screen-xl mx-auto">
        <div
          class="flex flex-col gap-8 items-center"
        >
          <div class="flex flex-col gap-4">
            <h2 class="text-slate-500 text-2xl md:text-4xl">Área de Administracion</h2>
          </div>
          <div class="bg-button p-4 md:p-8 rounded-xl w-full md:w-1/2">
            <div class="p-3 md:p-6 bg-white rounded-xl">
              <h2 class="text-2xl text-gray-900 mb-6">Accede con tus credenciales</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div class="flex flex-col gap-4">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    class="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email..."
                    value={email}
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

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <div class="flex place-content-center py-5">
                  {
                    BUTTON.map((btn) => (
                      <button type={btn.type}
                        class={`${btn.classes} ${loading && "opacity-50 cursor-not-allowed"}`}
                      >
                        {loading ? 
                          <UiSpinner /> : (
                          btn.text
                        )}                      </button>
                    ))
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

