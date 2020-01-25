document.addEventListener("DOMContentLoaded", function () {
    var orderId=document.querySelector("#orderId");
    var item = document.querySelector("#item");
    var quantity = document.querySelector("#quantity");
    var table=document.querySelector("table");
    var btn=document.querySelector("#addBtn")
    btn.addEventListener("click", function(){
        var row= table.insertRow(-1);
        var cell1= row.insertCell(0).appendChild(document.createTextNode(orderId.value));
        var cell2= row.insertCell(1).appendChild(document.createTextNode(item.value));;
        var cell3= row.insertCell(2).appendChild(document.createTextNode(quantity.value));
    })
});