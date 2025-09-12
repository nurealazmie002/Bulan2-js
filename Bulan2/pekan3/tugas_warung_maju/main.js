import { tambahBarang } from "./utils.js";
console.log(tambahBarang())


import { cariBarang } from "./utils.js";
console.log( cariBarang("kopi"))

import { hitungTotal } from "./utils.js";
// 3. Hitung total belanjaan
// let belanjaan = [1, 2, 3]; // id barang yang dibeli
console.log("Total Harga:", hitungTotal([
    {id : 1, jumlah : 2},
    {id : 2, jumlah : 3},
    {id : 3, jumlah : 4}
]));

// 4. Update stok
// console.log(updateStok(1, 2)); // beli 2 Indomie

// 5. Promo setInterval
/* let hitung = 0;
const promo = setInterval(() => {
  hitung++;
  console.log("🔥 Promo Diskon 20% berlaku sekarang!");
  
  if (hitung === 5) {
    clearInterval(promo);
    console.log("Promo selesai ❌");
  }
}, 3000); */