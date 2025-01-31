try {
    throw new Error('Ошибка, которую я не знаю, как обработать!');
} catch (error) {
    console.log('Я не знаю, как обработать ошибку, пробрасываю дальше!');
    throw error;
}
