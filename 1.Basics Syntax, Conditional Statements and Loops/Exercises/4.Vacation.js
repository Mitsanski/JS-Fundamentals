function solve(people, type, day) {
    let total = 0;

    switch (type) {
        case 'Students':
            if (day == 'Friday') {
                total += people * 8.45;
            } else if (day == 'Saturday') {
                total += people * 9.80;
            } else if (day == 'Sunday') {
                total += people * 10.46;
            }

            if (people >= 30) {
                total *= 0.85;
            }
            break;
        case 'Business':
            if (day == 'Friday') {
                total += people * 10.90;
                if (people >= 100) {
                    total -= (10 * 10.90)
                }
            } else if (day == 'Saturday') {
                total += people * 15.60;
                if (people >= 100) {
                    total -= (10 * 15.60)
                }
            } else if (day == 'Sunday') {
                total += people * 16;
                if (people >= 100) {
                    total -= (10 * 16)
                }
            }
            break;
        case 'Regular':
            if (day == 'Friday') {
                total += people * 15;
            } else if (day == 'Saturday') {
                total += people * 20;
            } else if (day == 'Sunday') {
                total += people * 22.50;
            }

            if (people >= 10 && people <= 20) {
                total *= 0.95;
            }
            break;
        default:
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}
solve(40,
    "Regular",
    "Saturday"
    )