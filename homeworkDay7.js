/**
 * #Homework:
1. Difference(s) between == and ===?
    ==: compare only value, not data type
        Ex: 5 == "5" -> true, because 5 = 5
    ===: compare only value and data type
        Ex: 5 === "5" -> false, because "5" => string
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
function calculateTime(value, time) {
  let totalSeconds;

  if (time === "minutes") {
    totalSeconds = value * 60;
  } else if (time === "seconds") {
    totalSeconds = value;
  } else {
    console.log("Invalid unit. Please enter 'minutes' or 'seconds'.");
    return;
  }

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  console.log(
    `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2,"0")}`
  );
}

calculateTime(500, "minutes");
calculateTime(1000, "minutes")

/**
#Additional challenges:
    - Add more variables to make calculations more complex
    - Try using different mathematical operators
    - Print results in different formats
    - Think about edge cases (negative numbers, zero, etc.)
    - Compare let, const, var
 */

/**
* let: value can be changed
* const: value cannot be changed because it is a constant
* var: can be declared outside the scope {}
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
