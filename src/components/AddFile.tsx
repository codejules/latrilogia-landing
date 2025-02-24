import { useState } from 'preact/hooks';
import { createClient } from '@supabase/supabase-js';

// Configura tu cliente de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const token = '30cca6b1a2e8433fb1aad26479871ecb';
const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    },
});


const App = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const handleFileChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files) {
            setFile(target.files[0]);
        }
    };

    const fileName = `${Date.now()}-${file?.name}`;

    const uploadFile = async () => {
        if (file) {
            const { data, error } = await supabase
                .storage
                .from('uploadFiles')
                .upload(`test/${fileName}`, file, {
                    cacheControl: '3600',
                    upsert: false,
                });

            if (error) {
                setUploadStatus(`Error uploading file: ${error.message}`);
                console.error(error); // Muestra el error en la consola
            } else {
                setUploadStatus(`File uploaded successfully: ${data}`);
                console.log("Archivo subido:", data); // Muestra el archivo subido
            }
        }
    };

    return (
        <div class="pt-60">
            <h1>Upload PDF to Supabase</h1>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={uploadFile}>Upload</button>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default App;
