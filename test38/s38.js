let count=0;
const display=document.getElementById("count");
const incbtn=document.getElementById("inc");
const rsetbtn=document.getElementById("rst");
incbtn.addEventListener("click",()=>{
    count++;
    display.textContent=count;
});
rsetbtn.addEventListener("click",()=>{
    count=0;
    display.textContent=count;
});
display.addEventListener("mouseenter",()=>{
    display.style.color="lightgreen";
});
display.addEventListener("mouseleave",()=>{
    display.style.color="";
}
);
