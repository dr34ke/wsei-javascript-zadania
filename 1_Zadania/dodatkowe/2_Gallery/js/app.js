document.addEventListener("DOMContentLoaded",function(){
    var elements=document.querySelector(".gallery").children;
    var body=document.querySelector("body");
    var counter=0;
    for(var i=0; i<elements.length; i++){
        elements[i].addEventListener("click", function(){
            if(counter==0){
                for(var i=0; i<elements.length; i++){
                    elements[i].style.display="none";
                }
                this.style="inline";
                counter=1;
            }
            else{
                for(var i=0; i<elements.length; i++){
                    elements[i].style.display="inline";
                }
                counter=0;
            }
            
        })
    }
})
//nie znalazłem zakomentowanego kodu dla tego zrobiłem okrojoną wersję