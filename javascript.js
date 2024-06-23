let numA = 0;
let numB = 0;
let operator = '';
let displayVal = 0;

function add(a,b){ return a+b;}
function sub(a,b){ return a-b;}
function mult(a,b){return a*b;}
function div(a,b){return a/b};

const display = document.querySelector('#display');

const num2 = document.getElementById('2');
num2.addEventListener('click', (event) => {
    display.textContent += "2";
});

const num1 = document.getElementById('1');
 num1.addEventListener('click', (event) => {
    display.textContent += "1";
});

const num3 = document.getElementById('3');
num3.addEventListener('click', (event) => {
    display.textContent += "3";
});

const num4 = document.getElementById('4');
num4.addEventListener('click', (event) => {
    display.textContent += "4";
});

const num5 = document.getElementById('5');
num5.addEventListener('click', (event) => {
    display.textContent += "5";
});

const num6 = document.getElementById('6');
num6.addEventListener('click', (event) => {
    display.textContent += "6";
});

const num7 = document.getElementById('7');
num7.addEventListener('click', (event) => {
    display.textContent += "7";
});

const num8 = document.getElementById('8');
num8.addEventListener('click', (event) => {
    display.textContent += "8";
});

const num9 = document.getElementById('9');
num9.addEventListener('click', (event) => {
    display.textContent += "9";
});

const num0 = document.getElementById('0');
num0.addEventListener('click', (event) => {
    display.textContent += "0";
});

const numDiv = document.getElementById('/');
numDiv.addEventListener('click', (event) => {
    numA = parseFloat(display.textContent);
    display.textContent = '';
    operator = '/';
});

const numMult = document.getElementById('*');
numMult.addEventListener('click', (event) => {
    numA = parseFloat(display.textContent);
    display.textContent = '';
    operator = '*';
});

const numAdd = document.getElementById('+');
numAdd.addEventListener('click', (event) => {
    numA = parseFloat(display.textContent);
    display.textContent = '';
    operator = '+';
});

const numSub = document.getElementById('-');
numSub.addEventListener('click', (event) => {
    numA = parseFloat(display.textContent);
    display.textContent = '';
    operator = '-';
});

const numNeg = document.getElementById('neg');
numNeg.addEventListener('click', (event) => {
    numA = -1* parseFloat(display.textContent);
    display.textContent = ''+numA;
});

const numPoint = document.getElementById('.');
numPoint.addEventListener('click', (event) => {
    display.textContent += '.';
});

const numClear = document.getElementById('clear');
numClear.addEventListener('click', (event) => {
    numA = 0;
    numB = 0;
    display.textContent = '';
    operator = '';
});

const numEq = document.getElementById('=');
numEq.addEventListener('click', (event) => {
    numB = parseFloat(display.textContent);
    display.textContent = operate(numA, operator,numB);
});


function operate(a, op, b){
    switch (op){
        case '+':
            return add(a,b);
            break;
        case '-':
            return sub(a,b);
            break;
        case '/':
            return div(a,b);
            break;
        case '*':
            return mult(a,b);
            break;
    }
}
