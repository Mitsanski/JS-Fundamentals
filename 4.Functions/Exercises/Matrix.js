function matrix(x) {
    let output = '';
    for (let i = 0; i < x; i++){
        for (let k = 0; k < x; k++){
            output += x + ' ';
        }
        console.log(output);
        output = '';
    }
}
matrix(7)