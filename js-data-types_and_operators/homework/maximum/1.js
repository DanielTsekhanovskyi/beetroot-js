const depositAmount= +prompt('Назвіть суму вкладу в банк на 2 місяці');
const interestRate= 0.05;
const months= 2;

const interest= depositAmount * interestRate * months / 12;
console.log(`Сума нарахованих відсотків: ${interest} гривень`);