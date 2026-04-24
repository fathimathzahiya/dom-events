const secs = document.querySelectorAll(".sec");
secs.forEach(sec => {
    sec.addEventListener("mouseenter", () => {
        secs.forEach(s => 
            s.style.width = "80px"
        );
        sec.style.width = "150px";
    });
    sec.addEventListener("mouseleave", () => {
        secs.forEach(s => 
            s.style.width = "100px"
    ); 
});
    });