document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    //zadanie 1
    var title= document.querySelector(".title");
    getDataAnimation(title);
    function getDataAnimation(element){
        var newTitle=element.getAttribute("data-animation");
        console.log(newTitle);
    }
    //zadanie 2
    var id1=document.querySelector("#home");
    var id2=document.getElementById("home");
    console.log(id1, id2);
    var liDataDirection= document.querySelector("li[data-direction]");
    console.log(liDataDirection);
    var block= document.querySelector(".block");
    console.log(block);
    //zadanie 3
    var navLi=document.querySelectorAll("nav li");
    console.log("Zadanie 2, 1:"+navLi.length);
    var pDiv=document.querySelectorAll("div p");
    console.log("Zadanie 2, 2:"+pDiv.length);
    var articleDiv=document.querySelectorAll("article div");
    console.log("Zadanie 2, 3:"+articleDiv.length);
    //zadanie 3
    var firstArticle=document.querySelector("article.first");
    console.log("Tyle jest h1 w article o klasie first: "+firstArticle.querySelectorAll("h1").length);
});
