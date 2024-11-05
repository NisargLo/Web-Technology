// WAP to create a scientific calculator using ReactJS.

import React, { useState } from 'react';
import './Lab14-2 Styles.css';

function ScientificCalculatorApp() {
    const [input, setInput] = useState("");

    const display = (n) => {
        setInput(prevInput => prevInput + n);
    };

    const plusMinus = () => {
        setInput(prevInput => {
            const newValue = parseFloat(prevInput);
            if (isNaN(newValue)) {
                return "Error";
            }
            return (-newValue).toString();
        });
    };

    const equalTo = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const allClear = () => {
        setInput("");
    };

    const clearFunction = () => {
        setInput(input.slice(0, -1));
    };

    const X_Inverse = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else if (value === 0) {
            setInput("Error: Division by zero");
        } else {
            setInput((1 / value).toString());
        }
    };

    const X_Power = () => {
        const value = parseFloat(input);
        const exponent = prompt("Enter exponent:");
        if (isNaN(value) || isNaN(exponent)) {
            setInput("Error");
        } else {
            setInput(Math.pow(value, exponent).toString());
        }
    };

    const X_2Power = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.pow(value, 2).toString());
        }
    };

    const X_3Power = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.pow(value, 3).toString());
        }
    };

    const Square_Root = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.sqrt(value).toString());
        }
    };

    const My_Log = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.log10(value).toString());
        }
    };

    const My_Ln = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.log(value).toString());
        }
    };

    const sin_func = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.sin(value).toString());
        }
    };

    const asin_func = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.asin(value).toString());
        }
    };

    const cos_func = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.cos(value).toString());
        }
    };

    const acos_func = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.acos(value).toString());
        }
    };

    const tan_func = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.tan(value).toString());
        }
    };

    const atan_func = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setInput("Error");
        } else {
            setInput(Math.atan(value).toString());
        }
    };

    function nCr() {
        let n = parseInt(input);
        if (isNaN(n) || n < 0) {
            setInput("Error: Invalid input for n");
            return;
        }
        let r = parseInt(prompt("Enter r (for nCr): "));
        if (isNaN(r) || r < 0 || r > n) {
            setInput("Error: Invalid input for r");
            return;
        }
        let result = My_factorial(n) / (My_factorial(r) * My_factorial(n - r));
        setInput(result);
    }

    function nPr() {
        let n = parseInt(input);
        if (isNaN(n) || n < 0) {
            setInput("Error: Invalid input for n");
            return;
        }
        let r = parseInt(prompt("Enter r (for nPr): "));
        if (isNaN(r) || r < 0 || r > n) {
            setInput("Error: Invalid input for r");
            return;
        }
        let result = My_factorial(n) / My_factorial(n - r);
        setInput(result);
    }

    const My_factorial = (n) => {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    };

    return (
        <center>
            <h2>Scientific Calculator</h2>
            <div>
                <form method="post">
                    <input type="text" id="Box" value={input} readOnly />
                </form><br />
            </div>
            <div>
                <button type="button" id="X_Inverse" onClick={() => X_Inverse()}>x<sup>-1</sup></button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="X_Power" onClick={() => X_2Power()}>x<sup>2</sup></button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="X_Power" onClick={() => X_3Power()}>x<sup>3</sup></button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="X_Power" onClick={() => X_Power()}>x<sup>n</sup></button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="Square_Root" onClick={() => Square_Root()}>sqrt(x)</button><br /><br />
            </div>
            <div>
                <button type="button" id="sin_func" onClick={() => sin_func()}>sin(x)</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="cos_func" onClick={() => cos_func()}>cos(x)</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="tan_func" onClick={() => tan_func()}>tan(x)</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="My_Log" onClick={() => My_Log()}>log(x)</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="My_Combination" onClick={() => nPr()}><sup>n</sup>P<sub>r</sub></button><br /><br />
            </div>
            <div>
                <button type="button" id="asin_func" onClick={() => asin_func()}>sin<sup>-1</sup>(x)</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="acos_func" onClick={() => acos_func()}>cos<sup>-1</sup>(x)</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="atan_func" onClick={() => atan_func()}>tan<sup>-1</sup>(x)</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="My_Ln" onClick={() => My_Ln()}>ln(x)</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="My_Combination" onClick={() => nCr()}><sup>n</sup>C<sub>r</sub></button><br /><br />
            </div>
            <div>
                <button type="button" id="six" value="6" onClick={() => display(6)}>6</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="seven" value="7" onClick={() => display(7)}>7</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="eight" value="8" onClick={() => display(8)}>8</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="nine" value="9" onClick={() => display(9)}>9</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="divide" value="/" onClick={() => display('/')}>/</button><br /><br />
            </div>
            <div>
                <button type="button" id="two" value="2" onClick={() => display(2)}>2</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="three" value="3" onClick={() => display(3)}>3</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="four" value="4" onClick={() => display(4)}>4</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="five" value="5" onClick={() => display(5)}>5</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="multiply" value="*" onClick={() => display('*')}>X</button><br /><br />
            </div>
            <div>
                <button type="button" id="plusMinus" onClick={() => plusMinus()}><sup>+</sup>/<sub>-</sub></button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="dot" value="." onClick={() => display('.')}>.</button>&nbsp;&nbsp;&nbsp;
                <button id="zero" value="0" onClick={() => display(0)}>0</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="one" value="1" onClick={() => display(1)}>1</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="plus" value="+" onClick={() => display('+')}>+</button><br /><br />
            </div>
            <div>
                <button type="button" id="clearfunction" onClick={() => clearFunction()}>C</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="allclear" onClick={() => allClear()}>AC</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="equalto" onClick={() => equalTo()}>=</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="modulo" value="%" onClick={() => display('%')}>%</button>&nbsp;&nbsp;&nbsp;
                <button type="button" id="minus" value="-" onClick={() => display('-')}>-</button><br /><br />
            </div>
        </center>
    );
}

export default ScientificCalculatorApp;
