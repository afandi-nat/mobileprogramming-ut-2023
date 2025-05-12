// membuat perulangan dari 1 sampai 100
for(let i=1; i <= 100; i++){
    console.log("Perulangan 10 ke-" +i);
    let jumlah = 0;

    // mengambil 10 data bilangan ganjil
    for(let j=1; j <=10; j++){
        const bilangan = (i - 1) *10 + j;
        // menyeleksi bilangan ganjil
        if(bilangan % 2 === i % 2){
            console.log(bilangan);
            jumlah += bilangan;
        }
    }
    console.log("--------------------------");
    console.log("Jumlah: " + jumlah + "\n");
}