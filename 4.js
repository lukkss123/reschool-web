const products = [
  { name: "ლეპტოპი", category: "ტექნოლოგია", price: 1200 },
  { name: "მაისური", category: "ტანსაცმელი", price: 25 },
  { name: "სმარტფონი", category: "ტექნოლოგია", price: 800 },
  { name: "წიგნი", category: "წიგნები", price: 15 },
  { name: "ყურსასმენები", category: "ტექნოლოგია", price: 100 }
];


const techProducts = products.filter(product => product.category === "ტექნოლოგია");


const updatedPrices = techProducts.map(product => product.price * 1.10);


const total = updatedPrices.reduce((sum, price) => sum + price, 0);

console.log("ტექნოლოგიური პროდუქტების ახალი ფასების ჯამი:", total)




const students = [
  { name: "გიორგი", grade: 85 },
  { name: "მარიამი", grade: 92 },
  { name: "ლუკა", grade: 78 },
  { name: "ანა", grade: 95 },
  { name: "დათო", grade: 70 },
  { name: "სალომე", grade: 88 }
];


const sortedStudents = students.slice().sort((a, b) => b.grade - a.grade);


const total = students.reduce((sum, student) => sum + student.grade, 0);
const average = total / students.length;

const aboveAverageCount = students.filter(student => student.grade > average).length;

console.log("დალაგებული სია კლებადობით:", sortedStudents);
console.log("საშუალო ქულა:", average);
console.log("საშუალოზე მაღალი ქულების რაოდენობა:", aboveAverageCount);
