
function isAnagram(str1, str2) {
    if (str1 === '' || str2 === '') return false; 
    const normalise = (word) => word.split('').sort().join('');
    return normalise(str1) === normalise(str2);
}

export { isAnagram };