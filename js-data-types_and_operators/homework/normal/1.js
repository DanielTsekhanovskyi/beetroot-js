const moneyWallet = +prompt("Скільки грошей в гаманці?");
const chocolatePrice = +prompt('Яка ціна однієї шоколадки?');
const howManyChocolatesBuy = Math.trunc(moneyWallet / chocolatePrice);
const remainderOfMoney = moneyWallet % chocolatePrice;
console.log(`Ви можете купити ${howManyChocolatesBuy} шоколадок і ваш залишок буде ${remainderOfMoney}`);