function solve(arr) {
    let odd = 0;
    let even = 0;

    for (let i = 0; i < arr.length; i++){
        let current = Number(arr[i]);
        if (current % 2 == 0){
            even += current;
        } else {
            odd += current;
        }
    }
    console.log(even - odd);
}
solve(['1','2','3','4','5','6'])
solve([3,5,7,9])
solve([2,4,6,8,10])