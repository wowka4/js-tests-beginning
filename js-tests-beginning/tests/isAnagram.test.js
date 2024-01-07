import { isAnagram } from "../src/isAnagram.js";

if (isAnagram('racer', 'carer') === false) throw new Error('Функция работает неверно!');
if (isAnagram('', 'crazy') === true) throw new Error('Функция работает неверно!');
if (isAnagram('crazy', '') === true) throw new Error('Функция работает неверно!');

console.log('Все тесты пройдены!');
