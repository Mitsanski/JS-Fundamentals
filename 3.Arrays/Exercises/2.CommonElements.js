function solve(arr1, arr2) {
    let output = '';
    for (let i = 0; i < arr1.length; i++){
        if (arr1.includes(arr2[i])){
            output += arr2[i] + '\n';
        }
    }
    console.log(output);
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)