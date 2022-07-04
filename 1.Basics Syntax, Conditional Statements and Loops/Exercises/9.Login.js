function solve(input) {
    let username = input.shift();
    let correctPass = username.split('').reverse().join('');
    let tries = 0;
    let isBlocked = false;

    let current = input.shift();
    while (current != correctPass){
        if (tries >= 3){
            console.log(`User ${username} blocked!`);
            isBlocked = true;
            break;
        }
        tries++;
        console.log(`Incorrect password. Try again.`);
        current = input.shift()
    }
    if (!isBlocked){
        console.log(`User ${username} logged in.`);
    }
}
solve(['sunny','rainy','cloudy','sunny','not sunny'])