function printCertificate(grade, names) {

    if (pass(grade)) {
        printHeader();
        fullName(names);
        console.log(formatGrade(grade));
    } else {
        console.log(`Student does not qualify`);
    }

    function printHeader() {
        console.log(`~~~-    {@}    -~~~`);
        console.log(`~-  Certificate  -~`);
        console.log(`~~~-   ~---~   -~~~`)
    }

    function fullName(nameArr) {
        console.log(nameArr[0] + ' ' + nameArr[1]);
    }

    function formatGrade(grade) {
        if (grade < 3.50) {
            return `Poor (${grade.toFixed(2)})`
        } else if (grade < 4.50) {
            return `Good (${grade.toFixed(2)})`;
        } else if (grade < 5.50) {
            return `Very good (${grade.toFixed(2)})`;
        } else {
            return `Excellent (${grade.toFixed(2)})`;
        }
    }

    function pass(grade) {
        return grade >= 3
    }

}
printCertificate(4.25, ['Peter', 'Carter'])