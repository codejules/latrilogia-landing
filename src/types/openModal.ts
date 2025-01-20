declare global {
    interface Window {
        openModal: (src: string) => void;
        closeModal: () => void;
    }
}

export function openModal(src: string): void {
    const modal = document.getElementById("image-modal") as HTMLElement | null;
    const modalImage = document.getElementById("modal-image") as HTMLImageElement | null;

    if (modalImage) {
        modalImage.src = src;
    }

    if (modal) {
        modal.classList.remove("hidden");
    }
}

export function closeModal(): void {
    const modal = document.getElementById("image-modal") as HTMLElement | null;

    if (modal) {
        modal.classList.add("hidden");
    }
}

window.openModal = openModal;
window.closeModal = closeModal;
