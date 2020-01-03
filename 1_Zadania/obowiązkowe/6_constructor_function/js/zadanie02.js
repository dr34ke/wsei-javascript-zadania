function Calculator(){
    this.his=[]
}
Calculator.prototype.add= function(num1, num2){
    var resurlt=0;
    result=num1+num2;
    this.his.push('added '+num1+' to '+num2+' got '+result);
    return result;
}

Calculator.prototype.multiply= function(num1, num2){
    var resurlt=0;
    result=num1*num2;
    this.his.push('multiplied '+num1+' with '+num2+' got '+result);
    return result;
}
Calculator.prototype.substract= function(num1, num2){
    var resurlt=0;
    result=num1-num2;
    this.his.push('substracted '+num1+' from '+num2+' got '+result);
    return result;
}
Calculator.prototype.divide= function(num1, num2){
    var resurlt=0;
    result=num1/num2;
    this.his.push('dividet '+num1+' by '+num2+' got '+result);
    return result;
}
Calculator.prototype.printOperations= function(){
   console.table(this.his);
}
Calculator.prototype.clearoperations= function(){
    this.his=[];
}

 var a = new Calculator();
 a.add(1,2);
 a.multiply(2,4);
 a.divide(4,6);
 a.substract(4,5);
 a.printOperations();
 a.clearoperations();
 a.printOperations();