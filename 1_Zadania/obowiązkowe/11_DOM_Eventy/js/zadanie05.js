document.addEventListener("DOMContentLoaded", (event)=>{
    var divs=document.querySelectorAll("div");
    for(var i=0; i<divs.length; i++)
    {
        divs[i].addEventListener("click", function(){
            this.style.backgroundColor ="#" + Math.floor(Math.random()*16777215).toString(16);
        });   
    }
    
})