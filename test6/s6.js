let count=0;
const button=document.getElementById("btn");
const cnt=document.getElementById("cnt");
button.addEventListener("click",()=>{
    count++;
    cnt.textContent=count;
})