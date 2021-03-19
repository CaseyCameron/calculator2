import { handleClick, } from './clickHandler.js';

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');
const universalButton = document.getElementById('universal-button');

addButton.addEventListener('click', handleClick);
subtractButton.addEventListener('click', handleClick);
multiplyButton.addEventListener('click', handleClick);
divideButton.addEventListener('click', handleClick);
universalButton.addEventListener('click', handleClick);