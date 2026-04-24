const form=document.getElementById("myform");
const input=document.getElementById("inputtext");
const list=document.getElementById("list");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let li=document.createElement("li");
    li.textContent=input.value;
    li.addEventListener("mouseenter",()=>{
        li.style.backgroundColor="lightblue";
    });
    li.addEventListener("mouseleave",()=>{
        li.style.backgroundColor="";
    });
    list.appendChild(li);
    input.value="";
});
