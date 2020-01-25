document.addEventListener("DOMContentLoaded", function () {
    var first=document.querySelector(".first").firstElementChild.children[2];
    var second=document.querySelector("#second").parentElement.children[3];
    var third=document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.firstElementChild.children[Math.floor(document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.firstElementChild.childElementCount/2)];
    var forth=document.querySelector("div .forth").parentElement.querySelector("article").querySelectorAll("p")[1];
    console.log(first, second, third, forth);
});