// Higher-Order Function
function filterNumbers(numbers, callback) {
    const result = [];
    for (let number of numbers) {
        if (callback(number)) {
            result.push(number);
        }
    }
    return result;
}

// Callback ფუნქცია – ამოწმებს ლუწ რიცხვებს
function isEven(number) {
    return number % 2 === 0;
}

// Callback ფუნქცია – ამოწმებს კენტ რიცხვებს
function isOdd(number) {
    return number % 2 !== 0;
}

// მაგალითი მასივი
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filterNumbers გამოყენება ლუწებისთვის
const evenNumbers = filterNumbers(numbers, isEven);
console.log("ლუწი რიცხვები:", evenNumbers);

// filterNumbers გამოყენება კენტებისთვის
const oddNumbers = filterNumbers(numbers, isOdd);
console.log("კენტი რიცხვები:", oddNumbers);




// რიცხვების მასივი
let number = [1, 2, 3, 4, 5];

// Higher-Order Function
function applyToArray(arr, callback) {
    const result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

// Callback ფუნქცია – აორმაგებს რიცხვს
function double(num) {
    return num * 2;
}

// Callback ფუნქცია – აბრუნებს რიცხვის კვადრატს
function square(num) {
    return num * num;
}

// applyToArray ფუნქციის გამოძახება ორჯერ
const doubled = applyToArray(numbers, double);
console.log("აორმაგებული რიცხვები:", doubled);

const squared = applyToArray(numbers, square);
console.log("კვადრატში აყვანილი რიცხვები:", squared);





// სახელების მასივი
let names = ["Anna", "Luka", "Nino", "Giorgi", "Sopo"];

// Higher-Order Function
function filterNames(names, callback) {
    const result = [];
    for (let name of names) {
        if (callback(name)) {
            result.push(name);
        }
    }
    return result;
}

// Callback ფუნქცია – აბრუნებს true თუ სახელი იწყება "A"-ზე
function startsWithA(name) {
    return name.startsWith("A");
}

// Callback ფუნქცია – აბრუნებს true თუ სახელის სიგრძე მეტია 4-ზე
function longerThanFour(name) {
    return name.length > 4;
}

// filterNames ფუნქციის გამოძახება ორჯერ
const namesStartingWithA = filterNames(names, startsWithA);
console.log("სახელები, რომლებიც იწყება 'A'-ზე:", namesStartingWithA);

const namesLongerThanFour = filterNames(names, longerThanFour);
console.log("სახელები, რომლებიც 4 ასოზე გრძელია:", namesLongerThanFour);
