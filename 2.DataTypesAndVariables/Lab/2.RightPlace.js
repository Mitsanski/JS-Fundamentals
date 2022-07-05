function solve(str, char, correct) {
    str = str.replace('_', char);
    if(str === correct){
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}