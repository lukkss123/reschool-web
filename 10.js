class Car {
constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.isOn = false;
}

start() {
    if (this.isOn) return `${this.brand} ${this.model} უკვე ჩართულია.`;
    this.isOn = true;
    return `${this.brand} ${this.model} ჩაირთო.`;
}

stop() {
    if (!this.isOn && this.speed === 0) return `${this.brand} ${this.model} უკვე გამორთულია.`;
    this.isOn = false;
    this.speed = 0;
    return `${this.brand} ${this.model} გამოირთო.`;
}

accelerate(amount) {
    if (!this.isOn) return `მანქანა გამორთულია — ვერ აჩქარებ.`;
    this.speed += amount;
    if (this.speed < 0) this.speed = 0;
    return `სიჩქარეა: ${this.speed} km/h`;
}

getStatus() {
    return `მდგომარეობა: ${this.isOn ? 'ჩართულია' : 'გამორთულია'}, სიჩქარე: ${this.speed} km/h`;
}
}

// მაგალითი:
const myCar = new Car("BMW", "M3");

console.log(myCar.start());
console.log(myCar.accelerate(300));
console.log(myCar.getStatus());
console.log(myCar.stop());




class BankAccount {

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.balance = initialBalance;
    this.transactions = [];
  }


  deposit(amount) {
    if (amount <= 0) return "თანხა უნდა იყოს დადებითი!";
    this.balance += amount;
    this.transactions.push({ type: "შეტანა", amount, date: new Date() });
    return `შეტანილია ${amount}₾. მიმდინარე ბალანსი: ${this.balance}₾`;
  }


  withdraw(amount) {
    if (amount <= 0) return "თანხა უნდა იყოს დადებითი!";
    if (amount > this.balance) return "ბალანსი არასაკმარისია!";
    this.balance -= amount;
    this.transactions.push({ type: "გამოტანა", amount, date: new Date() });
    return `გამოტანილია ${amount}₾. მიმდინარე ბალანსი: ${this.balance}₾`;
  }


  getBalance() {
    return `ბალანსი: ${this.balance}₾`;
  }

 
  getTransactionHistory() {
    if (this.transactions.length === 0) return "ტრანზაქციები ჯერ არ განხორციელებულა.";
    return this.transactions.map((t, i) => 
      `${i + 1}. ${t.type}: ${t.amount}₾ (${t.date.toLocaleString()})`
    ).join("\\n");
  }
}


const account = new BankAccount("luka", 100);
console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.getBalance());
console.log(account.getTransactionHistory());
