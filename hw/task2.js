const hour = parseInt(prompt('Введите час (целое число от 0 до 23 включительно):'));

console.log(`Введенное число: ${hour}`);

if (isNaN(hour) || hour < 0 || hour > 23) {
    console.log('Некорректный ввод. Пожалуйста, введите число от 0 до 23.');
} else if (hour >= 0 && hour <= 5) {
    console.log('Ночь');
} else if (hour >= 6 && hour <= 11) {
    console.log('Утро');
} else if (hour >= 12 && hour <= 17) {
    console.log('День');
} else {
    console.log('Вечер');
}

