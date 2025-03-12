// Selectăm butonul burger și meniul de navigare
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

// Adăugăm un event listener pentru click pe burger
burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active"); // Adaugă/elimină clasa care afișează meniul
});

// sliderul pentru stiri
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
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
    });
});