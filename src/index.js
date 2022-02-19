const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let re=/(.{10}|.)/g
    let re2 =/(.{2}|.)/g;
    let arr = expr.match(re);
    let arr2 = arr.map(e => e.match(re2));
    let arr3 = arr2.map(el => el.filter(el => el!=='00'));
    let arr4 = arr3.map(el => el.map(el => el == '10' ? '.' : el == '11'? '-' : ' ').join(''));
    return(arr4.map(elem => elem = MORSE_TABLE[elem] || ' ').join(''));
}

module.exports = {
    decode
}