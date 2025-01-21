export type Fields = {
    type?: "text" | "email" | "password" | "tel";
    name: string;
    placeholder: string;
    required: boolean;
    validationMessage: string;
    feedbackMessage?: string;
    isTextarea?: boolean;
};

export const FIELDS: Fields[] = [
    {
        type: "text",
        name: "name",
        placeholder: "Nombre",
        required: true,
        validationMessage: "Ingresa tu nombre",
    },
    {
        type: "email",
        name: "email",
        placeholder: "Email",
        required: true,
        validationMessage: "Ingresa un email válido",
        feedbackMessage: "Ingresa tu email",
    },
    {
        type: "text",
        name: "subject",
        placeholder: "Asunto",
        required: false,
        validationMessage: "Ingresa el asunto",
    },
    {
        name: "message",
        placeholder: "Mensaje",
        required: true,
        validationMessage: "Ingresa tu mensaje",
        isTextarea: true,
    },
];