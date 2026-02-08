/*
 * script.js - JavaScript ლოგიკა (ლურჯი ფერი)
 * გამოიყენება Promises ამინდის მონაცემების "ასინქრონულად" მისაღებად
 */

// ლოკალური მონაცემთა ბაზა ქალაქებისთვის
const weatherData = {
    "თბილისი": { temp: "22°C", condition: "მზიანი", wind: "5 მ/წმ", humidity: "60%" },
    "ქუთაისი": { temp: "18°C", condition: "ღრუბლიანი", wind: "8 მ/წმ", humidity: "75%" },
    "ბათუმი": { temp: "24°C", condition: "წვიმიანი", wind: "12 მ/წმ", humidity: "85%" },
    "რუსთავი": { temp: "25°C", condition: "ქარიანი", wind: "15 მ/წმ", humidity: "55%" },
    "ზუგდიდი": { temp: "20°C", condition: "ნაწილობრივ ღრუბლიანი", wind: "6 მ/წმ", humidity: "70%" },
};

// DOM ელემენტების შერჩევა
const citySelect = document.getElementById('city-select');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.getElementById('weather-info');
const loadingMessage = document.getElementById('loading-message');

/**
  ფუნქცია ამინდის მონაცემების "მისაღებად" Promise-ის გამოყენებით.
 * @param {string} city - ქალაქის სახელი
 * @returns {Promise<Object>} - Promise, რომელიც აბრუნებს ამინდის ობიექტს ან შეცდომას.
 */
function getWeatherData(city) {
    // ლოდინის სიმულაცია (თითქოს გარე API-ს ვუგზავნით მოთხოვნას)
    loadingMessage.style.display = 'block'; // აჩვენებს ლოდინის შეტყობინებას
    weatherInfo.innerHTML = ''; // წმენდს შედეგებს

    return new Promise((resolve, reject) => {
        // სიმულაცია: 1-დან 2 წამამდე ლოდინი
        setTimeout(() => {
            loadingMessage.style.display = 'none'; // მალავს ლოდინის შეტყობინებას
            
            const data = weatherData[city];

            if (data) {
                // Promise წარმატებით შესრულდა
                resolve(data);
            } else {
                // Promise შეცდომით შესრულდა
                reject(new Error(`ქალაქი "${city}" მონაცემთა ბაზაში ვერ მოიძებნა.`));
            }
        }, 1500); // 1.5 წამი
    });
}

/**
 * ამინდის მონაცემების ჩვენება DOM-ში
 * @param {string} city - ქალაქის სახელი
 * @param {Object} data - ამინდის მონაცემები
 */
function displayWeather(city, data) {
    weatherInfo.innerHTML = `
        <p><strong>ქალაქი:</strong> <span style="color: #0000ff;">${city}</span></p>
        <p class="temp">ტემპერატურა: ${data.temp}</p>
        <p><strong>მდგომარეობა:</strong> <span style="color: #0000ff;">${data.condition}</span></p>
        <p><strong>ქარი:</strong> ${data.wind}</p>
        <p><strong>ტენიანობა:</strong> ${data.humidity}</p>
    `;
}

/**
 * შეცდომის შეტყობინების ჩვენება DOM-ში
 * @param {string} message - შეცდომის ტექსტი
 */
function displayError(message) {
    weatherInfo.innerHTML = `<p class="error-message">შეცდომა: ${message}</p>`;
}

// ღილაკზე დაჭერის დამმუშავებელი
searchButton.addEventListener('click', () => {
    const selectedCity = citySelect.value;
    
    if (!selectedCity) {
        displayError("გთხოვთ აირჩიოთ ქალაქი სიიდან.");
        return;
    }

    // Promise-ის გამოყენება მონაცემების მისაღებად
    getWeatherData(selectedCity)
        .then(data => {
            // .then() - თუ Promise წარმატებით შესრულდა
            console.log(`%c მონაცემები მიღებულია: ${selectedCity}`, 'color: blue;');
            displayWeather(selectedCity, data);
        })
        .catch(error => {
            // .catch() - თუ Promise შეცდომით შესრულდა
            console.error(`%c შეცდომა: ${error.message}`, 'color: red;');
            displayError(error.message);
        });
});