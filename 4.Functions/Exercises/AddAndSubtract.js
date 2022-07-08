function addAndSubtract(a, b, c) {
    function sum(a, b) {
        return a + b
    }

    function subtract(c) {
        return sum(a, b) - c;
    }
    console.log(subtract(c));
}
