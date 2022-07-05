function solve(pages, perHour, days) {
    let timeToReadBook = pages / perHour;
    let perDay = timeToReadBook / days;
    console.log(perDay);
}