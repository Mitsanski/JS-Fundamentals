function solve(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);
    }
    let areEqual = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            sum += arr1[i]
        }
    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['10', '20', '30'], ['10', '20', '30'])
console.log(`---`);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
console.log(`---`);
solve(['1'], ['10'])