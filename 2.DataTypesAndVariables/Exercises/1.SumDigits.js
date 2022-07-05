function solve(num) {
    let total = 0;
    let n = num.toString().split('');
    for(let i = 0; i < n.length; i++){
        total += Number(n[i]);
    }
    console.log(total);
}