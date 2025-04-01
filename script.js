document.addEventListener("DOMContentLoaded", function () {
    console.log("Verificăm dacă Swiper este definit:", typeof Swiper !== "undefined");

    if (typeof Swiper !== "undefined") {
        const swiper = new Swiper(".swiper-container", {
            slidesPerView: 3, 
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            slidesToClickedSlide: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 3000, 
                disableOnInteraction: false,
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            on: {
                slideChange: function () {
                    console.log("Slide schimbat");
                }
            }
        });
    } else {
        console.error("Eroare: Swiper nu este definit. Verifica dacă scriptul Swiper.js este încărcat corect.");
    }

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
