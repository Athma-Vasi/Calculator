console.log(`Hi, Athma!`)

function preciseStr(n: number) {
	let sigDig = 9
	return n % 1 === 0 ? n.toString() : n.toPrecision(sigDig).toString()
}

function addition(_state: typeof state, fn: Function): string {
	const { num1, total } = _state
	const sum = Number(total) + Number(num1)
	return fn(sum)
}

function subtraction(_state: typeof state, fn: Function): string {
	const { num1, total } = _state
	const subtract = Number(total) - Number(num1)
	return fn(subtract)
}

function multiplication(_state: typeof state, fn: Function): string {
	const { num1, total } = _state
	const mult = Number(total) * Number(num1)
	return fn(mult)
}

function division(_state: typeof state, fn: Function): string {
	const { num1, total } = _state
	const divide =
		Number(num1) === 0 || Number(total) === 0 ? '😲 😭' : Number(total) / Number(num1)
	return fn(divide)
}

const display = document.getElementById('display')

const state = {
	num1: '',
	total: '',
	isFirstDecimal: true,
	isFirstOperator: true,
}

const zero = document.querySelector('.zero')
zero?.addEventListener('click', () => {})

const one = document.querySelector('.one')
one?.addEventListener('click', () => {})

const two = document.querySelector('.two')
two?.addEventListener('click', () => {})

const three = document.querySelector('.three')
three?.addEventListener('click', () => {})

const four = document.querySelector('.four')
four?.addEventListener('click', () => {})

const five = document.querySelector('.five')
five?.addEventListener('click', () => {})

const six = document.querySelector('.six')
six?.addEventListener('click', () => {})

const seven = document.querySelector('.seven')
seven?.addEventListener('click', () => {})

const eight = document.querySelector('.eight')
eight?.addEventListener('click', () => {})

const nine = document.querySelector('.nine')
nine?.addEventListener('click', () => {
	state.num1 += '9'
})

const dot = document.querySelector('.dot')
dot?.addEventListener('click', () => {
	if (state.isFirstDecimal) {
		state.num1 += '.'
		state.isFirstDecimal = false
	}
})

const plus = document.querySelector('.plus')
plus?.addEventListener('click', () => {
	if (state.num1 === '.') {
		display.textContent = '😲 😭'
	} else {
		state.total = addition(state, preciseStr)
	}

	state.num1 = ''
})

const subtract = document.querySelector('.minus')
subtract?.addEventListener('click', () => {
	if (state.num1 === '.') {
		display.textContent = '😲 😭'
	} else {
		state.total = subtraction(state, preciseStr)
	}

	state.num1 = ''
})

const mult = document.querySelector('.multiply')
mult?.addEventListener('click', () => {
	if (state.num1 === '.') {
		display.textContent = '😲 😭'
	} else {
		state.total = multiplication(state, preciseStr)
	}

	state.num1 = ''
})

const divide = document.querySelector('.divide')
divide?.addEventListener('click', () => {
	if (state.num1 === '.') {
		display.textContent = '😲 😭'
	} else {
		state.total = division(state, preciseStr)
	}

	state.num1 = ''
})

const plusMinus = document.querySelector('.plusMinus')
plusMinus?.addEventListener('click', () => {})

const percent = document.querySelector('.percent')
percent?.addEventListener('click', () => {})

const equal = document.querySelector('.equal')
equal?.addEventListener('click', () => {})

const clear = document.querySelector('.clear')
clear?.addEventListener('click', () => {
	window.location.reload()
})

/*	
const zero = document.querySelector('.zero')
zero?.addEventListener('click', () => {
	if (!state.isNextNumber) {
		state.num1 += '0'
		display.textContent = state.num1
	} else {
		state.num2 += '0'
		display.textContent = state.num2
	}

	state.isFirstDecimal = true
	state.isNextNumber = false
})

const plus = document.querySelector('.plus')
plus?.addEventListener('click', () => {
	state.isAdd = true
	state.isNextNumber = true
	state.isFirstDecimal = true
})

const equal = document.querySelector('.equal')
equal?.addEventListener('click', () => {
	switch (true) {
		case state.isAdd:
			state.total += addition(state, preciseStr)
			break
		case state.isSubtract:
			state.total += subtraction(state, preciseStr)
			break
		case state.isMultiply:
			state.total += multiplication(state, preciseStr)
			break
		case state.isDivide:
			state.total += division(state, preciseStr)
			break
		default:
			console.log("shouldn't see this...")
	}

	display.textContent = state.total

	state.num1 = ''
	state.num2 = ''
	state.total = ''
	state.isNum1Negative = false
	state.isNum2Negative = false
	state.isFirstDecimal = true
	state.isNextNumber = false
	state.isAdd = false
	state.isSubtract = false
	state.isMultiply = false
	state.isDivide = false
})
*/
