document.addEventListener("DOMContentLoaded", function () {

    var form = document.querySelector('form');
    var errorMessage = document.querySelector('.error-message');
    var email = document.querySelector('#email');
    var name = document.querySelector('#name');
    var surname = document.querySelector('#surname');
    var pass1 = document.querySelector('#pass1');
    var pass2 = document.querySelector('#pass2');

    console.log(email);
    form.onsubmit = function() {
        return validate();
    }

    function validate() {
        if (!email.value.includes('@')) {
            errorMessage.innerHTML = 'Email musi posiadać znak @';
            return false;
        }
        if (name.value.length < 7) {
            errorMessage.innerHTML = 'Twoje imię jest za krótkie';
            return false;
        }
        if (surname.value.length < 7) {
            errorMessage.innerHTML = 'Twoje nazwisko jest za krótkie';
            return false;
        }
        if (!(pass1.value && pass2.value && pass1.value === pass2.value)) {
            errorMessage.innerHTML = 'Hasła nie są takie same lub puste';
            return false;
        }
        if (!document.querySelector(`#agree`).checked) {
            errorMessage.innerHTML = 'Musisz zaakceptować warunki';
            return false;
        }

        errorMessage.innerHTML = '';
        return true;
    }
});