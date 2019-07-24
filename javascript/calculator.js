// set default value to 0
document.getElementById('display').innerHTML = "0";

// make numbers display on screen
const buttons = document.querySelectorAll(".btn");

for (const button of buttons) {
    button.addEventListener('click', function displayBtn(buttons) {
        let answer = button.innerHTML;
        document.getElementById('display').innerHTML = answer;
        return answer;
    })
}

// make buttons clear 
document.querySelector('.clear-btn').addEventListener('click', function () {
    document.getElementById('display').innerHTML = "0";
});

// make numbers display when they are pressed

// add 

// minus

// divide

// times
