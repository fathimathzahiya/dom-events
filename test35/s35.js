const btns=document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.background="blue";
        btn.style.transform="scale(1.2)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.background="";
        btn.style.transform="scale(1)";
    });
});