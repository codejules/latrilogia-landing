import { useState, useEffect } from "preact/hooks";
import AuthForm from "./AuthForm";
import AddFile from "./AddFile";
import { supabase } from "../lib/supabaseClient";
import ProtectedRoute from "./ProtectedRoute";

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        // Verificar si el usuario está logueado al cargar la página
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) {
                setIsAuthenticated(true); // El usuario está autenticado
            } else {
                setIsAuthenticated(false); // No está autenticado
            }
        };

        checkSession(); // Llamar a la función para verificar la sesión
    }, []);

    if (isAuthenticated === null) {
        return <p>Cargando...</p>; // Esperar mientras se verifica la sesión
    }

    return (
        <div class="pt-20 md:pt-40 px-2">
            {isAuthenticated ? (
                <ProtectedRoute>
                    <AddFile />
                </ProtectedRoute>
            ) : (
                <AuthForm onAuthSuccess={() => setIsAuthenticated(true)} />
            )}
        </div>
    );
}
