// Cetak angka 1 sampai 100.

/* for (let i = 1; i <= 100; i++) {
    console.log(i);
} */





// Cetak semua bilangan genap dari 1 sampai 50.

/* for  ( let i = 1 ; i <= 50; i++){
    if (i % 2=== 0){
        console.log(i)
    }
} */





// Hitung jumlah dari angka 1 sampai 10.

/* let jumlah = 0
for (i = 1; i <= 10; i++)
{
    jumlah = jumlah + i
}
console.log(jumlah) */







// Buat tabel perkalian 5.

/* let jumlah = 1
for (let i = 1; i <= 10; i++) {
    jumlah = i * 5
    console.log(i + " x 5 = " + jumlah)
} */






// Cetak bintang membentuk segitiga.

/* function cetakSegitiga(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - i - 1; j++) {
      row += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

let n = 10; 
cetakSegitiga(n); */




// Terus minta password sampai benar.

/* let password = "";
while (password !== "rahasia"){
    password = prompt("Masukkan password:");
    if (password !== "rahasia"){
        alert ("password salah")
    }else{
        alert("password benar")
    }
}
  */


// Jalan terus sampai bensin habis.

/* let bensin  
while (!bensin) {
    bensin = prompt ("Masukkan bensin:");
    if (bensin >= 10) {
        alert("Bensin tersisa, jalan terus ");  
    } else {
        alert("Bensin habis");
    }
} */
// Ulangi lempar dadu sampai dapat angka 6.
// Terus tambah uang tabungan sampai cukup untuk beli barang.
// Ulangi proses input sampai user mengetik "stop".





