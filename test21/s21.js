const box = document.getElementById("box");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "blue";
    box.innerText = "Mouse inside";
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "gray";
    box.innerText = "Hover me";
});