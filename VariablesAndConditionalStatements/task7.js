var time = 3;
var money = 27.33;
var isHealthy = false;

if (!isHealthy) {
    console.log('I\'ll not go out.');
    if (money > 0) {
        console.log('I\'ll buy medicines.');
    } else {
        console.log('I\'ll stay at home and drink tea.');
    }
} else {
    if (money < 10) {
        console.log('I\'m going to a cafe.')
    }
}