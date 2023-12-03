var sum = 0;
var j = 1;
var k = 1;
for (var i = 1; i <= 100; i++) {
    if (i > 10) {
        k = 0;
    }
    if (i > 20) {
        k = 1;
    }
    if (i > 30) {
        k = 0;
    }
    if (i > 40) {
        k = 1;
    }
    if (i > 50) {
        k = 0;
    }
    if (i > 60) {
        k = 1;
    }
    if (i > 70) {
        k = 0;
    }
    if (i > 80) {
        k = 1;
    }
    if (i > 90) {
        k = 0;
    }
    switch (k) {
        case 0:
            if (i % 2 == 0) {
                console.log(i);
                sum = sum + i;
            }
            break;
        case 1:
            if (i % 2 !== 0) {
                console.log(i);
                sum = sum + i;
            }
            break;
    }
    if (j >= 10) {
        console.log('---------------');
        console.log('Jumlah: ' + sum + '\n');
        sum = 0;
        j = 0;
    }
    j++;
}
