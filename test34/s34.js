const names=document.querySelectorAll("li");
const details=document.getElementById("details");
names.forEach(name => {
    name.addEventListener("mouseenter", () => {
        details.textContent=name.dataset.info;
    });
    name.addEventListener("mouseleave", () => {
        details.textContent="";
    });
});