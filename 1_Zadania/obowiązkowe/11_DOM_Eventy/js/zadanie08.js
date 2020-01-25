document.addEventListener("DOMContentLoaded", (event)=>{
    var span=document.querySelectorAll("span");
    span[0].textContent=window.outerWidth;
    span[1].textContent=window.outerHeight;
    window.addEventListener("resize", (event)=>{
        span[0].textContent=window.outerWidth;
        span[1].textContent=window.outerHeight;
    })
    
})