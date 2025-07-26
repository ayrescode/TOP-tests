function charToInt(char) {
  return char.charCodeAt(0);
}

function intToChar(code) {
  return String.fromCharCode(code);
}

export function caesarCipher(str, shift) {
  const s = shift > 0 ? shift : 26 + (shift % 26);
  const oldArr = str.split('');
  const upperRegex = /[A-Z]/;
  const lowerRegex = /[a-z]/;
  let newCodes = oldArr.map((char) => {
    if (upperRegex.test(char)) {
      return ((charToInt(char) + s - 65) % 26) + 65;
    } else if (lowerRegex.test(char)) {
      return ((charToInt(char) + s - 97) % 26) + 97;
    } else {
      return charToInt(char);
    }
  });
  const newArr = newCodes.map((code) => intToChar(code));
  const res = newArr.join('');
  return res;
}
