const month = parseInt(prompt('Введите номер месяца (1-12):'));

if (isNaN(month) || month < 1 || month > 12) {
    console.log('Некорректный ввод. Пожалуйста, введите число от 1 до 12.');
} else {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
    }
}

