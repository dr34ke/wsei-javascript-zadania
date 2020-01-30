document.addEventListener("DOMContentLoaded", function(){
    var select=document.querySelector("select");
    var img= document.querySelectorAll("img")
    for(var i=0; i<img.length; i++)
    {
        img[i].style.display="none";
    }
    select.addEventListener("click", function(){
        var img= document.querySelectorAll("img")
        for(var i=0; i<img.length; i++)
        {
            img[i].style.display="none";
        }
        if(this.value=="Windows")
            document.querySelector("[alt='Windows']").style.display="inline";
        if(this.value=="Ubuntu")
            document.querySelector("[alt='Ubuntu']").style.display="inline";
        if(this.value=="Os X")
            document.querySelector("[alt='Apple']").style.display="inline";
    })
})