document.addEventListener("DOMContentLoaded", function () {
    var buttons= document.querySelectorAll(".button");
    for(var i=0; i<buttons.length; i++)
    {
        buttons[i].addEventListener("click", function(){
            if(this.nextElementSibling.style.display=="none"){
               if(this.nextElementSibling!=null)
                    this.nextElementSibling.style.display="block"; 
            }
                
            else{
                if(this.nextElementSibling!=null)
                    this.nextElementSibling.style.display="none"
            }
                
        })
    }
});