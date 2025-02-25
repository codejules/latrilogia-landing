import { useState, useRef } from 'preact/hooks';
import { createClient } from "@supabase/supabase-js";
import UiSpinner from '@/icons/Spinner';

// Inicializa Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function FileUpload() {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Validar el archivo antes de la subida
    const validateFile = (file: File) => {
        const allowedExtensions = ['pdf']; // Extensiones permitidas
        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        
        // Validación de tipo de archivo
        if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
            setErrorMessage('Solo se permiten archivos PDF');
            return false;
        }

        // Validación del tamaño de archivo (máximo 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB en bytes
        if (file.size > maxSize) {
            setErrorMessage('El archivo no puede ser mayor de 5MB');
            return false;
        }

        setErrorMessage(null); // Limpiar mensaje de error si el archivo es válido
        return true;
    };

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const file = fileInputRef.current?.files?.[0];

        if (!file || !validateFile(file)) {
            return; // Si el archivo no es válido, no continuar
        }

        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                alert('Inicia sesión para subir archivos');
                return;
            }

            setIsUploading(true);
            setUploadSuccess(false); // Reset upload success status

            const fileName = `${user.id}_${Date.now()}_${file.name}`;

            const { error } = await supabase.storage
                .from('uploadFiles')
                .upload(fileName, file);

            if (error) {
                throw error;
            }

            setUploadSuccess(true); // Set upload success to true
            setFileName(null); // Reset file name after upload

            // Esperar 3 segundos antes de restablecer el estado
            setTimeout(() => {
                setUploadSuccess(false);
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
            alert('Error al subir el archivo');
        } finally {
            setIsUploading(false);
        }
    };

    const handleFileChange = () => {
        const file = fileInputRef.current?.files?.[0];
        if (file && validateFile(file)) {
            setFileName(file.name);
        } else {
            setFileName(null); // Limpiar el nombre si el archivo no es válido
        }
    };

    return (
        <div class="max-w-2xl mx-auto p-8 pt-20 md:pt-40">
            <div class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-900">Subir archivo</h2>
                <form onSubmit={handleSubmit} class="space-y-4">

                    <div class="flex items-center justify-center w-full">
                        <label htmlFor="file" for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Solo archivos PDF (máximo 5MB)</p>
                            </div>
                            <input
                                onChange={handleFileChange}
                                ref={fileInputRef} id="dropzone-file" type="file" class="hidden" accept=".pdf" />
                        </label>
                    </div>

                    {fileName && (
                        <div class="mt-2 text-sm text-gray-700">
                            <p>Archivo seleccionado: <span class="font-semibold">{fileName}</span></p>
                        </div>
                    )}

                    {errorMessage && (
                        <div class="mt-2 text-sm text-red-500">
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isUploading || uploadSuccess}
                        class={`${uploadSuccess && "opacity-50 cursor-not-allowed"} w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50`}
                    >
                        {isUploading ? <><UiSpinner /> Subiendo archivo...</>
                            : uploadSuccess ? (
                                '✅ Archivo subido correctamente'
                            ) : 'Subir archivo'}
                    </button>
                </form>
            </div>
        </div>
    );
}
