document.addEventListener("DOMContentLoaded", (event)=>{
    var btn = document.querySelector("#remove");
    btn.addEventListener("click", function(){
        btn.remove();
    })
})