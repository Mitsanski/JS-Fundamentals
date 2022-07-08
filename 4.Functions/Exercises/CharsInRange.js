function charsInRange(char1, char2) {
    let firstChar = char1.charCodeAt(0);
    let secondChar = char2.charCodeAt(0);
    let result = []
    if (firstChar < secondChar) {
        for (let i = firstChar + 1; i < secondChar; i++) {
            result.push(String.fromCharCode(i));
        }
    } else {
        for (let i = firstChar - 1; i > secondChar; i--) {
            result.unshift(String.fromCharCode(i));
        }
    }
    console.log(result.join(' '));
}
charsInRange('C', '#')