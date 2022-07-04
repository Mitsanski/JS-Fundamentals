function solve(a, b) {
    let total = 0;
    let string = '';
    for (let i = a; i <= b; i++){
        total += i;
        string += i + ' ';
    }
    console.log(string);
    console.log(`Sum: ${total}`);
}