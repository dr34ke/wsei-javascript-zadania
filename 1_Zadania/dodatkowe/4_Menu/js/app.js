document.addEventListener("DOMContentLoaded", function(){
    var list=document.querySelector("div>ul");
    for(var i=0; i<list.children.length; i++){
        list.children[i].addEventListener("mouseover",function(){
            if(this.firstElementChild!=null)
                this.firstElementChild.style.display="block";
        })
        list.children[i].addEventListener("mouseout",function(){
            if(this.firstElementChild!=null)
                this.firstElementChild.style.display="none";
        })
    }
})