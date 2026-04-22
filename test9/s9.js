const button=document.getElementById("toggle");
button.addEventListener("click",function(){
    this.textContent=this.textContent==="on"?"off":"on";
})