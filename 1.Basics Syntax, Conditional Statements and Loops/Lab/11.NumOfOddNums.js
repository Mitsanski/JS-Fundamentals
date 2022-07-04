function solve(n) {
    let total = 0;
    for (let i = 1; i < n * 2; i++) {
        if (i % 2 != 0){
            console.log(i);
            total += i;
        }
    }
    console.log(`Sum: ${total}`);
}
solve(3)