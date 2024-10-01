function StatGeneration() {
    const stat = [];

    for (let j = 1; j < 7; j++) {
    for (let i = 0; i < 4; i++) {
        stat.push(Math.floor(Math.random() * 6) + 1);
    }

    stat.sort((a, b) => b - a);

    const FinalStat = stat[0] + stat[1] + stat[2];

    console.log("Stat № " , j , " = " , FinalStat);
    stat.length = 0;
}

}

sumTopThree();
