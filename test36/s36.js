const eles=document.querySelectorAll(".ele");
eles.forEach((ele,index)=>{    ele.addEventListener("mouseenter",()=>{
        if(index%2==0){
            ele.style.backgroundColor="pink ";
        }else{   
            ele.style.backgroundColor="orange";
        }
    });
    ele.addEventListener("mouseleave",()=>{
        ele.style.backgroundColor="white";
    });
});      