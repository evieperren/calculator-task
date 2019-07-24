// set default value to 0
document.querySelector('.calculator__display').innerHTML = "0";

// make numbers display on screen
const buttons = document.querySelectorAll(".calculator__btn");

for (const button of buttons) {
    button.addEventListener('click', function displayBtn(buttons) {
        let answer = button.innerHTML;
        document.querySelector('.calculator__display').innerHTML = answer;
        return answer;
    })
}

// make buttons clear 
document.querySelector('.calculator__btn--clear').addEventListener('click', function () {
    document.querySelector('.calculator__display').innerHTML = "0";
});

// make numbers display when they are pressed

// add 

// minus

// divide

// times
