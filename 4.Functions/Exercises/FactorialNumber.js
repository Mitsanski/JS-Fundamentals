function solve(a, b) {
    function factorial(number) {
        if (number < 0) {
            return -1;
        } else if (number == 0) {
            return 1;
        } else {
            return (number * factorial(number - 1))
        }
    }

    
    let result = factorial(a) / factorial(b);
    console.log(result.toFixed(2));

}
solve(6, 2)