document.addEventListener("DOMContentLoaded", function () {
    var deleteBtn=document.querySelectorAll(".deleteBtn");
    for(var i=0; i<deleteBtn.length; i++)
    {
        deleteBtn[i].addEventListener("click", function(){
            this.parentElement.parentElement.parentElement.deleteRow(this.parentElement.parentElement.rowIndex);
        })
    }

});