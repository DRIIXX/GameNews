document.addEventListener("DOMContentLoaded", function () {

    new Splide("#image-slider", {
        type: "loop",
        perPage: 3,
        perMove: 1,
        focus: "center",
        gap: "0px",  // Mai mult spațiu între slide-uri
        padding: "0px",
        width: "90%",
        height: "400px",
        autoplay: true,
        interval: 3000,  // Face tranziția mai lentă
        speed: 1500,  // Animație mai lină
        easing: "ease-in-out",  // Efect mai natural
        pauseOnHover: false,
        arrows: true,
        pagination: true,
        breakpoints: {
            768: {
                perPage: 1,
                width: "90%",
                height: "300px",
            },
        }
    }).mount();

    // Selectăm butonul burger și meniul de navigare
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("nav-active");
            const expanded = navLinks.classList.contains("nav-active");
            burger.setAttribute("aria-expanded", expanded);
        });

        document.addEventListener("click", (event) => {
            if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
                navLinks.classList.remove("nav-active");
                burger.setAttribute("aria-expanded", "false");
            }
        });
    } else {
        console.error("Eroare: Butonul burger sau meniul de navigare nu au fost găsite");
    }
});
