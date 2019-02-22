var ivanHealth = 100;
var peshoHealth = 100;
var isPeshoDied = false;
var isIvanIll = false;
var isPeshoIll = false;
var hasCowInGame = false;
var peshoNumber = Math.floor(Math.random() * 100) + 1;
var ivanNumber = Math.floor(Math.random() * 100) + 1;

while (true) {
    if (((ivanNumber & 1) !== 0) && ((ivanNumber & (1 << 3)) !== 0)) {
        ivanHealth += 8;
        console.log('Ivan treat himself!');
        console.log('The health of Ivan is ' + ivanHealth + '.');
    }

    if (((peshoNumber & 1) !== 0) && ((peshoNumber & (1 << 3)) !== 0)) {
        peshoHealth += 8;
        console.log('Pesho treat himself!');
        console.log('The health of Pesho is ' + peshoHealth + '.');
    }

    if (Math.random() < 0.05) {
        console.log('Pesho has been killed by a cow.');
        console.log('Ivan has been given victory!');
        hasCowInGame = true;
        break;
    }

    if (Math.random() < 0.05) {
        console.log('Ivan has been killed by a cow.');
        console.log('Pesho has been given victory!');
        hasCowInGame = true;
        break;
    }

    var ivanPower = Math.floor(Math.random() * 10) + 1;
    var strokeCount = 1;

    if (Math.random() < 0.2) {
        console.log('Ivan got a bonus!');
        ivanPower = (ivanPower << 1);
    }

    if (Math.random() < 0.1) {
        console.log('Ivan found a bottle of rakia!');
        strokeCount = 5;
    }

    if (!isIvanIll && Math.random() < 0.05) {
        console.log('Ivan got sick of plague.');
        isIvanIll = true;
    }

    if (isIvanIll) {
        ivanPower = (ivanPower >> 1);
    }

    for (var i = 0; i < strokeCount; i++) {
        peshoHealth = (peshoHealth >= ivanPower) ? peshoHealth - ivanPower : 0;
        console.log(`Ivan struck Pesho with power ${ivanPower}.`);
        console.log(`Health of Pesho is ${peshoHealth}.`);

        if (peshoHealth === 0) {
            break;
        }
    }

    if (peshoHealth === 0) {
        console.log('Pesho died.');
        isPeshoDied = true;
        break;
    }

    var peshoPower = Math.floor(Math.random() * 10) + 1;
    strokeCount = 1;

    if (Math.random() < 0.2) {
        console.log('Pesho got a bonus!');
        peshoPower = (peshoPower << 1);
    }

    if (Math.random() < 0.1) {
        console.log('Pesho found a bottle of rakia!');
        strokeCount = 5;
    }

    if (!isPeshoIll && Math.random() < 0.05) {
        console.log('Pesho got sick of plague.');
        isPeshoIll = true;
    }

    if (isPeshoIll) {
        peshoPower = ( peshoPower >> 1);
    }

    for (var i = 0; i < strokeCount; i++) {
        ivanHealth = (ivanHealth >= peshoPower) ? ivanHealth - peshoPower : 0;
        console.log(`Pesho struck Ivan with power ${peshoPower}.`);
        console.log(`Health of Ivan is ${ivanHealth}.`);

        if (ivanHealth === 0) {
            break;
        }
    }

    if (ivanHealth === 0) {
        console.log('Ivan died.');
        break;
    }
}

if (!hasCowInGame) {
    if (isPeshoDied) {
        console.log('The winner is Ivan.');
    } else {
        console.log('The winner is Pesho.');
    }
}