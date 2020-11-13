// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
  let result = (str.length > maxlength) ? 
  str.substr(0, maxlength - 1) + '…' : 
  str

  return result;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));