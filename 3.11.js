const input1 = "I have 2 cats, 14 apples and 300 candies";
const numbers = input1.match(/\d+/g) || []; 
console.log(numbers); 


function isOnlyLatinLetters(str) {
  return /^[A-Za-z]+$/.test(str);
}

console.log(isOnlyLatinLetters("Hello"));    
console.log(isOnlyLatinLetters("Hello123"));  
console.log(isOnlyLatinLetters(""));   



const input3 = "This   is  a    test";
const collapsed = input3.replace(/ {2,}/g, ' ');

