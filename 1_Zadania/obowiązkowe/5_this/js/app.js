
//Zadanie 0
var car={
    brand: "audi",
    color: "pink",
    numberOfKilometers: 0,
    printCarInfo: function(){
        return this.brand+this.color,+this.numberOfKilometers;
    },
    drive: function(km){
        this.numberOfKilometers+=km;
        return this.color+this.brand+": "+this.numberOfKilometers;
    }
}
//zadanie 1
car.overview= ["2017", "2018", "2019"];
car.overviewAdd= function(data){
    this.overview.push(data);
}
car.overviewShow= function(){
    for(var i=0; i<this.overview.length; i++)
    {
        console.log(this.overview[i]);
    }
}



car.printCarInfo();
car.drive(50);
console.log(car.overview);
car.overviewADD("2020");
console.log(car.overview);


//zadanie 3
var stairs={
    step:0,
    up: function(){
        this.step+=1;
    },
    down: function(){
        this.step-=1;
    },
    printStep: function(){
        console.log(this.step);
    }
}
stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();