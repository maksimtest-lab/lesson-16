try {
    const randomNumber = Math.floor(Math.random() * 10);
    const userNumber = +prompt('Угадайте число от 1 до 10:').trim();

    if (isNaN(userNumber)) {
        throw 'Введено нечисловое значение!';
    } else if (userNumber == randomNumber) {
        console.log('Поздравляю, вы угадали!');
    } else {
        console.log(`Неправильно. Загаданное число было ${randomNumber}.`);
    }
} catch (error) {
    console.log(error);
}

