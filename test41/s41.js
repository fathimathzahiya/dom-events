const input=document.getElementById("input");
const live=document.getElementById("live");
const form=document.getElementById("form");
let list=document.getElementById("dataList");
const cdisplay=document.getElementById("count");
let count=0;    
input.addEventListener("input",()=>{
    live.textContent=input.value;
});
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let li=document.createElement("li");
    li.textContent=input.value;
    li.addEventListener("mouseenter",()=>{
        li.style.backgroundColor="lightcoral";
    }
    );
    li.addEventListener("mouseleave",()=>{
        li.style.backgroundColor="";
    });
    list.appendChild(li);
    count++;
    cdisplay.textContent=count;
    input.value="";
    live.textContent="";
});