function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let total = 0;
    let shieldCount = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            total += helmetPrice;
        }
        if (i % 3 == 0) {
            total += swordPrice;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            total += shieldPrice;
            shieldCount++
        }
        if (shieldCount % 2 == 0 && shieldCount > 0) {
            total += armorPrice;
            shieldCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}
solve(23,
    12.50,
    21.50,
    40,
    200
)