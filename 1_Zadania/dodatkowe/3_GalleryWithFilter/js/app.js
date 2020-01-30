document.addEventListener("DOMContentLoaded", function(){
    var elements = document.querySelectorAll("img");
    var show = document.querySelector("#showButton");
    var hide = document.querySelector("#hideButton");
    var input = document.querySelector("#tagInput");

    show.addEventListener("click",function(){
        for(var i=0; i<elements.length; i++){
            if(!elements[i].dataset.tag.includes(input.value))
                elements[i].classList.add("invisible");
            else if(input.value=="")
                elements[i].classList.remove("invisible");
            else
                elements[i].classList.remove("invisible");
        }
    })
    hide.addEventListener("click",function(){
        for(var i=0; i<elements.length; i++){
            if(elements[i].dataset.tag.includes(input.value))
                elements[i].classList.add("invisible");
            else if(input.value=="")
                elements[i].classList.add("invisible");
            else
                elements[i].classList.remove("invisible");
        }
    })
})