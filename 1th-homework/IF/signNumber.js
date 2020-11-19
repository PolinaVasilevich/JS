// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

//#1
let number = +prompt('Please, enter a number:');

if(number > 0) {
    alert(1);
} else if(number < 0) {
    alert(-1);
} else {
    alert(0);

}

//#2
    // let number = +prompt('Please, enter a number:');

    // let result = number > 0 ? alert(1) :
    //             number < 0 ? alert(-1) : alert(0);
