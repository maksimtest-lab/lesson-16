const num1 = +prompt('Введите первое число:').trim();
const num2 = +prompt('Введите второе число:').trim();
const operation = prompt('Выберите операцию (+, -, *, /):').trim();

let result;

try {
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                throw 'Деление на ноль!';
            }
            result = num1 / num2;
            break;
        default:
            throw 'Неверная операция!';
    }
    console.log(`Результат: ${result}`);
} catch (error) {
    console.error(error);
}
