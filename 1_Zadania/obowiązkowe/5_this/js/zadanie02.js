var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function(){
        var summary=this.a+this.b;
        return summary;
    },
    multiply: function(){
        var summary=this.a*this.b;
        return summary;
    },

};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());
