/* import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export function initSlider() {
    const sliderElement = document.querySelector(".splide");
    if (sliderElement && !sliderElement.splide) {
        new Splide(sliderElement, {
            type: "loop",
            drag: "free",
            gap: ".5rem",
            focus: "center",
            perPage: 3,
            width: "100%",
            arrows: false,
            autoScroll: {
                speed: 0.5,
            },
            breakpoints: {
                768: { perPage: 2 },
                425: { perPage: 1 },
                375: { perPage: 1 },
            },
        }).mount({ AutoScroll });
    }
}
 */