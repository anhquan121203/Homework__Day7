/**
 * #Homework:
1. Difference(s) between == and ===?
    ==: chỉ so sánh giá trị, kh so sánh kiểu dữ liệu
        Ex: 5 == "5" -> true, vì 5 = 5
    ===: chỉ so sánh giá trị và kiểu dữ liệu
        Ex: 5 === "5" -> false, vì "5" => string
2. Use variables and operators to:
    - Calculate BMI (Body Mass Index)
    - Calculate Simple Interest (principal * rate * time)
    - Convert Currency (USD to local currency)
    - Calculate Time (hours:minutes:seconds)

*/

//   Calculate BMI
let weight = 55;
let height = 1.74;

const BMI = weight / (height * height);

console.log("BMI: ", BMI.toFixed(2));

// Calculate Simple Interest (principal * rate * time) USD
const principal = 20000;
const rate = 0.2;
const time = 12;

const Interest = principal * rate * time;
console.log("Interest: ", Interest);

// Convert Currency (USD to local currency) USD -> VND
let money = 35000;
const local = 25000;

const Currency = money * local;
console.log("Currency: ", Currency);

// Calculate Time (hours:minutes:seconds)

let now = new Date();
let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");
let seconds = now.getSeconds().toString().padStart(2, "0");
let timeNow = `${hours}:${minutes}:${seconds}`;
console.log("TimeNow: ", timeNow);

/**
#Additional challenges:
    - Add more variables to make calculations more complex
    - Try using different mathematical operators
    - Print results in different formats
    - Think about edge cases (negative numbers, zero, etc.)
    - Compare let, const, var
 */

/**
 * let: giá trị có thể thay đổi được
 * const: giá trị không thể thay đổi được vì nó là một hằng số
 * var: có thể khai báo được ở ngoài phạm vi {}
 * EX:  function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); 
}
example();

 */

/**
var x = 10;
var x = 20;


let y = 30;
let y = 40;

 */
