const userQuestion = prompt('Спроси меня что-нибудь:').toLowerCase().trim();

switch (userQuestion) {
    case 'как тебя зовут?':
        console.log('Клава');
        break;
    case 'как у тебя дела?':
        console.log('Хорошо, а у тебя?');
        break;
    case 'сколько тебе лет?':
        console.log('Много-много');
        break;
    default:
        console.log('Я еще не знаю таких слов');
        break;
}
