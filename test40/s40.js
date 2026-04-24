const form=document.getElementById("myform");
const input=document.getElementById("input");
const list=document.getElementById("list");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let li=document.createElement("li");
    li.textContent=input.value; 
    li.addEventListener("click",()=>{
        li.remove();
    });
    li.addEventListener("mouseenter",()=>{
        li.style.backgroundColor="lightcoral";
    });
    li.addEventListener("mouseleave",()=>{
        li.style.backgroundColor="";
    });
    list.appendChild(li);
    input.value="";
});