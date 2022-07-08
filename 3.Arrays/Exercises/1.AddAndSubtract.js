function solve(arr) {
    let newArr = [];
    let result1 = 0;
    let result2 = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            newArr.push(arr[i] + i)
        } else {
            newArr.push(arr[i] - i)
        }
    }
    for (let n of arr){
        result1 += n;
    }

    for (let n of newArr){
        result2 += n;
    }

    console.log(newArr);
    console.log(result1);
    console.log(result2);
}
solve([5, 15, 23, 56, 35])