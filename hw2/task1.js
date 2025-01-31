const userNumber = +prompt('Введите число:');

if (isNaN(userNumber)) {
    console.log('Введено нечисловое значение!');
} else if (userNumber % 2 === 0) {
    console.log('Число является чётным.');
} else {
    console.log('Число не является чётным.');
}