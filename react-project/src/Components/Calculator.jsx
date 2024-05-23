import './Calculator.css'
import { useState } from 'react'

export default function Calculator() {
    const [display, setDisplay] = useState('0');
    const [isAdditionBtnSelected, setIsAdditionBtnSelected] = useState(false);
    const [isSubstractionBtnSelected, setIsSubsctractionBtnSelected] = useState(false);
    const [isMultiplicationBtnSelected, setIsMultipicationBtnSelected] = useState(false);
    const [isDivisionBtnSelected, setIsDivisionBtnSelected] = useState(false);

    const handleClick = e => {
        setDisplay(e.target.value);
        console.log(e.target.value);
    }

    const handleClickClear = e => {
        setDisplay('0');
    }

    const handleClickAddition = e => {
        setIsAdditionBtnSelected(!isAdditionBtnSelected);
    }

    const handleClickDivision = e => {
        setIsDivisionBtnSelected(!isDivisionBtnSelected);
    }

    return (
        <section>
            <main id="calculatorContainer">
                <div id="displayContainer">
                    <p id="displayNum">{display}</p>
                </div>
                <div id="btnContainer">
                    <div id="btnRow1" className="btnRow"><button onClick={handleClickClear} id="btnAC" className="btnCalc btnGray">AC</button> <button id="btnToggleAbb" className="btnCalc btnGray">&#8314;&#8725;&#8331;</button> <button id="btnBackspace" className="btnCalc btnGray">&#8626;</button> <button onClick={handleClickDivision} id="btnDivision" className={isDivisionBtnSelected ? 'btnCalc btnOperator selectedCalc' : 'btnCalc btnOperator'} value="/">&#247;</button></div>
                    <div id="btnRow2" className="btnRow"><button onClick={handleClick} id="btn7" className="btnCalc btnDarkGray btnNum" value="7">7</button> <button onClick={handleClick} id="btn8" className="btnCalc btnDarkGray btnNum" value="8">8</button> <button onClick={handleClick} id="btn9" className="btnCalc btnDarkGray btnNum" value="9">9</button> <button id="btnMultiply" className="btnCalc btnOperator" value="*">&#215;</button></div>
                    <div id="btnRow3" className="btnRow"><button onClick={handleClick} id="btn4" className="btnCalc btnDarkGray btnNum" value="4">4</button> <button onClick={handleClick} id="btn5" className="btnCalc btnDarkGray btnNum" value="5">5</button> <button onClick={handleClick} id="btn6" className="btnCalc btnDarkGray btnNum" value="6">6</button> <button id="btnSubstract" className="btnCalc btnOperator" value="-">&#8722;</button></div>
                    <div id="btnRow4" className="btnRow"><button onClick={handleClick} id="btn1" className="btnCalc btnDarkGray btnNum" value="1">1</button> <button onClick={handleClick} id="btn2" className="btnCalc btnDarkGray btnNum" value="2">2</button> <button onClick={handleClick} id="btn3" className="btnCalc btnDarkGray btnNum" value="3">3</button> <button onClick={handleClickAddition} id="btnAdd" className={isAdditionBtnSelected ? 'btnCalc btnOperator selectedCalc' : 'btnCalc btnOperator'} value="+">&#43;</button></div>
                    <div id="btnRow5" className="btnRow"><button onClick={handleClick} id="btn0" className="btnCalc btnDarkGray btnNum" value="0">0</button> <button onClick={handleClick} id="btnDot" className="btnCalc btnDarkGray" value=".">.</button> <button id="btnEquals" className='btnCalc btnOperator'>&#x3d;</button></div>
                </div>
            </main>
        </section>

    )
}