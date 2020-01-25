document.addEventListener("DOMContentLoaded", (event)=>{
    var buttons=document.querySelectorAll("button");
    var counter=document.querySelector("span");
    console.log(counter);
    for(var i=0; i<buttons.length; i++)
    {
        buttons[i].addEventListener("click", function(){
            var counterValue=counter.textContent;
            counterValue++;
            counter.textContent=counterValue;
        });   
    }
    
})