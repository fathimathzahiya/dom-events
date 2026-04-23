const box = document.getElementById("box");
box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "yellow";
    box.style.color = "blue";
    box.style.border = "4px solid red";
    box.style.fontSize = "20px";
});
box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "";
    box.style.color = "";
    box.style.border = "2px solid black";
    box.style.fontSize = "";
});