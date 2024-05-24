import './Calculator.css'
import { useState, useEffect } from 'react'

export default function Calculator() {
    const [display, setDisplay] = useState('0');
    const [isAdditionBtnSelected, setIsAdditionBtnSelected] = useState(false);
    const [isSubstractionBtnSelected, setIsSubsctractionBtnSelected] = useState(false);
    const [isMultiplicationBtnSelected, setIsMultiplicationBtnSelected] = useState(false);
    const [isDivisionBtnSelected, setIsDivisionBtnSelected] = useState(false);
    const [operandA, setOperandA] = useState('');
    const [operandB, setOperandB] = useState('');
    const [operator, setOperator] = useState(null);
    const [isNewCalculation, setIsNewCalculation] = useState(true);

    const handleClick = e => {
        let value = e.target.value;
        if (operator === null) {
            setOperandA(prevOperandA => (prevOperandA === '0' ? value : prevOperandA + value));
            setDisplay(prevDisplay => (prevDisplay === '0' || isNewCalculation ? value : prevDisplay + value));
            setIsNewCalculation(false);
        } else {
            setOperandB(prevOperandB => (prevOperandB === '0' ? value : prevOperandB + value));
            setDisplay(prevDisplay => (prevDisplay === operandA || prevDisplay === '0' ? value : prevDisplay + value));
        }
    }

    const handleClickClear = () => {
        setOperandA('0');
        setOperandB('0');
        setOperator(null);
        setDisplay('0');
        deSelectOPerators();
        setIsNewCalculation(true);
    }

    const handleClickSubstraction = () => {
        setIsSubsctractionBtnSelected(!isSubstractionBtnSelected);
        setOperator('-');
    }

    const handleClickMultiplication = () => {
        setIsMultiplicationBtnSelected(!isMultiplicationBtnSelected);
        setOperator('*');
    }

    const handleClickAddition = () => {
        setIsAdditionBtnSelected(!isAdditionBtnSelected);
        setOperator('+');
    }

    const handleClickDivision = () => {
        setIsDivisionBtnSelected(!isDivisionBtnSelected);
        setOperator('/');
    }

    const handleClickEquals = () => {
        deSelectOPerators();

        (function (operandA, operator, operandB) {
            let result;
            if (operator && operandB) {
                switch (operator) {
                    case '+':
                        result = parseFloat(operandA) + parseFloat(operandB);
                        break;
                    case '-':
                        result = parseFloat(operandA) - parseFloat(operandB);
                        break;
                    case '*':
                        result = parseFloat(operandA) * parseFloat(operandB);
                        break;
                    case '/':
                        result = parseFloat(operandA) / parseFloat(operandB);
                        break;
                    default:
                        break;
                }
            }
            setDisplay(result);
            setOperator(null);
            setOperandA(result);
            setOperandB('');
        })(operandA, operator, operandB);
    }

    const handleClickBackspace = () => {
        if (!operandB && operandA.length === 1) {
            setOperandA('0');
            setDisplay('0');
        } else if (operandB && operandB.length === 1) {
            setOperandB('0');
            setDisplay('0');
        } else if (operandB && operandB.length > 1 && operandB !== '0') {
            setOperandB(operandB.slice(0, -1));
            setDisplay(operandB.slice(0, -1));
        } else if (operandA.length > 1 && operandA !== '0') {
            setOperandA(operandA.slice(0, -1));
            setDisplay(operandA.slice(0, -1));
        }
    }

    const handleClickToggleAbb = () => {
        if (operator === null) {
            setOperandA(prevOperandA => {
                const newOperandA = (parseFloat(prevOperandA) * -1).toString();
                setDisplay(newOperandA);
                return newOperandA;
            });
        } else {
            setOperandB(prevOperandB => {
                const newOperandB = (parseFloat(prevOperandB) * -1).toString();
                setDisplay(operandA + operator + newOperandB);
                return newOperandB;
            });
        }
    }
    

    const deSelectOPerators = () => {
        setIsAdditionBtnSelected(false);
        setIsDivisionBtnSelected(false);
        setIsMultiplicationBtnSelected(false);
        setIsSubsctractionBtnSelected(false);
    }

    return (
        <section id="sectionCalculator">
            <main id="calculatorContainer">
                <div id="displayContainer">
                    <p id="displayNum">{display}</p>
                </div>
                <div id="btnContainer">
                    <div id="btnRow1" className="btnRow"><button onClick={handleClickClear} id="btnAC" className="btnCalc btnGray">AC</button> <button id="btnToggleAbb" onClick={handleClickToggleAbb} className="btnCalc btnGray">&#8314;&#8725;&#8331;</button> <button id="btnBackspace" onClick={handleClickBackspace} className="btnCalc btnGray">&#8626;</button> <button onClick={handleClickDivision} id="btnDivision" className={isDivisionBtnSelected ? 'btnCalc btnOperator selectedCalc' : 'btnCalc btnOperator'} value="/">&#247;</button></div>
                    <div id="btnRow2" className="btnRow"><button onClick={handleClick} id="btn7" className="btnCalc btnDarkGray btnNum" value="7">7</button> <button onClick={handleClick} id="btn8" className="btnCalc btnDarkGray btnNum" value="8">8</button> <button onClick={handleClick} id="btn9" className="btnCalc btnDarkGray btnNum" value="9">9</button> <button id="btnMultiply" onClick={handleClickMultiplication} className={isMultiplicationBtnSelected ? 'btnCalc btnOperator selectedCalc' : 'btnCalc btnOperator'} value="*">&#215;</button></div>
                    <div id="btnRow3" className="btnRow"><button onClick={handleClick} id="btn4" className="btnCalc btnDarkGray btnNum" value="4">4</button> <button onClick={handleClick} id="btn5" className="btnCalc btnDarkGray btnNum" value="5">5</button> <button onClick={handleClick} id="btn6" className="btnCalc btnDarkGray btnNum" value="6">6</button> <button id="btnSubstract" onClick={handleClickSubstraction} className={isSubstractionBtnSelected ? 'btnCalc btnOperator selectedCalc' : 'btnCalc btnOperator'} value="-">&#8722;</button></div>
                    <div id="btnRow4" className="btnRow"><button onClick={handleClick} id="btn1" className="btnCalc btnDarkGray btnNum" value="1">1</button> <button onClick={handleClick} id="btn2" className="btnCalc btnDarkGray btnNum" value="2">2</button> <button onClick={handleClick} id="btn3" className="btnCalc btnDarkGray btnNum" value="3">3</button> <button onClick={handleClickAddition} id="btnAdd" className={isAdditionBtnSelected ? 'btnCalc btnOperator selectedCalc' : 'btnCalc btnOperator'} value="+">&#43;</button></div>
                    <div id="btnRow5" className="btnRow"><button onClick={handleClick} id="btn0" className="btnCalc btnDarkGray btnNum" value="0">0</button> <button onClick={handleClick} id="btnDot" className="btnCalc btnDarkGray" value=".">.</button> <button id="btnEquals" onClick={handleClickEquals} className='btnCalc btnOperator'>&#x3d;</button></div>
                </div>
            </main>
        </section>

    )
}