export function menuToggle() {
    const toggleButton = document.querySelector(
      '[data-collapse-toggle="navbar-default"]'
    ) as HTMLButtonElement | null;
    const navbar = document.getElementById("navbar-default");
  
    if (toggleButton && navbar) {
      // Clic en botón toggle
      toggleButton.addEventListener("click", () => {
        const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
        toggleButton.setAttribute("aria-expanded", (!isExpanded).toString());
        navbar.classList.toggle("hidden");
      });
  
      // Clic en enlaces
      navbar.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
        link.addEventListener("click", () => {
          toggleButton.setAttribute("aria-expanded", "false");
          navbar.classList.add("hidden");
        });
      });
    }
  }
  