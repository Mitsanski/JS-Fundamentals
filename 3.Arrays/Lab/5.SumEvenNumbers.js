function solve(arr) {
    let total = 0; 
    for (let num of arr){
        let current = Number(num);
        if (current % 2 == 0){
            total += current;
        }
    }
    console.log(total);
}
solve(['1','2','3','4','5','6'])