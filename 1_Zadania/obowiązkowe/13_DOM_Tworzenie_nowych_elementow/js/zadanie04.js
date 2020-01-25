document.addEventListener("DOMContentLoaded", (event)=>{
    var li = document.querySelectorAll("li");
    var btn = document.querySelector("#remove");
    btn.addEventListener("click", function(){
        li.forEach(function(li){
            li.remove();
        })
    })
})