const flashDriveCapacity = +prompt('Який обсяг флешки в ГБ?');
const filesCount = Math.trunc(flashDriveCapacity / 820);
console.log('На цю флешку поміститься ' + filesCount + ' файлів з вагою 820мб');