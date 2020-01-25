document.addEventListener("DOMContentLoaded", function () {
    var divs= document.querySelectorAll("div");
    for(var i=0; i<divs.length; i++)
    {
        divs[i].addEventListener("mouseover", function(){
            for(var i=1; i<this.firstElementChild.children.length-1;i++)
            {
                this.firstElementChild.children[i].style.backgroundColor="green";
            }
            this.firstElementChild.firstElementChild.style.backgroundColor="red";
            this.firstElementChild.lastElementChild.style.backgroundColor="blue";
        })
    }
});