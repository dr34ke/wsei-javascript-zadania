var parent=document.querySelectorAll(".parent");
for(var i=0; i<parent.length; i++)
{
    parent[i].onmouseover=function showChild(){
        this.firstElementChild.style.display="block";
    };
   /* parent[i].onmouseleave=function hideChild(){
        this.firstElementChild.style.display="none";
    };*/
    parent[i].addEventListener("mouseleave", function() {
        hideChildrenElement(this.firstElementChild)
    })
}
function hideChildrenElement(child)
{
    child.style.display="none";
}




