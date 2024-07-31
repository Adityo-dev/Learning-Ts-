"use strict";
/*  Learning function
1. Normal function
2. Arrow function
 */
//  Normal function--->
function add(num1, num2 = 10) {
    return num1 + num2;
}
// add(50, true); //wring
add(50, 20);
//  Arrow function--->
const addArrow = (num1, num2) => num1 + num2;
addArrow(20, 50);
// Object --> function --> method------------------->
const poorUser = {
    name: "koushik",
    balance: 0,
    addBalance(newBalance) {
        return `My new balance is : ${this.balance + newBalance}`;
    },
};
// Map Array
const array = [1, 5, 4, 30, 50];
const newArray = array.map((elem) => elem * elem);
