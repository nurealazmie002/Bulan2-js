import { tambahBarang } from "./utils.js";
console.log(tambahBarang())


import { cariBarang } from "./utils.js";
console.log( cariBarang("kopi"))



import { hitungTotal } from "./utils.js";
console.log("Total Harga Belanjaan : Rp.", hitungTotal([
    {id : 1, jumlah : 2},
    {id : 2, jumlah : 3},
    {id : 3, jumlah : 4}
]));



import { updateStok } from "./utils.js";
console.log(updateStok(1, 2)); 


let hitung = 0;
const promo = setInterval(() => {
  hitung++;
  console.log("🔥 Promo Diskon 20% berlaku sekarang!");
  
  if (hitung === 5) {
    clearInterval(promo);
    console.log("Promo selesai ❌");
  }
}, 3000); 