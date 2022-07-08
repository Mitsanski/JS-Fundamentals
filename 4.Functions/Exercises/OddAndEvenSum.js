function oddAndEvenSum(num) {
    num = num.toString().split('');
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < num.length; i++){
        let current = Number(num[i]);
        if (current % 2 === 0){
            evenSum += current;
        } else {
            oddSum += current;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}