function solve(bandName, albumName, songName) {
    let totalTime = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = totalTime / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')
solve('Rammstein', 'Sehnsucht', 'Engel')