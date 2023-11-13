const distance = +prompt('Яка відстань в кілометрах між двома містами?');
const time = +prompt('За скільки годин ти хочеш дістатися');
const km_h = distance / time;
console.log('Щоб встигнути вчасно потрібно їхати з шидкістю ' + km_h + '/годину');