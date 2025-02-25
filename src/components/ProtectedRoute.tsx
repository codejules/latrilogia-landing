import { useEffect, useState } from "preact/hooks";
import Spinner from "@/icons/Spinner";
import { supabase } from "../lib/supabaseClient";

export default function ProtectedRoute({ children }: { children: any }) {
  const [auth, setAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setAuth(!!data.session); // Si existe una sesión, el usuario está autenticado
    };
    checkSession();
  }, []);

  if (auth === null) {
    return <Spinner />; // Verificando sesión
  }

  return auth ? children : <p>No autorizado</p>; // Si no está autenticado, mostramos "No autorizado"
}
