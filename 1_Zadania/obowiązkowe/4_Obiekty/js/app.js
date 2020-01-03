//zadanie 0a
city={
    capital: "San Escobar",
    population: "12321",
    president: "Andrzej Duda",
    primeMinister:["Adam", "Mateusz", "Andrzej"],
}
console.log(city.capital, city.population, city.president, city. primeMinister);
// zadanie 0b
timeMachine={
    shape: "kolo",
    model: "jakis",
    run: function(date, place){
        console.log(date, place);
    }
}
console.log(timeMachine.shape, timeMachine.model);
timeMachine.run("2015", "kraków");


 //zadanie 1
 book={
    title: "Gotuj po studencku",
    author: "A.Duda",
    numberOfPages: 190
 }
console.log(book.title, book.author, book.numberOfPages);


//zadanie 2
person={
    name: "Adam",
    age: 25,
    sayHello: function(){
        console.log("hello");
    }
}
console.log(person.name, person.age);
person.sayHello();


//zadanie 3
recipe={
    title: "jajecznica",
    servings: 5,
    
}
recipe.ingredients=["jajka", "masło", "sól"];
console.log(recipe.title, recipe.servings, recipe.ingredients);


//6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;
console.log(spoon.isExist);