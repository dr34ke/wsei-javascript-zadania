document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //zadanie 0
    function getDatasInfo(elements){
        var tab=[];
        for(var i=0; i<elements.length; i++){
            tab.push(elements[i].dataset.color);
        }
        console.log(tab);
    }
    getDatasInfo(links);
    //zadanie 1
    console.log("homeElement: className "+homeElement.classList+" tagName "+homeElement.tagName);
    for(var i=0; i<childElements.length; i++)
    {
        console.log("childElements"+i+": className "+childElements[i].className+" tagName "+childElements[i].tagName);
    }
    console.log("ban: className "+banner.classList+" tagName "+banner.tagName);
    for(var i=0; i<blocks.length; i++)
    {
        console.log("blocks"+i+": className "+blocks[i].className+" tagName "+blocks[i].tagName);
    }
    
    for(var i=0; i<links.length; i++)
    {
        console.log("links"+i+": className "+links[i].className+" tagName "+links[i].tagName);
    }
    //zadanie 2
    for(var i=0; i<blocks.length; i++)
    {
        console.log("blocks"+i+": innerHtml "+blocks[i].innerHTML+" outterHtml "+blocks[i].outerHTML);
        //innerhtml to tylko zawartość danego elementu a outter jest włącznie z nim
        blocks[i].innerHTML="Nowa wartość diva o klasie blocks";
    }
    //zadanie 3
    var mainFooter=document.querySelector("#mainFooter");
    console.log("footer id: "+getId(mainFooter));
    function getId(element){
        return element.id;
    }
    //zadanie 4 
    function getTags(element){
        var tab=[];
        for(var i=0; i<element.length;i++){
            tab.push(element[i].tagName);
        }
        return tab;
    }
    console.log("childElements tag names: "+getTags(childElements));
    //zadanie 5
    function getClassInfo(element){
        var tab=[];
        for(var i=0; i<element.classList.length; i++)
        {
            tab.push(element.classList[i]);
        }
        return tab;
    }
    console.log(getClassInfo(banner));
    //zadanie 6
    var liNav=document.querySelectorAll("nav li");
    function setDataDirection(elements){
        for(var i=0; i<elements.length; i++){
            elements[i].setAttribute("data-direction","top");
        }  
    }
    setDataDirection(liNav);
});
