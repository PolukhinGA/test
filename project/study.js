'use strict';

if (4 == 9) {
    console.log('ok!');
} else {
    console.log('error!');
}

const num = 50;

if (num < 49) {
    console.log('error!');
} else if (num > 100) {
    console.log('a lot!');
} else {
    console.log('ok!');
}

(num == 50) ? console.log('ok!') : console.log('error!');


const sum = 100;

switch (sum) {
    case 89:
        console.log("no");
        break;
    case 100:
        console.log("yes");
        break;
    default:
        console.log("not yet");
        break;
}
