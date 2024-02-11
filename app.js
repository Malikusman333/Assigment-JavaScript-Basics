// Question 1//
let strg="My name is Muhammad Usman."
let reversedStr = '';
  for (let i = strg.length - 1; i >= 0; i--) {
    reversedStr += strg[i];
  }
console.log(reversedStr);

// Question 2//
const str="My name is Muhammad Usman.";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' ||
str[i] === 'O' || str[i] === 'U') {
        count++;
  }
}
console.log("Number of vowels in given string are: " , count);

// Question 3//
function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  // Directly return the joined string
  return splitStr.join(' '); 
}

document.write(titleCase("I'm a little tea pot"));

// Question4//

// program to check if the string is palindrome or not

function checkPalindrome(string) {

  // convert string to an array
  const arrayValues = string.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      console.log('It is a palindrome');
  }
  else {
      console.log('It is not a palindrome');
  }
}

//take input
const string = prompt('Enter a string: ');

checkPalindrome(string);

// Question 5//
let arr = [-52, -2, 13, -24, 0, 5, -6, 12 ,56,17];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
  }
}
console.log("Sum of positive numbers:", sum);

// Question 6//
let ar = [3, 7, 1, 9, 4, 2];
let element = 2;
let index = -1;
for (let i = 0; i < ar.length; i++) {
  if (ar[i] === element) {
    index = i;
    break;
  }
}
console.log("Index of first occurrence:", index);

// Question 7//

const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

function removeDuplicate(arr) {
    const result = [];
    let idx = 0;
    const tmp = {};

    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            result[idx] = arr[i];
            idx++;
        } 
    }
    return result;
}

console.log(removeDuplicate(input));

// Question 8//

function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);

// Question 9//
let num = 1;
while(num <= 20){
  if(num % 2 === 0){
    console.log(num);
  }
  num++;
}

// Question 10//

const
  msgPrompt_1 = 'Please enter a number from 0 to 100', 
  msgPrompt_n = 'Try again.... Enter a  number 0-100',
  fact        = n =>
    {
    let r = 1
    while(n) r *= n--
    return r
    }

let numValue = parseInt(window.prompt(msgPrompt_1, ''), 10)

while(isNaN(numValue) || numValue > 100 || numValue < 0) 
  {
  numValue = parseInt(window.prompt(msgPrompt_n, ''), 10)
  }

alert(`factorial value of ${numValue} is = ${fact(numValue)}`  )

// Question 11//
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// Question 12//

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Question 13//
let Num=22;
if(Num % 2===0){
    console.log("= Number is Even");
}
else{
    console.log("Number is Odd");
}

// Question 14//

// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);


// Question 15//

// program to check leap year
function checkLeapYear(year) {

  //three conditions to find out the leap year
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      console.log(year + ' is a leap year');
  } else {
      console.log(year + ' is not a leap year');
  }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);