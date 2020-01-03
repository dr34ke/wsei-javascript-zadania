
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Definicja funkcji sortujacej
function sortArray() {

    //definicja tablicy 1 wymiarowej
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywołanie funkcji sortujacej
    points.sort(function (a, b) {
        //porządek rosnący 
        return a - b;
    });

    //zwrócenie posortowanej tablicy
    return points;
}

//wywołanie funkcji
sortArray();
