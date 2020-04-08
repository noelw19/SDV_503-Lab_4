function pow(exponent) {
    let base = 2
    let result = 1;

    for (let count = 0; count < exponent; count++) {
        result *= base;
        console.log(result);


    }
    return result;
}

console.log(pow(3));


let ip5L = pow(4);
let ip4L = pow(3);
let ip3L = pow(2);
let ip2L = pow(1);
let ip1L = pow(0);

console.log(ip4L);


function binaryC1(x) {
    console.log(x);
    const ip = Array.from(String(x), Number)

    console.log(ip);
    console.log(ip[1]);

    let array = [];

    let ip8L;
    let ip7L = 0;
    let ip6L = 0;
    let ip5L = pow(4);
    let ip4L = pow(3);
    let ip3L = pow(2);
    let ip2L = pow(1);
    let ip1L = pow(0);

    if (ip[0] === 1) {
        ip8L = pow(7);
        array = array.push(ip8L);
    } else {
        ip8L = 0;
    }

    if (ip[1] === 1) {
        ip7L += pow(6);
    } else {
        ip7L = 0;
    }

    if (ip[2] === 1) {
        ip6L += pow(5);
    } else {
        ip6L = 0;
    }

    if (ip[3] === 1) {
        ip5L += pow(4);
    } else {
        ip5L = 0;
    }

    if (ip[4] === 1) {
        ip4L += pow(3);
    } else {
        ip4L = 0;
    }

    if (ip[5] === 1) {
        ip3L += pow(2);
    } else {
        ip3L = 0;
    }

    if (ip[6] === 1) {
        ip2L += pow(1);
    } else {
        ip2L = 0;
    }

    if (ip[7] === 1) {
        ip1L += pow(0);
    } else {
        ip1L = 0;
    }

    return (ip8L + ip7L + ip6L + ip5L + ip4L + ip3L + ip3L + ip2L + ip1L);
    console.log(array[0]);
    




}

console.log(binaryC1(000001));