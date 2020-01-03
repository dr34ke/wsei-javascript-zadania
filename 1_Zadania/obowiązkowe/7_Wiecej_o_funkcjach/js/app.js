/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//definicja funkcji 1
function jeden() {

    //definicja zmienna 1 i przypisanie jej wartości 1
    var zmienna1 = 1;

    //definicja funkcji 2
    function dwa() {

        //wypisanie zmiennej z funkcji nadrzędnej
        console.log(zmienna1);

        //definicja zmienna2
        var zmienna2 = 3;
    }

    //wywołanie funkcji
    dwa();

    //próba wypisania niedostępnej zmiennej zdefiniowanej w funkcji podrzędnej
    console.log(zmienna2)
}

//wywołanie funkcji 1
jeden()