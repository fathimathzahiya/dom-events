const input=document.getElementById("input");
const output=document.getElementById("output");
const form=document.getElementById("form");
const list=document.getElementById("list");
input.addEventListener("input",()=>{
    output.textContent=input.value;
});
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let li=document.createElement("li");
    li.textContent=input.value;
    li.addEventListener("mouseenter",()=>{
        li.style.color="lightcoral";
        li.style.fontWeight="bold";

    });
    li.addEventListener("mouseleave",()=>{
        li.style.color="";
        li.style.fontWeight="";
    });
    list.appendChild(li);
    input.value="";
    output.textContent="";
});