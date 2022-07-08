function solve(arr) {
    let maxSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currentSequence = [];
        for (let j = i; j < arr.length; j++){
            if (arr[[i]] === arr[j]){
                currentSequence.push(arr[i]);
            } else {
                break;
            }
        }
        if(currentSequence.length > maxSequence.length){
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(' '));
}
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])