const mainApp = () => {
	const allBttns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.bttn')
	const displayElement: HTMLDivElement | null = document.querySelector('.display')

	type State = {
		firstOperand: string
		secondOperand: string
		operator: string
		result: string
		displayValue: string
		secondNumberFlag: boolean
		newOperationFlag: boolean
	}
	const state: State = {
		firstOperand: '',
		secondOperand: '',
		operator: '',
		result: '',
		displayValue: '',
		secondNumberFlag: false, //if false == NOT a secondNumber, true == YES a 	secondNumber
		newOperationFlag: false, //likewise
	}

	function handleBttnPress(this: Window, ev: KeyboardEvent) {
		const bttn = document.querySelector(`button[data-key='${ev.key}']`)
		const bttnValue = bttn?.textContent

		if (displayElement && bttnValue) {
			updateDisplayState(displayElement, bttnValue, state)
			updateDisplay(displayElement, state.displayValue)
		}

		if (bttn?.classList.contains('bttn-backspace')) {
			handleBackspace(state)
			updateDisplay(displayElement, state.displayValue)
		} else if (bttn?.classList.contains('bttn-decimal')) {
			handleDecimal(state, bttnValue)
			updateDisplay(displayElement, state.displayValue)
		} else if (bttn?.classList.contains('operand')) {
			updateOperandState(state, bttnValue)
			updateDisplay(displayElement, state.displayValue)
		} else if (bttn?.classList.contains('operator')) {
			updateOperatorState(state, bttnValue)
			updateDisplay(displayElement, state.displayValue)
		} else if (bttn?.classList.contains('bttn-equals')) {
			handleEquals(state)
			updateDisplay(displayElement, state.displayValue)
		} else if (bttn?.classList.contains('bttn-percent')) {
			handlePercent(state)
			updateDisplay(displayElement, state.displayValue)
		}
	}

	function handleBttnClick(this: HTMLButtonElement) {
		const bttnValue = this?.textContent

		if (displayElement && bttnValue) {
			updateDisplayState(displayElement, bttnValue, state)
			updateDisplay(displayElement, state.displayValue)
		}

		if (this.classList.contains('bttn-ac')) {
			allClear(state)
			updateDisplay(displayElement, state.displayValue)
		} else if (this.classList.contains('bttn-backspace')) {
			handleBackspace(state)
			updateDisplay(displayElement, state.displayValue)
		} else if (this.classList.contains('bttn-decimal')) {
			handleDecimal(state, bttnValue)
			updateDisplay(displayElement, state.displayValue)
		} else if (this.classList.contains('operand')) {
			updateOperandState(state, bttnValue)
			updateDisplay(displayElement, state.displayValue)
		} else if (this.classList.contains('operator')) {
			updateOperatorState(state, bttnValue)
			updateDisplay(displayElement, state.displayValue)
		} else if (this.classList.contains('bttn-equals')) {
			handleEquals(state)
			updateDisplay(displayElement, state.displayValue)
		} else if (this.classList.contains('bttn-plusMinus')) {
			handlePlusMinus(state)
			updateDisplay(displayElement, state.displayValue)
		} else if (this.classList.contains('bttn-percent')) {
			handlePercent(state)
			updateDisplay(displayElement, state.displayValue)
		}
	}

	function handlePercent(_state: State) {
		if (_state.result) {
			_state.firstOperand = (parseFloat(_state.result) / 100).toString()

			_state.displayValue = _state.firstOperand
		} else if (!_state.secondNumberFlag) {
			_state.firstOperand = _state.firstOperand
				? (parseFloat(_state.firstOperand) / 100).toString()
				: ''

			_state.displayValue = _state.firstOperand
		} else if (_state.secondNumberFlag) {
			_state.secondOperand = _state.secondOperand
				? (parseFloat(_state.secondOperand) / 100).toString()
				: ''

			_state.displayValue = _state.secondOperand
		}
	}

	function updateOperatorState(_state: State, _bttnValue: string | null | undefined) {
		if (!_state.firstOperand && !_state.secondOperand) {
			_state.operator = ''
		} else if (_state.firstOperand && !_state.secondOperand) {
			if (_bttnValue) _state.operator = _bttnValue
			_state.newOperationFlag = false
			_state.secondNumberFlag = true
		} else if (!_state.firstOperand && _state.secondOperand) {
			_state.firstOperand = _state.secondOperand
			_state.secondOperand = ''
			_state.secondNumberFlag = true
		} else {
			_state.result = solve(state)
			_state.displayValue = _state.result
			_state.firstOperand = _state.result
			if (_bttnValue) _state.operator = _bttnValue
			_state.secondOperand = ''
			_state.secondNumberFlag = true
		}
	}

	function updateOperandState(_state: State, _bttnValue: string | null | undefined) {
		const length1stOperand = _state.firstOperand.length
		const length2ndOperand = _state.secondOperand.length
		if (_state.newOperationFlag) {
			_state.firstOperand = ''
			_state.secondOperand = ''
			_state.newOperationFlag = false
			_state.secondNumberFlag = false
		}

		if (!_state.secondNumberFlag) {
			if (_bttnValue)
				_state.firstOperand = _state.displayValue =
					length1stOperand <= 10
						? `${_state.firstOperand}${_bttnValue}`
						: `${_state.firstOperand}`
		} else {
			if (_bttnValue)
				_state.secondOperand = _state.displayValue =
					length2ndOperand <= 10
						? `${_state.secondOperand}${_bttnValue}`
						: `${_state.secondOperand}`
		}
	}

	function updateDisplay(_displayElement: HTMLDivElement | null, _displayValue: string) {
		if (_displayElement) _displayElement.textContent = _displayValue
	}

	function updateDisplayState(
		_displayElement: HTMLDivElement,
		_bttnValue: string,
		_state: State
	) {
		const allOperandsArr = ['AC', '<--', '%', '/', '*', '-', '+', '=', '+/-']
		const displayLength = _displayElement?.textContent?.length

		if (_displayElement) {
			if (_displayElement.textContent?.[0] === '0') {
				_displayElement.textContent = _displayElement.textContent.slice(0, -1)
			}

			if (allOperandsArr.includes(_bttnValue)) _bttnValue = ''
			else {
				_state.displayValue =
					displayLength && displayLength <= 10
						? `${_displayElement.textContent}${_bttnValue}`
						: `${_displayElement.textContent}`
			}
		}
	}

	function solve(_state: State) {
		const operand1 = parseFloat(_state.firstOperand)
		const sign = _state.operator
		const operand2 = parseFloat(_state.secondOperand)

		let _result = ''

		switch (sign) {
			case '+':
				_result = (operand1 + operand2).toString()
				break

			case '-':
				_result = (operand1 - operand2).toString()
				break

			case '*':
				_result = (operand1 * operand2).toString()
				break

			case '/':
				_result = (operand1 / operand2).toString()
				break

			default:
				_result = ''
		}

		_result = _result.length <= 10 ? _result : Number(_result).toPrecision(10).toString()

		return _result
	}

	function handleEquals(_state: State) {
		if (!_state.firstOperand && !_state.secondOperand) {
			_state.operator = ''
		} else if (_state.firstOperand && !_state.secondOperand) {
			_state.operator = ''
		} else if (!_state.firstOperand && _state.secondOperand) {
			_state.firstOperand = _state.secondOperand
			_state.secondOperand = ''
			_state.operator = ''
			_state.secondNumberFlag = true
		} else {
			_state.result = solve(state)
			_state.displayValue = _state.result
			_state.firstOperand = _state.result
			_state.operator = ''
			_state.secondOperand = ''
			_state.secondNumberFlag = true
			_state.newOperationFlag = true
		}
	}

	function handleDecimal(_state: State, _bttnValue: string | null | undefined) {
		const length1stOperand = _state.firstOperand.length
		const length2ndOperand = _state.secondOperand.length

		if (!_state.secondNumberFlag) {
			if (_bttnValue)
				if (!_state.firstOperand.includes('.')) {
					_state.firstOperand = _state.displayValue =
						length1stOperand <= 10
							? `${_state.firstOperand}${_bttnValue}`
							: `${_state.firstOperand}`
				} else {
					_state.firstOperand = _state.displayValue =
						length1stOperand <= 10 ? `${_state.firstOperand}` : `${_state.firstOperand}`
				}
		} else {
			if (_bttnValue)
				if (!_state.secondOperand.includes('.')) {
					_state.secondOperand = _state.displayValue =
						length2ndOperand <= 10
							? `${_state.secondOperand}${_bttnValue}`
							: `${_state.secondOperand}`
				} else {
					_state.secondOperand = _state.displayValue =
						length2ndOperand <= 10 ? `${_state.secondOperand}` : `${_state.secondOperand}`
				}
		}
	}

	function handlePlusMinus(_state: State) {
		if (_state.result) {
			_state.firstOperand = (parseFloat(_state.result) * -1).toString()

			_state.displayValue = _state.firstOperand
		} else if (!_state.secondNumberFlag) {
			_state.firstOperand = _state.firstOperand
				? (parseFloat(_state.firstOperand) * -1).toString()
				: ''

			_state.displayValue = _state.firstOperand
		} else if (_state.secondNumberFlag) {
			_state.secondOperand = _state.secondOperand
				? (parseFloat(_state.secondOperand) * -1).toString()
				: ''

			_state.displayValue = _state.secondOperand
		}
	}

	function handleBackspace(_state: State) {
		if (_state.result) {
			_state.firstOperand = _state.result.slice(0, -1)

			_state.displayValue = _state.firstOperand
		} else if (!_state.secondNumberFlag) {
			_state.firstOperand = _state.firstOperand ? _state.firstOperand.slice(0, -1) : ''

			_state.displayValue = _state.firstOperand
		} else if (_state.secondNumberFlag) {
			_state.secondOperand = _state.secondOperand ? _state.secondOperand.slice(0, -1) : ''

			_state.displayValue = _state.secondOperand
		}
	}

	function allClear(_state: State) {
		_state.firstOperand = ''
		_state.secondOperand = ''
		_state.operator = ''
		_state.displayValue = '0'
		_state.result = ''

		_state.secondNumberFlag = false
	}

	allBttns.forEach((bttn) => bttn.addEventListener('click', handleBttnClick))
	self.addEventListener('keydown', handleBttnPress)
}

document.addEventListener('DOMContentLoaded', mainApp)
