// Selectăm butonul burger și meniul de navigare
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

// Adăugăm un event listener pentru click pe burger
burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active"); // Adaugă/elimină clasa care afișează meniul
});