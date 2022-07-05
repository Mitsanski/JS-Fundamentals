function solve(a, operator, b) {
    let total = 0;
    switch (operator) {
        case '+': total = a + b; break;
        case '-': total = a - b; break;
        case '/': total = a / b; break;
        case '*': total = a * b; break;
        default:
            break;
    }
    console.log(total.toFixed(2));
}