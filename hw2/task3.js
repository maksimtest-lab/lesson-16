const lang = prompt('Enter language').toLowerCase().trim();

if (lang === 'russian') {
    console.log('Привет');
} else if (lang === 'english') {
    console.log('Hello');
} else if (lang === 'italian') {
    console.log('Ciao');
} else if (lang === 'spanish') {
    console.log('Hola');
} else if (lang === 'french') {
    console.log('Salut');
} else {
    console.log("Sorry, I don\'t know this language");
}

// или

switch (lang) {
    case 'russian':
        console.log('Привет');
        break;
    case 'english':
        console.log('Hello');
        break;
    case 'italian':
        console.log('Ciao');
        break;
    case 'spanish':
        console.log('Hola');
        break;
    case 'french':
        console.log('Salut');
        break;
    default:
        console.log("Sorry, I don\'t know this language");
        break;
}
