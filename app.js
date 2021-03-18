const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResult = document.getElementById('add-result');
const addButton = document.getElementById('add-button');

const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractResult = document.getElementById('subtract-result');
const subtractButton = document.getElementById('subtract-button');

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyResult = document.getElementById('multiply-result');
const multiplyButton = document.getElementById('multiply-button');

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideResult = document.getElementById('divide-result');
const divideButton = document.getElementById('divide-button');


addButton.addEventListener('click', () => {
    addResult.textContent = Number(addInput1.value) + Number(addInput2.value);
});

subtractButton.addEventListener('click', () => {
    subtractResult.textContent = Number(subtractInput1.value) - Number(subtractInput2.value);
});

multiplyButton.addEventListener('click', () => {
    multiplyResult.textContent = Number(multiplyInput1.value) * Number(multiplyInput2.value);
});

divideButton.addEventListener('click', () => {
    divideResult.textContent = Number(divideInput1.value) / Number(divideInput2.value);
});