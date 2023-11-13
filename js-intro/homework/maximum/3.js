const dollarAmmount = +prompt('Скільки потрібно конвертувати долларів');
const dollar = dollarAmmount * 36;
const exchangeRate = dollar / 38.5;
const euro = exchangeRate;
console.log('Після конвертування ти отримаєш: ' + euro);
