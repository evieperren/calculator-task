const display = document.querySelector('.calculator__display');
let total = undefined;

display.innerHTML = '0';
// make numbers display on screen
const buttons = document.querySelectorAll('.calculator__btn');
let num;
for (const button of buttons) {
    button.addEventListener('click', function displayBtn(num) {
        num = button.innerHTML;
        
        if(display == '0'){
            let total = num;
        }
        display.innerHTML += num;
        console.log(num);
        // show on page

        return num;
    })
}

// remove 0 and AC when another number is pressed

// if (total == undefined) {
//     total = parseFloat(display.innerHTML);
//     return;
// } else {
//     console.log('fcvgbhjk');
// }
// display.value = total;
// console.log(total);




// make buttons clear 
document.querySelector('.calculator__btn--clear').addEventListener('click', function clearDisplay() {
    display.innerHTML = 'AC';
});


// add 
document.getElementById('add').addEventListener('click', function addNumbers(){
    if (document.getElementById('add')){
        console.log('add numbers');
    } else {
        console.log('not add')
    }
})


// minus
document.getElementById('minus').addEventListener('click', function addNumbers() {
    if (document.getElementById('minus')) {
        console.log('minus numbers');
    } else {
        console.log('not add')
    }
})

// divide
document.getElementById('divide').addEventListener('click', function addNumbers() {
    if (document.getElementById('divide')) {
        console.log('divide numbers');
    } else {
        console.log('not add')
    }
})

// times
document.getElementById('times').addEventListener('click', function addNumbers() {
    if (document.getElementById('times')) {
        console.log('times numbers');
    } else {
        console.log('not add')
    }
})

// equals
document.getElementById('equals').addEventListener('click', function addNumbers() {
    if (document.getElementById('equals')) {
        console.log('display total');
    } else {
        console.log('not add')
    }
})