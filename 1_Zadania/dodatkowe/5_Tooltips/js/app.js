/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function(){
    var tooltips=document.querySelectorAll(".tooltip");
    for(var i=0; i<tooltips.length; i++){
        tooltips[i].addEventListener("mouseover", function(){
            var node=document.createElement("span");
            node.classList.add("tooltipText");
            var text= document.createTextNode(this.dataset.text);
            node.appendChild(text);
            this.appendChild(node);
        })
        tooltips[i].addEventListener("mouseout", function(){
            var tooltipVal = document.querySelector(".tooltipText");
            if(tooltipVal!=null)
                tooltipVal.remove();
        })
    }
})