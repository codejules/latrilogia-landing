const cdnImage = import.meta.env.CDN_DOMAIN;

const plato1 = `${cdnImage}/assets/img/carta/restaurante-la-trilogia-plato1-875x1024.webp`;
const plato7 = `${cdnImage}/assets/img/carta/restaurante-la-trilogia-plato7-1024x982.webp`;
const plato6 = `${cdnImage}/assets/img/carta/restaurante-la-trilogia-plato6-1024x766.webp`;
const plato5 = `${cdnImage}/assets/img/carta/restaurante-la-trilogia-plato5-1024x766.webp`;
const plato4 = `${cdnImage}/assets/img/carta/restaurante-la-trilogia-plato4-1024x766.webp`;
const plato2 = `${cdnImage}/assets/img/carta/restaurante-la-trilogia-plato2-883x1024.webp`;
const plato3 = `${cdnImage}/assets/img/carta/restaurante-la-trilogia-plato3-1024x766.webp`;
const plato9 = `${cdnImage}/assets/img/carta/restaurante-la-trilogia-plato9-1024x766.webp`;
const exterior1 = `${cdnImage}/assets/img/carta/latriloga-exterior.webp`;
const exterior2 = `${cdnImage}/assets/img/carta/latriloga-exterior_2.webp`;

export type Image = {
    url: string;
    alt?: string;
    title?: string;
};

export const IMAGES: Image[] = [
    { url: plato1, alt: "Plato 1", title: "Plato 1 - Restaurante La Trilogía" },
    { url: plato7, alt: "Plato 7", title: "Plato 7 - Restaurante La Trilogía" },
    { url: plato6, alt: "Plato 6", title: "Plato 6 - Restaurante La Trilogía" },
    { url: plato5, alt: "Plato 5", title: "Plato 5 - Restaurante La Trilogía" },
    { url: plato4, alt: "Plato 4", title: "Plato 4 - Restaurante La Trilogía" },
    { url: plato2, alt: "Plato 2", title: "Plato 2 - Restaurante La Trilogía" },
    { url: plato3, alt: "Plato 3", title: "Plato 3 - Restaurante La Trilogía" },
    { url: plato9, alt: "Plato 9", title: "Plato 9 - Restaurante La Trilogía" },
    { url: exterior1, alt: "Vista exterior 1", title: "Vista Exterior - Restaurante La Trilogía" },
    { url: exterior2, alt: "Vista exterior 2", title: "Vista Exterior Alternativa - Restaurante La Trilogía" },
];
