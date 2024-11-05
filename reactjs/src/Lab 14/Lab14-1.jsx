// WAP to create a simple calculator using ReactJS.

import { useState } from 'react';
import './Lab14-1 Styles.css';

function SimpleCalculatorApp() {
    const [input, setInput] = useState('');

    function display(n) {
        setInput(input + n);
    }

    function plusMinus() {
        setInput((prevInput) => (prevInput.startsWith('-') ? prevInput.slice(1) : '-' + prevInput));
    }

    function equalTo() {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    }
    
    function allClear() {
        setInput("");
    }

    function clearFunction() {
        setInput(input.slice(0, -1));
    }

    return (
        <center>
            <h2>Simple Calculator</h2>
            <div>
                <input type="text" id="Box" value={input} readOnly />
            </div><br />
            <div>
                <button onClick={() => display('%')}>%</button>&nbsp;&nbsp;&nbsp;
                <button onClick={clearFunction}>C</button>&nbsp;&nbsp;&nbsp;
                <button onClick={allClear}>AC</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('/')}>/</button><br /><br />
            </div>
            <div>
                <button onClick={() => display('7')}>7</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('8')}>8</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('9')}>9</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('*')}>X</button><br /><br />
            </div>
            <div>
                <button onClick={() => display('4')}>4</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('5')}>5</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('6')}>6</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('-')}>-</button><br /><br />
            </div>
            <div>
                <button onClick={() => display('1')}>1</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('2')}>2</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('3')}>3</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('+')}>+</button><br /><br />
            </div>
            <div>
                <button onClick={plusMinus}><sup>+</sup>/<sub>-</sub></button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('0')}>0</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => display('.')}>.</button>&nbsp;&nbsp;&nbsp;
                <button onClick={equalTo}>=</button><br /><br />
            </div>
        </center>
    );
}

export default SimpleCalculatorApp;
