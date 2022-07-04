function solve(n, rounding) {
    if (rounding > 15) {
        rounding = 15;
    }

    n = n.toFixed(rounding)
    console.log(parseFloat(n));
}
solve(3.1415926535897932384626433832795, 2)
solve(10.5,3)