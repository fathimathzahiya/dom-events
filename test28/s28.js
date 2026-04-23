const items= document.querySelectorAll("#list li");
items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.backgroundColor = "lightblue";
    });
    item.addEventListener("mouseleave", () => {
        item.style.backgroundColor = "";
    });
    });