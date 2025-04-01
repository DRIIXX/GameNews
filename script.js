document.addEventListener("DOMContentLoaded", function () {
    // Selectăm butonul burger și meniul de navigare
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks){
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("nav-active");
            //Accesibilitatea: actualizam aria-expand
            const expanded = navLinks.classList.contains("nav-active");
            burger.setAttribute("aria-expanded", expanded);
        });

        // Inchiderea meniului cand utilizatorul da click in afara acestuia
        document.addEventListener("click", (event) => {
            if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
                navLinks.classList.remove("nav-active");
                burger.setAttribute("aria-expanded", "false");
            }
        });
    } else {
        console.error("Eroare: Butonul burger sau meniul de navigare nu au fost gasite");
    }


    console.log("Verificăm dacă Swiper este definit:", typeof Swiper !== "undefined");
    // initializam sliderul doar daca biblioteca Swiper este disponibila
    if (typeof Swiper !== "undefined"){
        var Swiper = new Swiper(".swiper-container", {
            slidesPerWiew: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prew",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                deplay: 3000,
                disableOnInteraction: false,
            },
        });
    } else {
        console.error("Erroare: Swiper nu este definit. Verifica daca scriptul Swiper.js este incarcat corect.")
    }
});