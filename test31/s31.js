const boxes=document.querySelectorAll(".box");
boxes.forEach((box,index) => {
    box.addEventListener("mouseenter", () => {
        box.textContent=index;
        box.style.backgroundColor=index%2===0?"lightblue":"lightgreen";
    });
    box.addEventListener("mouseleave", () => {
        box.textContent="";
        box.style.backgroundColor="";
    });
});