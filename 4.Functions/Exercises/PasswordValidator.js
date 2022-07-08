function passwordValidator(password) {
    function isHaving2Digits(password) {
        let count = 0;
        for (let charIndex of password) {
            let current = charIndex.charCodeAt(0);
            if (current >= 47 && current <= 57) {
                count++;
            }
        }
        return count >= 2 ? true : false;
    }

    function isLongEnough(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function isOnlyNumbersAndLetters(password) {
        for (let currCharIndex of password) {
            let currChar = currCharIndex.charCodeAt(0);
            if (!(currChar >= 65 && currChar <= 95) &&
                !(currChar >= 97 && currChar <= 122) &&
                !(currChar >= 48 && currChar <= 57)) {
                return false;
            }
        }
        return true;
    }

    let isLongValid = isLongEnough(password);
    let isHaving2DigitsValid = isHaving2Digits(password);
    let onlyNumsAndLettersValid = isOnlyNumbersAndLetters(password);

    if (isHaving2DigitsValid && isLongValid && onlyNumsAndLettersValid) {
        console.log(`Password is valid`);
    }

    if (!isLongValid) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (!onlyNumsAndLettersValid) {
        console.log(`Password must consist only of letters and digits`);
    }
    
    if (!isHaving2DigitsValid) {
        console.log(`Password must have at least 2 digits`);
    }

}
// passwordValidator('logIn')
// passwordValidator('MyPass123')
passwordValidator('Pa$s$s')