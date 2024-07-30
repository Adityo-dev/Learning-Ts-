/*  Learning function
1. Normal function
2. Arrow function
 */

//  Normal function--->
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

// add(50, true); //wring
add(50, 20);

//  Arrow function--->

const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(20, 50);

// Object --> function --> method------------------->
const poorUser = {
  name: "koushik",
  balance: 0,
  addBalance(newBalance: number): string {
    return `My new balance is : ${this.balance + newBalance}`;
  },
};

// Map Array
const array = [1, 5, 4, 30, 50];

const newArray: number[] = array.map((elem: number): number => elem * elem);
