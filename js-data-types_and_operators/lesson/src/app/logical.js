const a = 10, b= 12, c= 8;

// &&
console.log(a && b); // && це і, якщо a && b обидва true то повернеться true;

// ||
console.log(a || b); // || це або, якщо a || b одне значення з них true то повернеться true;

// !
console.log(!(a && b)); // !(&&) це і, якщо a && b обидва true то повернеться false;

const greaterThanC = (a - b) > c;
const lessThanB = (a + c) > b;

const and = greaterThanC && lessThanB;
const or = reaterThanC || lessThanB;
const not = !(greaterThanC && lessThanB);

console.log(`&& ${and}\n|| ${or}\n! ${not}`);