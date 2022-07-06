function solve(num) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (num >= 1 && num <= 7) {
        console.log(days[num - 1]);
    } else {
        console.log('Invalid day!');
    }
}
solve(1);
solve(3);
solve(6);
solve(33);
solve(-3)