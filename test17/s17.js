const input = document.getElementById("input");
const warning= document.getElementById("warning");

input.addEventListener("input",()=>{
    if(input.value.length>10){
        warning.textContent="input should not exceed 10 characters";
        warning.style.color="red";
        // input.value=input.value.slice(0,10);
    }else{
        warning.textContent="";
    }
    });