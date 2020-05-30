

const isIsogram = (str='') => {
    const caseInsensitive = str.toLowerCase();
    return caseInsensitive.length === (new Set(caseInsensitive)).size;
}


console.log(isIsogram('jmal'))