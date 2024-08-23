import _ from '../lodash';

function isAnagram(str1, str2) {
    if (str1 === '' || str2 === '') return false; 
    const normalise = (word) => word.split('').sort().join('');
    return normalise(str1) === normalise(str2);
}

function takeN(items, n = 1) {
    const result = [];
    if (items.length < 1 || n <= 0) return result;
    if (n > items.length) return items;
    for (let i = 0; i < n; i += 1) {
        result.push(items[i]);
    }
    return result;
}

console.log(_.indexOf([1, 2, 3], 2));

export { isAnagram, takeN };