console.log("Hi, Athma!");
function preciseStr(n) {
    var sigDig = 9;
    return n % 1 === 0 ? n.toString() : n.toPrecision(sigDig).toString();
}
function addition(n1, n2, fn) {
    if (fn === void 0) { fn = preciseStr; }
    return fn(n1 + n2);
}
function subtraction(n1, n2, fn) {
    if (fn === void 0) { fn = preciseStr; }
    return fn(n1 - n2);
}
function multiplication(n1, n2, fn) {
    if (fn === void 0) { fn = preciseStr; }
    return fn(n1 * n2);
}
function division(n1, n2, fn) {
    if (fn === void 0) { fn = preciseStr; }
    return fn(n1 / n2);
}
var state = {
    num1: '',
    num2: '',
    isNum1Negative: false,
    isNum2Negative: false,
    isDecimal: false,
    isAdd: false,
    isSubtract: false,
    isMultiply: false,
    isDivide: false
};
var zero = document.querySelector('.zero');
zero === null || zero === void 0 ? void 0 : zero.addEventListener('click', function () {
    !state.isDecimal ? (state.num1 += '0') : (state.num2 += '0');
    state.isDecimal = false;
});
var one = document.querySelector('.one');
one === null || one === void 0 ? void 0 : one.addEventListener('click', function () {
    !state.isDecimal ? (state.num1 += '1') : (state.num2 += '1');
    state.isDecimal = false;
});
var two = document.querySelector('.two');
two === null || two === void 0 ? void 0 : two.addEventListener('click', function () {
    !state.isDecimal ? (state.num1 += '2') : (state.num2 += '2');
    state.isDecimal = false;
});
var three = document.querySelector('.three');
three === null || three === void 0 ? void 0 : three.addEventListener('click', function () {
    !state.isDecimal ? (state.num1 += '3') : (state.num2 += '3');
    state.isDecimal = false;
});
var four = document.querySelector('.four');
four === null || four === void 0 ? void 0 : four.addEventListener('click', function () {
    !state.isDecimal ? (state.num1 += '4') : (state.num2 += '4');
    state.isDecimal = false;
});
var five = document.querySelector('.five');
five === null || five === void 0 ? void 0 : five.addEventListener('click', function () {
    !state.isDecimal ? (state.num1 += '5') : (state.num2 += '5');
    state.isDecimal = false;
});
var six = document.querySelector('.six');
six === null || six === void 0 ? void 0 : six.addEventListener('click', function () {
    !state.isDecimal ? (state.num1 += '6') : (state.num2 += '6');
    state.isDecimal = false;
});
var seven = document.querySelector('.seven');
seven === null || seven === void 0 ? void 0 : seven.addEventListener('click', function () {
    !state.isDecimal ? (state.num1 += '7') : (state.num2 += '7');
    state.isDecimal = false;
});
var eight = document.querySelector('.eight');
eight === null || eight === void 0 ? void 0 : eight.addEventListener('click', function () {
    !state.isDecimal ? (state.num1 += '8') : (state.num2 += '8');
    state.isDecimal = false;
});
var nine = document.querySelector('.nine');
nine === null || nine === void 0 ? void 0 : nine.addEventListener('click', function () {
    !state.isDecimal ? (state.num1 += '9') : (state.num2 += '9');
    state.isDecimal = false;
});
var dot = document.querySelector('.dot');
dot === null || dot === void 0 ? void 0 : dot.addEventListener('click', function () {
    state.isDecimal = true;
});
var clear = document.querySelector('.clear');
clear === null || clear === void 0 ? void 0 : clear.addEventListener('click', function () {
    window.location.reload();
});
var plus = document.querySelector('.plus');
plus === null || plus === void 0 ? void 0 : plus.addEventListener('click', function () {
    state.isAdd = true;
});
var subtract = document.querySelector('.minus');
subtract === null || subtract === void 0 ? void 0 : subtract.addEventListener('click', function () {
    state.isSubtract = true;
});
var mult = document.querySelector('.multiply');
mult === null || mult === void 0 ? void 0 : mult.addEventListener('click', function () {
    state.isMultiply = true;
});
var divide = document.querySelector('.divide');
divide === null || divide === void 0 ? void 0 : divide.addEventListener('click', function () {
    state.isDivide = true;
});
var plusMinus = document.querySelector('.plusMinus');
plusMinus === null || plusMinus === void 0 ? void 0 : plusMinus.addEventListener('click', function () { });
var percent = document.querySelector('.percent');
percent === null || percent === void 0 ? void 0 : percent.addEventListener('click', function () { });
console.log(state);
