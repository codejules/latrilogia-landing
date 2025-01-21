import plato1 from '@/assets/img/carta/restaurante-la-trilogia-plato1-875x1024.jpg';
import plato7 from '@/assets/img/carta/restaurante-la-trilogia-plato7-1024x982.jpg';
import plato6 from '@/assets/img/carta/restaurante-la-trilogia-plato6-1024x766.jpg';
import plato5 from '@/assets/img/carta/restaurante-la-trilogia-plato5-1024x766.jpg';
import plato4 from '@/assets/img/carta/restaurante-la-trilogia-plato4-1024x766.jpg';
import plato2 from '@/assets/img/carta/restaurante-la-trilogia-plato2-883x1024.jpg';
import plato3 from '@/assets/img/carta/restaurante-la-trilogia-plato3-1024x766.jpg';
import plato9 from '@/assets/img/carta/restaurante-la-trilogia-plato9-1024x766.jpg';
import exterior1 from '@/assets/img/carta/latriloga-exterior.jpg';
import exterior2 from '@/assets/img/carta/latriloga-exterior_2.jpg';

export type Image = {
    url: string;
    alt?: string;
    title?: string;
};

export const IMAGES: Image[] = [
    { url: plato1.src, alt: "Plato 1", title: "Plato 1 - Restaurante La Trilogía" },
    { url: plato7.src, alt: "Plato 7", title: "Plato 7 - Restaurante La Trilogía" },
    { url: plato6.src, alt: "Plato 6", title: "Plato 6 - Restaurante La Trilogía" },
    { url: plato5.src, alt: "Plato 5", title: "Plato 5 - Restaurante La Trilogía" },
    { url: plato4.src, alt: "Plato 4", title: "Plato 4 - Restaurante La Trilogía" },
    { url: plato2.src, alt: "Plato 2", title: "Plato 2 - Restaurante La Trilogía" },
    { url: plato3.src, alt: "Plato 3", title: "Plato 3 - Restaurante La Trilogía" },
    { url: plato9.src, alt: "Plato 9", title: "Plato 9 - Restaurante La Trilogía" },
    { url: exterior1.src, alt: "Vista exterior 1", title: "Vista Exterior - Restaurante La Trilogía" },
    { url: exterior2.src, alt: "Vista exterior 2", title: "Vista Exterior Alternativa - Restaurante La Trilogía" },
];
