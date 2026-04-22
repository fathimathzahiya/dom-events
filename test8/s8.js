let buttons=document.getElementsByClassName("del");
for(let i=0;i<buttons.length;i++)
    buttons[i].addEventListener("click",function(){
    this.parentElement.remove();
    })