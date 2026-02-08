// zapxuli1.js — განახლებული ვერსია (ავტომატური გადამისამართებით cart.html-ზე)

// --- კალათის ლოგიკა --- //
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCountElement = document.querySelector(".cart-count");

// კალათის რაოდენობის განახლება
function updateCartCount() {
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// პროდუქტის დამატება კალათაში
function addToCart(event, productId) {
    event.preventDefault();

    // ვპოულობთ პროდუქტის ბარათს DOM-იდან
    const productCard = event.target.closest(".product-card");
    const title = productCard.querySelector(".product-title").textContent;
    const price = parseFloat(productCard.dataset.price);
    const img = productCard.querySelector("img").src;

    // ვამოწმებთ არის თუ არა ეს პროდუქტი უკვე კალათაში
    let existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            id: productId,
            title: title,
            price: price,
            image: img,
            quantity: 1
        });
    }

    // ვამახსოვრებთ localStorage-ში
    localStorage.setItem("cart", JSON.stringify(cart));

    // ვაახლებთ მაჩვენებელს
    updateCartCount();

    // მცირე ანიმაცია
    cartCountElement.classList.add("bump");
    setTimeout(() => cartCountElement.classList.remove("bump"), 300);

    // --------------------------------------------------------------------------------
    // ვარიანტი A — დაუყოვნებლივ გადამისამართება (თუ გინდა რომ სულ _მიყვე_ წაიყვანოს)
    // window.location.href = "cart.html";
    // --------------------------------------------------------------------------------

    // ვარიანტი B — მცირე დაგვიანებით გადამისამართება (300ms) რათა ანიმაცია დაინახოს მომხმარებელმა.
    // ამისთვის გამოიყენე ქვემოთ მიყოლებული ხაზი და კომენტარე A-სი, თუ ბ-ს გამოიყენებ:
    setTimeout(() => {
        window.location.href = "cart.html";
    }, 300);
    // --------------------------------------------------------------------------------
}

// პროდუქტის ნახვა
function viewProduct(event, productId) {
    event.preventDefault();
    window.location.href = `product.html?id=${productId}`;
}

// კალათის ხატულაზე დაჭერა -> გადამისამართება
document.querySelector(".cart-icon").addEventListener("click", () => {
    window.location.href = "cart.html";
});

// დასაწყისი — მაჩვენებლის განახლება გვერდის ჩატვირთვისას
updateCartCount();
