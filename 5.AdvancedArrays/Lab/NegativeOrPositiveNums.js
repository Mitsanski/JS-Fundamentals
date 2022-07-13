function negOrPos(arr) {
    let result = [];

    for (let number of arr) {
        number = Number(number);

        if(number > 0 || number == 0){
            result.push(number);
        } else {
            result.unshift(number)
        }
    }
    console.log(result.join('\n'));
}
negOrPos(['7', '-2', '8', '9']);
console.log(`------`);
negOrPos(['3', '-2', '0', '-1']);