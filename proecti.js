let cars = [
    { id: 1, name: "Mustang", brand: "Ford", year: 1969, color: "Red" },
    { id: 2, name: "Supra", brand: "Toyota", year: 1998, color: "White" },
    { id: 3, name: "M3", brand: "BMW", year: 2015, color: "Blue" },
    { id: 4, name: "Charger", brand: "Dodge", year: 1970, color: "Black" },
    { id: 5, name: "GTR", brand: "Nissan", year: 2017, color: "Gray" }
];

const cards = document.getElementById("cards");
const addBtn = document.getElementById("add");

function showCards() {
    cards.innerHTML = "";
    cars.forEach(car => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${car.name}</h3>
            <p>Brand: ${car.brand}</p>
            <p>Year: ${car.year}</p>
            <p>Color: ${car.color}</p>
            <button onclick="removeCar(${car.id})">Delete</button>
        `;
        cards.appendChild(div);
    });
}

function removeCar(id) {
    cars = cars.filter(c => c.id !== id);
    showCards();
}

addBtn.onclick = () => {
    let name = document.getElementById("name").value;
    let brand = document.getElementById("brand").value;
    let year = document.getElementById("year").value;
    let color = document.getElementById("color").value;

    if (!name || !brand || !year || !color) return;

    cars.push({
        id: Date.now(),
        name,
        brand,
        year,
        color
    });

    showCards();
};

showCards();

