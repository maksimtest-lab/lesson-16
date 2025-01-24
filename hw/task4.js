try {
    const userMark = +prompt('Введите оценку (0-100):');
    if (isNaN(userMark) || userMark < 0 || userMark > 100) {
        throw 'Оценка должна быть в диапазоне от 0 до 100';
    }

    if (userMark >= 90) {
        console.log('Отлично');
    } else if (userMark >= 70) {
        console.log('Хорошо');
    } else if (userMark >= 50) {
        console.log('Удовлетворительно');
    } else {
        console.log('Неудовлетворительно');
    }
} catch (error) {
    console.log(error);
}
