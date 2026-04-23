const boxes=document.querySelectorAll(".box");
boxes.forEach((box,index) => {
    box.addEventListener("mouseenter", () => {
        if(index===0){
            box.style.backgroundColor = "orange";
        } else if(index===1){
            box.style.backgroundColor = "purple";
        } else {
            box.style.backgroundColor = "green";
        }
    });
    box.addEventListener("mouseleave", () => {
        box.style.backgroundColor = "";
    });
});