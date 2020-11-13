// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  if(str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')){
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam("dsdsdsd"));