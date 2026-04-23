const card = document.getElementById("card");
const detail = document.getElementById("detail");
card.addEventListener("mouseenter", () => {
    detail.style.display = "block";
});
detail.addEventListener("mouseleave", () => {
    detail.style.display = "none";
});