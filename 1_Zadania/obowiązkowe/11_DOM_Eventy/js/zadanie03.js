document.addEventListener("DOMContentLoaded", (event)=>{
    var buttons=document.querySelectorAll("button");
    for(var i=0; i<buttons.length; i++)
    {
        buttons[i].addEventListener("click", function(){
            var counter=this.nextElementSibling.lastElementChild.textContent;
            counter++;
            this.nextElementSibling.lastElementChild.textContent=counter;
        });   
    }
    
})