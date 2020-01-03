//Zadanie 0
function distFromAverage(arr)
{
    var sum=0;
    for(var i=0; i<arr.length; i++)
    {
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    var newarr=[];
    for(var i=0; i<arr.length; i++)
    {
        newarr.push(arr[i]-avg);
    }
    return newarr;
}
distFromAverage([1,2,3]);
//Zadanie 1
var fruits= ["apple", "banana", "orange", "pear"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
for(var i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}
//Zadanie 3
function printArr(arr){
    for(var i=0; i<arr.length; i++)
    {
        console.log(arr[i]);
    }
}
printArr([1,2,4,5,7]);
//Zadanie 4
function multiply(array)
{
    var multiply=1;
    for(var i=0; i<array.length; i++)
    {
        multiply*=array[i];
    }
    return multiply;
}
multiply([1,2,3,4,5,6,7]);
//Zadanie 5
function getEvenAvarage(array)
{
    var sum=0;
    var counter=0;
    for(var i=0; i<array.length; i++)
    {
        if(array[i]%2==0){
            sum+=array[i];
            counter++;
        }
    }
    var avg=null;
    if(counter!=0)
        avg=sum/counter;
    return avg;
}
getEvenAvarage([1,2,3,4,5,6,7])
//Zadanie 6
function sortArray(arr){
    return arr.sort(function(a, b){return a-b});
}
sortArray([145,11,3,64,4,6,10])

//Zadanie 7
function addArrays(arr1,arr2){
    if(arr1.length>arr2.length)
        var length=arr1.length;
    else
        var length=arr2.length;
    var newArr=[];
    for(var i=0; i<length; i++){
        if(i>=arr1.length)
            arr1[i]=0;
        if(i>=arr2.length)
            arr2[i]=0;
        newArr.push(arr1[i]+arr2[i]);
    }
    return newArr;
}
addArrays([4,0,1,3,4], [1,9,6,7,8,17])