import './Calculator.css'

export default function Calculator() {
    return (
        <section>
            <main id="calculatorContainer">
                <div id="displayContainer">
                    <p id="displayNum">0</p>
                </div>
                <div id="btnContainer">
                    <div id="btnRow1" class="btnRow"><button id="btnAC" class="btnCalc btnGray">AC</button> <button id="btnToggleAbb" class="btnCalc btnGray">&#8314;&#8725;&#8331;</button> <button id="btnBackspace" class="btnCalc btnGray">&#8626;</button> <button id="btnDivision" class="btnCalc btnOperator" value="/">&#247;</button></div>
                    <div id="btnRow2" class="btnRow"><button onClick={handleClick} id="btn7" class="btnCalc btnDarkGray btnNum" value="7">7</button> <button id="btn8" class="btnCalc btnDarkGray btnNum" value="8">8</button> <button id="btn9" class="btnCalc btnDarkGray btnNum" value="9">9</button> <button id="btnMultiply" class="btnCalc btnOperator" value="*">&#215;</button></div>
                    <div id="btnRow3" class="btnRow"><button id="btn4" class="btnCalc btnDarkGray btnNum" value="4">4</button> <button id="btn5" class="btnCalc btnDarkGray btnNum" value="5">5</button> <button id="btn6" class="btnCalc btnDarkGray btnNum" value="6">6</button> <button id="btnSubstract" class="btnCalc btnOperator" value="-">&#8722;</button></div>
                    <div id="btnRow4" class="btnRow"><button id="btn1" class="btnCalc btnDarkGray btnNum" value="1">1</button> <button id="btn2" class="btnCalc btnDarkGray btnNum" value="2">2</button> <button id="btn3" class="btnCalc btnDarkGray btnNum" value="3">3</button> <button id="btnAdd" class="btnCalc btnOperator" value="+">&#43;</button></div>
                    <div id="btnRow5" class="btnRow"><button id="btn0" class="btnCalc btnDarkGray btnNum" value="0">0</button> <button id="btnDot" class="btnCalc btnDarkGray" value=".">.</button> <button id="btnEquals" class="btnCalc btnOperator">&#x3d;</button></div>
                </div>
            </main>
        </section>

    )
}