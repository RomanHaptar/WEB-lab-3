// Створюємо функцію для отримання даних з API
function fetchData() {
    // Очищаємо інформацію про попередніх користувачів
    document.getElementById('info').innerHTML = '';

    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => data.results.forEach(displayData))
        .catch(error => console.error('Error:', error));
}

// Створюємо функцію для виведення даних на сторінку
function displayData(data) {
    const info = document.getElementById('info');

    // Створюємо div для кожного користувача
    const infoCard = document.createElement('div');
    infoCard.className = 'infoCard';

    // Виводимо картинку
    const img = document.createElement('img');
    img.src = data.picture.large;
    infoCard.appendChild(img);

    // Виводимо ім'я
    const name = document.createElement('p');
    name.textContent = `Name: ${data.name.first} ${data.name.last}`;
    infoCard.appendChild(name);

    // Виводимо країну
    const country = document.createElement('p');
    country.textContent = `Country: ${data.location.country}`;
    infoCard.appendChild(country);

    // Виводимо поштовий індекс
    const postcode = document.createElement('p');
    postcode.textContent = `Postcode: ${data.location.postcode}`;
    infoCard.appendChild(postcode);

    // Виводимо телефон
    const phone = document.createElement('p');
    phone.textContent = `Phone: ${data.phone}`;
    infoCard.appendChild(phone);

    // Додаємо div користувача до головного div
    info.appendChild(infoCard);
}

// Додаємо обробник подій для кнопки завантаження даних
document.getElementById('loadData').addEventListener('click', fetchData);
