let string = "";
let boton = document.querySelectorAll('.btn');
let screen = document.querySelector('.screen');


boton.forEach(function (button) {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                screen.value = string;
            } catch (e) {
                screen.value = 'error';
            }

        }
        else if (e.target.innerHTML == 'C') {
            string = " ";
            screen.value = string;
        }
        else {
            try {
                console.log(e.target);
                string = string + e.target.innerHTML;
                screen.value = string;
            } catch (e) {
                screen.value = 'error';
            }
        }
    })
});







