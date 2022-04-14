const mainApp = (ev: Event) => {
	const log = (i: unknown) => console.log('\n', i)

	const currentValueElem: HTMLInputElement | null = document.querySelector('.display')
	const previousValueElem: HTMLDivElement | null = document.querySelector('.history')
	const allBttns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.bttn')

	let operatorArr: string[] = []
	const operandArr: string[] = []
	let newNumberFlag = false

	function handleBttnPress(this: Window, ev: KeyboardEvent) {
		//grab the bttn from keyboard presses
		const bttnElement: HTMLButtonElement | null = document.querySelector(
			`button[data-key="${ev.key}"]`
		)
		//grab keyboard value only and assign empty string to all other non-num values
		let bttnInput = bttnElement?.dataset.key ?? ''

		//backspace button press functionality
		//if pressed, remove last value from currentValue
		//then do not display the string 'Backspace'
		if (bttnInput === 'Backspace') {
			if (currentValueElem) currentValueElem.value = currentValueElem.value.slice(0, -1)
			bttnInput = ''
		}
		//if bttn pressed is 'Enter', do not display them
		bttnInput = bttnInput === 'Enter' ? '' : bttnInput

		//display button on screen functionality
		if (newNumberFlag) {
			//if  a new number, assign input to currentValueElem display
			if (currentValueElem) currentValueElem.value = bttnInput
			newNumberFlag = false
		} else {
			//if not a new number
			// and if currentValue === 0, assign input to currentVal, else add currentVal and input together
			if (currentValueElem)
				currentValueElem.value =
					currentValueElem.value === '0'
						? bttnInput
						: `${currentValueElem.value}${bttnInput}`
		}
	}

	function handleBttnClick(this: HTMLButtonElement) {
		const checkOperandArr = ['CE', 'C', '<==', '/', '*', '-', '+', '=', '+/-']

		//if any operand buttons are pressed, do not display them
		const clickInput = checkOperandArr.includes(`${this.textContent}`)
			? ''
			: this.textContent

		if (newNumberFlag) {
			//if  a new number, assign input to currentValueElem display
			if (currentValueElem) currentValueElem.value = clickInput ?? ''
			newNumberFlag = false
		} else {
			//if not a new number
			// and if currentValue === 0, assign input to currentVal, else add currentVal and input together
			if (currentValueElem) {
				if (currentValueElem.value === '0') currentValueElem.value = clickInput ?? ''
				else currentValueElem.value = `${currentValueElem.value}${clickInput}`
			}
		}
	}

	//clear buttons functionality
	const clrBttns: NodeListOf<HTMLButtonElement> =
		document.querySelectorAll('.bttn-c, .bttn-ce')
	clrBttns.forEach((bttn) => bttn.addEventListener('click', handleClrBttns))
	function handleClrBttns(this: HTMLButtonElement) {
		//pressing either buttons will cause currentValue set to 0
		if (currentValueElem) currentValueElem.value = '0'

		//if button pressed is bttn-c, clear previousValue & empty operatorArr
		if (this.classList.contains('bttn-c')) {
			if (previousValueElem) previousValueElem.textContent = ''
			operatorArr = []
		}
	}

	//backspace button click functionality
	const backspaceButton: HTMLButtonElement | null = document.querySelector('.bttn-del')
	backspaceButton?.addEventListener('click', () => {
		//remove last value from currentValue
		if (currentValueElem) currentValueElem.value = currentValueElem.value.slice(0, -1)
	})

	//sign change functionality
	const plusMinusButton = document.querySelector('.bttn-plusMinus')
	plusMinusButton?.addEventListener('click', () => {
		if (currentValueElem) parseFloat(currentValueElem.value) * -1
	})

	self.addEventListener('keydown', handleBttnPress)
	allBttns.forEach((bttn) => {
		bttn.addEventListener('click', handleBttnClick)
	})
}

document.addEventListener('DOMContentLoaded', mainApp)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*
if (newNumberFlag) {
	//if  a new number, assign input to currentValueElem display
	if (currentValueElem) currentValueElem.value = newInput
	newNumberFlag = false
} else {
	//if not a new number
	// and if currentValue === 0, assign input to currentVal, else add currentVal and input together
	if (currentValueElem)
		currentValueElem.value =
			currentValueElem.value === '0'
				? newInput
				: `${currentValueElem.value}${newInput}`
}

//Backspace functionality
if (newInput === 'Backspace') {
	//remove last value and add remaining to currentValue
	if (currentValueElem) currentValueElem.value = currentValueElem.value.slice(0, -1)
}
}

const clrBttns: NodeListOf<HTMLButtonElement> =
document.querySelectorAll('.bttn-c, .bttn-ce')
clrBttns.forEach((bttn) => bttn.addEventListener('click', handleClrBttns))
function handleClrBttns(this: HTMLButtonElement) {
//pressing either buttons will cause currentValue set to 0
if (currentValueElem) currentValueElem.value = '0'

//if button pressed is bttn-c, clear previousValue & empty operatorArr
if (this.classList.contains('bttn-c')) {
	if (previousValueElem) previousValueElem.textContent = ''
	operatorArr = []
}
}
*/
