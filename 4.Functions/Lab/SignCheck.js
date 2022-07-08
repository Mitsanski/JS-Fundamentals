function signCheck(a, b, c) {
    let result = a * b * c;
    const negativeOrPositive = result >= 0 ? 'Positive' : 'Negative';
    console.log(negativeOrPositive);
}
signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1)