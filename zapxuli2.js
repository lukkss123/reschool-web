const products = [
    { id: 1, name: "MacBook Pro", category: "Laptop", brand: "Apple", price: 5500 },
    { id: 2, name: "iPhone 14", category: "Phone", brand: "Apple", price: 3200 },
    { id: 3, name: "Galaxy S23", category: "Phone", brand: "Samsung", price: 2800 },
    { id: 4, name: "Galaxy Book", category: "Laptop", brand: "Samsung", price: 4000 },
];

let filteredProducts = [...products];

function renderProducts() {
    const list = document.getElementById("product-list");
    list.innerHTML = "";
    filteredProducts.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.price} ₾</p>
            <button onclick="addToCart(${p.id})">კალათაში დამატება</button>
        `;
        list.appendChild(div);
    });
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find(c => c.id === id);
    if (item) {
        item.qty++;
    } else {
        let product = products.find(p => p.id === id);
        cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

function filterProducts() {
    const search = document.getElementById("search").value.toLowerCase();
    const categories = [...document.querySelectorAll(".filter-category:checked")].map(c => c.value);
    const brands = [...document.querySelectorAll(".filter-brand:checked")].map(b => b.value);
    const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
    const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;

    filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(search) &&
        (categories.length ? categories.includes(p.category) : true) &&
        (brands.length ? brands.includes(p.brand) : true) &&
        p.price >= minPrice && p.price <= maxPrice
    );

    sortProducts();
}

function sortProducts() {
    const sort = document.getElementById("sort").value;
    if (sort === "price-asc") filteredProducts.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") filteredProducts.sort((a, b) => b.price - a.price);
    if (sort === "name-asc") filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "name-desc") filteredProducts.sort((a, b) => b.name.localeCompare(a.name));

    renderProducts();
}

document.getElementById("search").addEventListener("input", filterProducts);
document.querySelectorAll(".filter-category, .filter-brand").forEach(el => el.addEventListener("change", filterProducts));
document.getElementById("min-price").addEventListener("input", filterProducts);
document.getElementById("max-price").addEventListener("input", filterProducts);
document.getElementById("sort").addEventListener("change", filterProducts);

renderProducts();





