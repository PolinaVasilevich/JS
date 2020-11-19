// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

//#1

let answer = prompt('What\'s official for JavaScript?');

if(answer === 'ECMAScript') {
    alert('It\'s true');
} else {
    alert('It\'s false.\nCorrect name is ECMAScript!');
}
