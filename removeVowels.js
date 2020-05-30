
VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

const removeVowels = (str='') => {
    let string = str;
    VOWELS.map(vowel => {
        string = string.split(vowel).join('')
    })
    return string;
}

console.log(removeVowels('We’re gonna build a wall!'))