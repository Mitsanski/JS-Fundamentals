function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++){
        let number1 = arr[i];
        let isBiggest = true;


        for (let j = i + 1; j < arr.length; j++){
            let number2 = arr[j];
            if (number1 <= number2){
                isBiggest = false;
            }
        }
        if(isBiggest){
            result.push(number1)
        }
    }
    console.log(result.join(' '));
}
solve([1, 4, 3, 2])