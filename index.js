
function handleButton(val){
  console.log(val);
}
let num = '';
let arr = [];
function evaluateMath(expresionArr){
  const mathExp = console.log(expresionArr.join(' '));
  const result = eval(mathExp);
  return result;
  
}
console.log(result);

function handleNumber(val) {
  num += val;
  const display = document.getElementById('calculator-display');
  display.innerText = num;
}

function handleOperator(operator){
  if(num === '') return;
  arr.push(num);
  arr.push(operator);
  num = '';
}

function handleResult(){
  arr.push(num);
  num='';
  const result = evaluateMath(arr);
  const display = document.getElementById('calculator-display');
  display.innerText = result;
  arr=[];
  console.log(result);
}