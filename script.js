document.addEventListener("DOMContentLoaded", function () {

    fetch('.../Header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
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
        })
        .catch(error => console.error('Eroare la încărcarea header-ului:', error));

    new Splide("#image-slider", {
        type: "loop",      // 🔄 Slide-urile circulă la nesfârșit
        perPage: 3,        // 📌 Arătăm 3 slide-uri în același timp
        perMove: 1,        // 🔄 Mutăm doar 1 slide la fiecare click
        gap: "10px",       // 📏 Spațiu între slide-uri
        focus: "center",   // 🔥 Slide-ul din mijloc este mereu evidențiat
        autoplay: true,    // ⏳ Slide-urile se mișcă automat
        interval: 3000,    // ⏱️ Fiecare slide stă 3 secunde
        speed: 1000,       // 🚀 Timp de tranziție între slide-uri
        arrows: true,      // ⏪⏩ Butoane pentru navigare
        pagination: true,  // 🔘 Paginare (bule jos)
    }).mount();
    
    // Footer-ul
    fetch('/Footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Eroare la încărcarea footer-ului:', error));
});
