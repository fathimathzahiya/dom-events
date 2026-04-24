const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.2)";
        card.querySelector(".hidden").style.display = "block";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.querySelector(".hidden").style.display = "none";
    });
});