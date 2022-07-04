function solve(arr) {
    let total = 0;
    let bitcoinsBought = 0;
    let day = 1;
    let firstDay = 0;

    for (let i = 0; i < arr.length; i++) {
        let mined = (arr[i] * 67.51)
        if (day % 3 == 0) {
            mined *= 0.7
        }
        total += mined;
        for (let i = total; total > 11949.16; i -= 11949.16)
        if (total >= 11949.16) {
            total -= 11949.16;
            bitcoinsBought++;
        }
        
        if (bitcoinsBought != 1) {
            firstDay = day;
        }
        day++;
    }
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${total.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124])