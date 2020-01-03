hello();
function hello(){
    console.log("cześć");
}
hello();//funkcja wywołana 2 krotnie
welcome();
var welcome=function(){
    console.log("witaj");
}
welcome();//za pierwszym wywołaniem funkcja jest niewidoczna, dopiero po zdefiniowaniu można z niej skorzystać