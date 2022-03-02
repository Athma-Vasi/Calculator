console.log(`Hi, Athma!`);
function preciseStr(n) {
    let sigDig = 9;
    return n % 1 === 0 ? n.toString() : n.toPrecision(sigDig).toString();
}
function addition(_state, fn) {
    const { num1, num2 } = _state;
    const sum = Number(num1) + Number(num2);
    return fn(sum);
}
function subtraction(_state, fn) {
    const { num1, num2 } = _state;
    const subtract = Number(num1) - Number(num2);
    return fn(subtract);
}
function multiplication(_state, fn) {
    const { num1, num2 } = _state;
    const mult = Number(num1) * Number(num2);
    return fn(mult);
}
function division(_state, fn) {
    const { num1, num2 } = _state;
    const divide = Number(num2) === 0 ? 'lmao' : Number(num1) * Number(num2);
    return fn(divide);
}
const display = document.getElementById('display');
const state = {
    num1: '',
    num2: '',
    total: '',
    isNum1Negative: false,
    isNum2Negative: false,
    isFraction: true,
    isNextNumber: false,
    isAdd: false,
    isSubtract: false,
    isMultiply: false,
    isDivide: false,
};
const zero = document.querySelector('.zero');
zero?.addEventListener('click', () => {
    if (!state.isNextNumber) {
        state.num1 += '0';
        display.textContent = state.num1;
    }
    else {
        state.num2 += '0';
        display.textContent = state.num2;
    }
    state.isNextNumber = false;
});
const one = document.querySelector('.one');
one?.addEventListener('click', () => {
    if (!state.isNextNumber) {
        state.num1 += '1';
        display.textContent = state.num1;
    }
    else {
        state.num2 += '1';
        display.textContent = state.num2;
    }
    state.isNextNumber = false;
});
const two = document.querySelector('.two');
two?.addEventListener('click', () => {
    if (!state.isNextNumber) {
        state.num1 += '2';
        display.textContent = state.num1;
    }
    else {
        state.num2 += '2';
        display.textContent = state.num2;
    }
    state.isNextNumber = false;
});
const three = document.querySelector('.three');
three?.addEventListener('click', () => {
    if (!state.isNextNumber) {
        state.num1 += '3';
        display.textContent = state.num1;
    }
    else {
        state.num2 += '3';
        display.textContent = state.num2;
    }
    state.isNextNumber = false;
});
const four = document.querySelector('.four');
four?.addEventListener('click', () => {
    if (!state.isNextNumber) {
        state.num1 += '4';
        display.textContent = state.num1;
    }
    else {
        state.num2 += '4';
        display.textContent = state.num2;
    }
    state.isNextNumber = false;
});
const five = document.querySelector('.five');
five?.addEventListener('click', () => {
    if (!state.isNextNumber) {
        state.num1 += '5';
        display.textContent = state.num1;
    }
    else {
        state.num2 += '5';
        display.textContent = state.num2;
    }
    state.isNextNumber = false;
});
const six = document.querySelector('.six');
six?.addEventListener('click', () => {
    if (!state.isNextNumber) {
        state.num1 += '6';
        display.textContent = state.num1;
    }
    else {
        state.num2 += '6';
        display.textContent = state.num2;
    }
    state.isNextNumber = false;
});
const seven = document.querySelector('.seven');
seven?.addEventListener('click', () => {
    if (!state.isNextNumber) {
        state.num1 += '7';
        display.textContent = state.num1;
    }
    else {
        state.num2 += '7';
        display.textContent = state.num2;
    }
    state.isNextNumber = false;
});
const eight = document.querySelector('.eight');
eight?.addEventListener('click', () => {
    if (!state.isNextNumber) {
        state.num1 += '8';
        display.textContent = state.num1;
    }
    else {
        state.num2 += '8';
        display.textContent = state.num2;
    }
    state.isNextNumber = false;
});
const nine = document.querySelector('.nine');
nine?.addEventListener('click', () => {
    if (!state.isNextNumber) {
        state.num1 += '9';
        display.textContent = state.num1;
    }
    else {
        state.num2 += '9';
        display.textContent = state.num2;
    }
    state.isNextNumber = false;
});
const dot = document.querySelector('.dot');
dot?.addEventListener('click', () => {
    state.isFraction ? (state.isNextNumber = false) : (state.isNextNumber = true);
    state.num1 += '.';
    state.isFraction = false;
});
const clear = document.querySelector('.clear');
clear?.addEventListener('click', () => {
    window.location.reload();
});
const plus = document.querySelector('.plus');
plus?.addEventListener('click', () => {
    state.isAdd = true;
    state.isNextNumber = true;
});
const subtract = document.querySelector('.minus');
subtract?.addEventListener('click', () => {
    state.isSubtract = true;
    state.isNextNumber = true;
});
const mult = document.querySelector('.multiply');
mult?.addEventListener('click', () => {
    state.isMultiply = true;
    state.isNextNumber = true;
});
const divide = document.querySelector('.divide');
divide?.addEventListener('click', () => {
    state.isDivide = true;
    state.isNextNumber = true;
});
const plusMinus = document.querySelector('.plusMinus');
plusMinus?.addEventListener('click', () => { });
const percent = document.querySelector('.percent');
percent?.addEventListener('click', () => { });
const equal = document.querySelector('.equal');
equal?.addEventListener('click', () => {
    switch (true) {
        case state.isAdd:
            state.total += addition(state, preciseStr);
            break;
        case state.isSubtract:
            state.total += subtraction(state, preciseStr);
            break;
        case state.isMultiply:
            state.total += multiplication(state, preciseStr);
            break;
        case state.isDivide:
            state.total += division(state, preciseStr);
            break;
        default:
            console.log("shouldn't see this...");
    }
    display.textContent = state.total;
    state.num1 = '';
    state.num2 = '';
    state.total = '';
    state.isNum1Negative = false;
    state.isNum2Negative = false;
    state.isFraction = true;
    state.isNextNumber = false;
    state.isAdd = false;
    state.isSubtract = false;
    state.isMultiply = false;
    state.isDivide = false;
});
