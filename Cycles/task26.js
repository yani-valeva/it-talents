var ivanHealth = 100;
var peshoHealth = 100;
var isPeshoDied = false;

while (true) {
    var ivanPower = Math.floor(Math.random() * 10) + 1;
    peshoHealth -= ivanPower;
    console.log(`Ivan struck Pesho with power ${ivanPower}.`);

    if (peshoHealth <= 0) {
        console.log('Pesho died.');
        isPeshoDied = true;
        break;
    } 

    console.log(`Health of Pesho is ${peshoHealth}.`);
    var peshoPower = Math.floor(Math.random() * 10) + 1;
    ivanHealth -= peshoPower;
    console.log(`Pesho struck Ivan with power ${peshoPower}.`);

    if (ivanHealth <= 0) {
        console.log('Ivan died.');
        break;
    }

    console.log(`Health of Ivan is ${ivanHealth}.`);
}

if (isPeshoDied) {
    console.log('The winner is Ivan.');
} else {
    console.log('The winner is Pesho.');
}
