import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Splide from "@splidejs/splide";

export function initSplide() {

    document.addEventListener("DOMContentLoaded", function () {
        const sliderElement = document.querySelector(".splide");
        if (sliderElement && !(sliderElement as any).splide) {
            new Splide(sliderElement as HTMLElement, {
                type: "loop",
                drag: "free",
                gap: ".5rem",
                focus: "center",
                perPage: 4,
                width: "100%",
                arrows: false,
                autoScroll: {
                    speed: 1,
                },
                breakpoints: {
                    768: { perPage: 2 },
                    425: { perPage: 1 },
                    375: { perPage: 1 },
                },
            }).mount({ AutoScroll });
        }
    });
}