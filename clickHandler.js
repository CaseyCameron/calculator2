import { add, subtract, multiply, divide, } from './utils.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResult = document.getElementById('add-result');

const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractResult = document.getElementById('subtract-result');

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyResult = document.getElementById('multiply-result');

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideResult = document.getElementById('divide-result');

const universalInput1 = document.getElementById('universal-input-1');
const universalInput2 = document.getElementById('universal-input-2');
const universalResult = document.getElementById('universal-result');



export function handleClick(e){ 
    if (e.target.value === 'add'){
        const value1 = Number(addInput1.value);
        const value2 = Number(addInput2.value);
        addResult.textContent = add(value1, value2);
    } else if (e.target.value === 'subtract') {
        const value1 = Number(subtractInput1.value);
        const value2 = Number(subtractInput2.value);
        subtractResult.textContent = subtract(value1, value2);
    } else if (e.target.value === 'multiply'){
        const value1 = Number(multiplyInput1.value);
        const value2 = Number(multiplyInput2.value);
        multiplyResult.textContent = multiply(value1, value2);
    } else if (e.target.value === 'divide'){
        const value1 = Number(divideInput1.value);
        const value2 = Number(divideInput2.value);
        divideResult.textContent = divide(value1, value2);
    } 
    
    else if (e.target.value === 'universal'){
        console.log('I made it');
        if (e.target.value === 'special-add'){
            const value1 = Number(universalInput1.value);
            const value2 = Number(universalInput2.value);
            universalResult.textContent = add(value1, value2);
        } else if (e.target.value === 'subtract') {
            const value1 = Number(subtractInput1.value);
            const value2 = Number(subtractInput2.value);
            subtractResult.textContent = subtract(value1, value2);
        } else if (e.target.value === 'multiply'){
            const value1 = Number(multiplyInput1.value);
            const value2 = Number(multiplyInput2.value);
            multiplyResult.textContent = multiply(value1, value2);
        } else if (e.target.value === 'divide'){
            const value1 = Number(divideInput1.value);
            const value2 = Number(divideInput2.value);
            divideResult.textContent = divide(value1, value2);
        }
    }
}