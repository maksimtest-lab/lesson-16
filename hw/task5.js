try {
    const num1 = +prompt('Введите первое число:').trim();
    const num2 = +prompt('Введите второе число:').trim();

    if (isNaN(num1) || isNaN(num2)) {
        throw 'isNaN';
    } else if (num2 === 0) {
        throw 'DbZ';
    } else if (!isFinite(num1) || !isFinite(num2)) {
        throw 'Любая другая ошибка!';
    }

    const result = num1 / num2;
    console.log(`Результат: ${result}`);
} catch (error) {
    if (error === 'isNaN') {
        console.log('Введён нечисловой символ!');
    } else if (error === 'DbZ') {
        console.log('Деление на ноль!');
    } else {
        console.log(error);
    }
}
