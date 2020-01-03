// Zadanie 1
function countHello(number){
    var counter=1;
    var number = parseInt(number, 10);
    if(number >= 1 && number <=10){
        var interval=setInterval(function(){ 
            if(counter==number)clearInterval(interval);
            console.log("Hello"+counter);
            counter++;
        },100);
    }
}
countHello(10);