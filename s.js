const button=document.getElementById("btn");
const input=document.getElementById("input");
const output=document.getElementById("head");

button.addEventListener("click",()=>{
output.innerHTML=input.value;
})