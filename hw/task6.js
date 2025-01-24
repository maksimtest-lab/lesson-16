const userNumber = +prompt('Введите число от 1 до 3:').trim();

switch (userNumber) {
    case 1:
        console.log('Выиграл 100 очков.');
        break;
    case 2:
        console.log('Выиграл 50 очков.');
        break;
    case 3:
        console.log('Ничего не выиграл.');
        break;
    default:
        console.log('Вы ввели число вне диапазона!');
        break;
}
