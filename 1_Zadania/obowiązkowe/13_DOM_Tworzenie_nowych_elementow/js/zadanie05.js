document.addEventListener("DOMContentLoaded", (event)=>{
    var ul = document.querySelectorAll("ul");
    console.log(ul);
    var li1=ul[0].querySelectorAll("li");
    var li2=ul[1].querySelectorAll("li");
    li1.forEach(function(li1){
        var btn=li1.querySelectorAll(".moveBtn");
        btn.forEach(function(btn){
            btn.addEventListener("click",function(){
                if(btn.parentElement.parentElement==ul[0]){
                    var element=document.createElement("LI").appendChild(btn.parentElement);
                    ul[1].appendChild(element);
                }
                else {
                    var element=document.createElement("LI").appendChild(btn.parentElement);
                    ul[0].appendChild(element);
                }
            })
        })
    })
    li2.forEach(function(li2){
        var btn=li2.querySelectorAll(".moveBtn");
        btn.forEach(function(btn){
            btn.addEventListener("click",function(){
                if(btn.parentElement.parentElement==ul[1]){
                    var element=document.createElement("LI").appendChild(btn.parentElement);
                    ul[0].appendChild(element);
                }
                else {
                    var element=document.createElement("LI").appendChild(btn.parentElement);
                    ul[1].appendChild(element);
                }
                    
                btn.parentElement;
            })
        })
    })
})