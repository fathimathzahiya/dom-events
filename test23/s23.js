const box = document.getElementById("box");
const para = document.getElementById("text");
box.addEventListener("mouseenter", () => {
     para.textContent = "Mouse entered the box";
});
box.addEventListener("mouseleave", () => {
        para.textContent = "";
});