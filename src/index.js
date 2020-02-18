"use strict";
let LAST = 0;
class Calculator {
  constructor() {
    this.resultArray = [];
    this.memory_slot = [];
  }

  add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    this.resultArray.push(sum);
    return sum;
  }
  multiply() {
    let product = 1;
    for (let i = 0; i < arguments.length; i++) {
      product *= arguments[i];
    }
    this.resultArray.push(product);
    return product;
  }
  last() {
    LAST = this.resultArray[this.resultArray.length - 1];
    return LAST;
  }
  set_slot(numSlot) {
    
    return numSlot;
  }
  get_slot(numSlot) {
      numSlot =this.resultArray[this.resultArray.length - 1]  
    return numSlot;
  }
}
let calc = new Calculator();
calc.add(1, 2);

console.log(calc.last());
// console.log(calc.add(LAST, 4, 5));
console.log(calc.resultArray);
console.log(calc.set_slot(1));
console.log(calc.get_slot(1) + " should return 3");
calc.add(10,20);
console.log(calc.set_slot(2));
console.log(calc.get_slot(2) + " should return 30");
calc.add(100, 200);
console.log(calc.get_slot(2) + "should return 30");
console.log(calc.get_slot(1) + " should return 3");


module.exports = Calculator;
