const colors = document.getElementById('colors');
const inputColor = document.getElementById('attempt');
const btnAttempt = document.getElementById('subimitAttempt');
const screenResult = document.querySelector('.result');
const totalAttempt = document.getElementById('totalAttempt');
const body = document.querySelector('body');

let colorsValue = ['blue', 'green', 'red', 'yellow', 'black'];

colors.innerText = colorsValue;

let secretColor = Math.floor(Math.random() * colorsValue.length);

let attempts = 1;

function guessTheColor() {
    let color = colorsValue[secretColor];
    console.log(color);

    btnAttempt.addEventListener('click', () => { 
        let colorRespost = inputColor.value;

        if (colorRespost != color) { 
            attempts++ 
            console.log(attempts);
        }   
        else {
            screenResult.classList.remove('hide');
            totalAttempt.innerText = attempts;
            body.style.backgroundColor = color;
        }
    });

}

guessTheColor();