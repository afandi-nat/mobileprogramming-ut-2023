for (var i = 1; i <= 100; i++) {
    console.log("Perulangan 10 ke-" + i);
    var jumlah = 0;
    for (var j = 1; j <= 10; j++) {
        var bilangan = (i - 1) * 10 + j;
        if (bilangan % 2 === i % 2) {
            console.log(bilangan);
            jumlah += bilangan;
        }
    }
    console.log("--------------------------");
    console.log("Jumlah: " + jumlah + "\n");
}
