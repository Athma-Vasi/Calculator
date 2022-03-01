console.log(`Hi, Athma!`)

function preciseStr(n: number) {
	let sigDig = 9
	return n % 1 === 0 ? n.toString() : n.toPrecision(sigDig).toString()
}

function addition(n1: number, n2: number, fn: Function = preciseStr) {
	return fn(n1 + n2)
}

function subtraction(n1: number, n2: number, fn: Function = preciseStr) {
	return fn(n1 - n2)
}

function multiplication(n1: number, n2: number, fn: Function = preciseStr) {
	return fn(n1 * n2)
}

function division(n1: number, n2: number, fn: Function = preciseStr) {
	return fn(n1 / n2)
}

const state = {
	num1: '',
	num2: '',
	isNum1Negative: false,
	isNum2Negative: false,
	isDecimal: false,
	isAdd: false,
	isSubtract: false,
	isMultiply: false,
	isDivide: false,
}

const zero = document.querySelector('.zero')
zero?.addEventListener('click', () => {
	!state.isDecimal ? (state.num1 += '0') : (state.num2 += '0')
	state.isDecimal = false
})

const one = document.querySelector('.one')
one?.addEventListener('click', () => {
	!state.isDecimal ? (state.num1 += '1') : (state.num2 += '1')
	state.isDecimal = false
})

const two = document.querySelector('.two')
two?.addEventListener('click', () => {
	!state.isDecimal ? (state.num1 += '2') : (state.num2 += '2')
	state.isDecimal = false
})

const three = document.querySelector('.three')
three?.addEventListener('click', () => {
	!state.isDecimal ? (state.num1 += '3') : (state.num2 += '3')
	state.isDecimal = false
})

const four = document.querySelector('.four')
four?.addEventListener('click', () => {
	!state.isDecimal ? (state.num1 += '4') : (state.num2 += '4')
	state.isDecimal = false
})

const five = document.querySelector('.five')
five?.addEventListener('click', () => {
	!state.isDecimal ? (state.num1 += '5') : (state.num2 += '5')
	state.isDecimal = false
})

const six = document.querySelector('.six')
six?.addEventListener('click', () => {
	!state.isDecimal ? (state.num1 += '6') : (state.num2 += '6')
	state.isDecimal = false
})

const seven = document.querySelector('.seven')
seven?.addEventListener('click', () => {
	!state.isDecimal ? (state.num1 += '7') : (state.num2 += '7')
	state.isDecimal = false
})

const eight = document.querySelector('.eight')
eight?.addEventListener('click', () => {
	!state.isDecimal ? (state.num1 += '8') : (state.num2 += '8')
	state.isDecimal = false
})

const nine = document.querySelector('.nine')
nine?.addEventListener('click', () => {
	!state.isDecimal ? (state.num1 += '9') : (state.num2 += '9')
	state.isDecimal = false
})

const dot = document.querySelector('.dot')
dot?.addEventListener('click', () => {
	state.isDecimal = true
})

const clear = document.querySelector('.clear')
clear?.addEventListener('click', () => {
	window.location.reload()
})

const plus = document.querySelector('.plus')
plus?.addEventListener('click', () => {
	state.isAdd = true
})

const subtract = document.querySelector('.minus')
subtract?.addEventListener('click', () => {
	state.isSubtract = true
})

const mult = document.querySelector('.multiply')
mult?.addEventListener('click', () => {
	state.isMultiply = true
})

const divide = document.querySelector('.divide')
divide?.addEventListener('click', () => {
	state.isDivide = true
})

const plusMinus = document.querySelector('.plusMinus')
plusMinus?.addEventListener('click', () => {})

const percent = document.querySelector('.percent')
percent?.addEventListener('click', () => {})

console.log(state)
