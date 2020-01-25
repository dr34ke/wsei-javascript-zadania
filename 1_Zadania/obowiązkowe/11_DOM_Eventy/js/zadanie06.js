document.addEventListener("DOMContentLoaded", (event)=>{
    var div=document.querySelector("div");
    var span=document.querySelectorAll("span");
    div.addEventListener("mousemove", function(){
        span[0].textContent=window.event.clientX;
        span[1].textContent=window.event.clientY;
        span[3].textContent=window.event.clientY-div.offsetTop;
        span[2].textContent=window.event.clientX-div.offsetLeft;
    });   

    
})