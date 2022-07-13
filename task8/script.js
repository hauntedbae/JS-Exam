/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
  this.getSum = () => {
    return this.number1 + this.number2;
  };
  this.getSubtraction = () => {
    return this.number1 - this.number2;
  };
  this.getMultiplication = () => {
    return this.number1 * this.number2;
  };
  this.getDivision = () => {
    return this.number1 / this.number2;
  };
}

const numbersAnswer = new Calculator(5, 8);
console.log(numbersAnswer.getSum());
console.log(numbersAnswer.getSubtraction());
console.log(numbersAnswer.getMultiplication());
console.log(numbersAnswer.getDivision());
