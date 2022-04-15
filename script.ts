const mainApp = (ev: Event) => {
	const log = (i: unknown) => console.log('\n', i)

	const currentValueElem: HTMLInputElement | null = document.querySelector('.display')
	const previousValueElem: HTMLDivElement | null = document.querySelector('.history')
	const allBttns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.bttn')

	let operandArr: string[] = [] //items
	const operatorArr: unknown[] = [] // equations
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
			if (currentValueElem) {
				currentValueElem.value = currentValueElem.value.slice(0, -1)
			}
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
			if (currentValueElem) {
				currentValueElem.value =
					currentValueElem.value === '0'
						? bttnInput
						: `${currentValueElem.value}${bttnInput}`
			}
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
				if (currentValueElem.value === '0') {
					currentValueElem.value = clickInput ?? ''
				} else {
					currentValueElem.value = `${currentValueElem.value}${clickInput}`
				}
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
			operandArr = []
		}
	}

	//backspace button click functionality
	const backspaceButton: HTMLButtonElement | null = document.querySelector('.bttn-del')
	backspaceButton?.addEventListener('click', () => {
		//remove last value from currentValue
		if (currentValueElem) {
			currentValueElem.value = currentValueElem.value.slice(0, -1)
		}
	})

	//sign change functionality
	const plusMinusButton = document.querySelector('.bttn-plusMinus')
	plusMinusButton?.addEventListener('click', () => {
		if (currentValueElem) {
			//grab currentValue, change it to float, multiply by -1, convert to string
			currentValueElem.value = (parseFloat(currentValueElem.value) * -1).toString()
		}
	})

	//operator buttons functionality
	const operatorBttns: NodeListOf<HTMLButtonElement> =
		document.querySelectorAll('.operator')
	operatorBttns.forEach((bttn) => bttn.addEventListener('click', handleOperatorBttnClick))
	function handleOperatorBttnClick(this: HTMLButtonElement) {
		//grab the current operand and operators
		const currentOperator = this.textContent
		const currentOperand = currentValueElem?.value

		log(currentOperator)
		log(currentOperand)
		//if operand array is empty do nothing
		if (operandArr.length.toString() && currentOperand === '0') return

		//if its a new number, clear previousHistory and empty operandArr
		if (newNumberFlag) {
			if (previousValueElem) previousValueElem.textContent = ''
			operandArr = []
		}
	}

	//
	//
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
/*
//if equals sign is pressed and in history
		if (newNumberFlag) {
			//clear previousValue and empty operandArr
			previousValueElem?.textContent == ''
			operandArr = []
		}

		//grab the operator string
		const newOperator = this.textContent
		//grab the currentValue string
		const currentVal = currentValueElem?.value

		//if array length and currentValue === 0, do nothing
		if (operandArr.length.toString() && currentVal === '0') return

		//new equation
		if (operandArr.length === 0) {
			if (currentVal && newOperator) operandArr.push(currentVal, newOperator)
			if (previousValueElem) {
				previousValueElem.textContent = `${currentVal} ${newOperator}`
			}
			return (newNumberFlag = true)
		}

		//finish the equation
		if (operandArr.length) {
			if (currentVal) operandArr.push(currentVal)

			const formulaObj = {
				operator: operandArr[1],
				number1: operandArr[0],
				number2: currentVal ?? '',
			}

			operatorArr.push(formulaObj)

			const formulaStr = `
				${formulaObj.number1}${formulaObj.operator}${formulaObj.number2}`
			log(formulaObj)
			log(formulaStr)

			
		}
*/
