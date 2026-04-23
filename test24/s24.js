const box= document.getElementById("box");
box.addEventListener("mouseenter", () => {
    box.style.width = "300px";
    box.style.height = "300px";
});
box.addEventListener("mouseleave", () => {
    box.style.width = "200px";
    box.style.height = "200px";
});