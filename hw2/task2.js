const userLanguage = prompt('Введите язык программирования, на котором вы работаете:').toLowerCase().trim();

if (userLanguage === 'js') {
    console.log('Вы фронтенд-разработчик!');
} else if (['python', 'java', 'c++'].includes(userLanguage)) {
    console.log('Вы бэкенд-разработчик!');
} else {
    console.log('Вы не работаете с языками из списка!');
}
