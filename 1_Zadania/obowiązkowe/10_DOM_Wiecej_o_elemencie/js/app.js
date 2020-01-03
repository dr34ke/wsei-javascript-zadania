document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //zadanie 0 
    var ex5li=document.querySelectorAll(".ex5 li");
    for(var i=0; i<ex5li.length;i+=2){
        ex5li[i].style.background="green";
    }
    ex5li[4].classList.add("big");
    for(var i=0; i<ex5li.length;i+=3){
        ex5li[i].style.textDecoration="underline";
    }
    //zadanie 1
    var ex1=document.querySelectorAll(".ex1")[1];
    ex1.querySelector(".chrome").style.width="100px";
    ex1.querySelector(".chrome").nextElementSibling.innerText="Chrome";
    ex1.querySelector(".edge").style.backgroundImage='url("./assets/img/edge.png")';
    ex1.querySelector(".edge").nextElementSibling.setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");
    ex1.querySelector(".firefox").style.backgroundImage='url("./assets/img/firefox.png")';
    ex1.querySelector(".firefox").nextElementSibling.innerText="Mozilla Firefox";
    ex1.querySelector(".firefox").nextElementSibling.setAttribute("href", "https://www.mozilla.org/pl/firefox/new/")
    console.log(ex1.querySelector(".chrome").style);
    //ponieważ nie może edytować kodu źródłowego
    //zadanie 2
    var ex2=document.querySelectorAll(".ex2 span");
    ex2[0].innerHTML+="Dariusz Kubacki";
    ex2[1].innerHTML+="Czarny";
    ex2[2].innerHTML+="Leczo";
    //zadanie 3
    var ul=document.querySelector(".ex3 ul");
    ul.classList.add("menu");
    var ulLi=ul.querySelectorAll("li");
    for(var i=0; i<ulLi.length;i++){
        ulLi[i].classList.add("menuElement");
        ulLi[i].classList.remove("error");
    }
    //zadanie 4
    var ex4=document.querySelectorAll(".ex4 li");
    for(var i=0; i<ex4.length;i++){
        ex4[i].setAttribute("data-id",i+1);
    }
});