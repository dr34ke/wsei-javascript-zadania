document.addEventListener("DOMContentLoaded", function () {
    var invoice=document.querySelector("#invoiceData");
    invoice.style.display="none";
    var checkBox=document.querySelector(".checkbox").firstElementChild.firstElementChild;
    checkBox.addEventListener("click", function(){
        if(this.checked==true)
            invoice.style.display="block";
        else
            invoice.style.display="none";

    })
})