document.addEventListener("DOMContentLoaded", function () {
    var list=document.querySelector("ul");
    var btn = document.querySelector(".button");
    var counter=0;
    btn.addEventListener("click", function(){
        var li = document.createElement("li");
        var text= document.createTextNode("Element "+(counter+1)+" - w chwili dodania było "+counter+" elementów");
        counter+=1;
        li.appendChild(text);
        list.appendChild(li);
    })

});