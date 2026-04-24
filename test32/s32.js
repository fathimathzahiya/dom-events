const list = document.querySelectorAll("li");
list.forEach(item => {
    item.addEventListener("mouseenter", () => {
        list.forEach(i => {
            i.style.color = "";
            i.style.borderBottom = "";
        });
        item.style.color = "red";
        item.style.borderBottom = "2px solid red";
    });
});
