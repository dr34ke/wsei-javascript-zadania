
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
//Zdanie 0
function checkArray(arr){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        var controle=true;
        for(var j=0; j<arr[i].length; j++){
            if(arr[i][j]%2!=0) controle=false;
        }
        newArr.push(controle);
    }
    return newArr;
}
checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ])
//zadanie 1
console.log(task1Array[3][2]);//Ewentualnie console.log(task1Array[2][1]); zależnie od interpretacji
console.log(task1Array[2].length);//Ewentualnie console.log(task1Array[1].length); zależnie od interpretacji
console.log(task1Array[4][2]);//Ewentualnie console.log(task1Array[3][1]); zależnie od interpretacji
//zadanie 2
for(var i=0; i<task2Array.length; i++){
    console.log(task2Array[i]);
}
for(var i=0; i<task2Array.length; i++){
    console.log(task2Array[i].length);
}
for(var i=0; i<task2Array.length; i++){
    for(var j=0; j<task2Array[i].length; j++){
        console.log(task2Array[i][j]);
    }
}
//zadanie 3
function print2DArray(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}
print2DArray(task2Array);
//zadanie 4
var arr=[[2,4,56,7],[2,4,67,8,8],[5,566,77,8]];
print2DArray(arr);
// Zadanie 5

function create2DArray(x,y){
    var arr=new Array(x);
    var counter =1;
    for(var i=0; i<x; i++){
        arr[i]=new Array(y);
        for(var j=0; j<y; j++){
            arr[i][j]=counter;
            counter++;
        }
    }
    return arr;
}
create2DArray(2,4);