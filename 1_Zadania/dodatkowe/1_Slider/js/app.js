document.addEventListener("DOMContentLoaded", function(){
    var slider=document.querySelector(".slider");
    var next=document.querySelector("#nextPicture");
    var prev=document.querySelector("#prevPicture");
    var elements=document.querySelectorAll(".slider > li");
    var index=0;
    elements[0].classList.add("visible");
    next.addEventListener("click", function(){
        elements[index].classList.remove("visible");
        if(index<elements.length-1){
            index+=1;
            elements[index].classList.add("visible");
        }
        else{
            index=0;
            elements[index].classList.add("visible");
        }
    })
    prev.addEventListener("click", function(){
        elements[index].classList.remove("visible");
        if(index>0){
            index-=1;
            elements[index].classList.add("visible");
        }
        else{
            index=elements.length-1;
            elements[index].classList.add("visible");
        }
    })
})