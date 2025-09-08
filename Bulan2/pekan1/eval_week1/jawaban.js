// **Soal 1:**

/* const nasiGudeg = 8000
let sell = 15
let hasil = nasiGudeg * sell
console.log ("harga Nasi Gudeg : " + nasiGudeg)
console.log ("jumlah pembelian : " + sell)
console.log("Total penjualan Nasi Gudeg hari ini : " + hasil)

const ayamGoreng = 12000
let sell2 = 10
let hasil2 = ayamGoreng * sell2
console.log ("harga Ayam Goreng : " + ayamGoreng)
console.log ("jumlah pembelian : " + sell2)
console.log("Total penjualan Ayam Goreng hari ini : " + hasil2)

const esTeh = 3000
let sell3 = 20
let hasil3 = esTeh * sell3
console.log ("harga Es Teh : " + esTeh)
console.log ("jumlah pembelian : " + sell3)
console.log("Total penjualan ES Teh hari ini : " + hasil3)


let total = hasil + hasil2 + hasil3
console.log("Total pemasukkan hari ini ialah : " + total) */





// **Soal 2:**

/* let belanja = 50000
let diskon = belanja * 0.1
let total = belanja - diskon
if(belanja >= 50000){
    belanja - diskon
    console.log ("total belanja anda : Rp." + belanja)
    console.log("Anda mendapat diskon sebesar 10%" )
    console.log("Total nya jadi : " + belanja +" - 10% : Rp." + total )
}else{
    console.log ("total belanja anda : Rp." + belanja)
    console.log("Tambah lagi ya biar dapat diskon 10%")
}
 */




// **Soal 3:**

/* let nasiGudeg = 25
let ayamGoreng = 10
let esTeh = 20

let menuTerlaris
let jumlah


if(nasiGudeg > ayamGoreng && nasiGudeg > esTeh){
    menuTerlaris = "Nasi Gudeg"
    jumlah = nasiGudeg
}else if(ayamGoreng > nasiGudeg && ayamGoreng > esTeh){
    menuTerlaris = "Ayam Goreng"
    jumlah = ayamGoreng
}else{
    menuTerlaris = "Es Teh"
    jumlah = esTeh
}

console.log("Menu paling laris ialah : " + menuTerlaris + " dengan jumlah pembelian : " + jumlah + " porsi") */





// **Soal 4:**

/* let member = "VIP"
let belanja = 1000000


if(member === "VIP"){
    console.log("Total belanja anda adalah : " + belanja)
    console.log("Anda mendapatkan diskon sebesar 15%")
    console.log(belanja - 0.15 * belanja)
}else if (member === "biasa"){
    console.log("Total belanja anda adalah : " + belanja)
    console.log("Anda mendapatkan diskon sebesar 10%")
    console.log(belanja - 0.1 * belanja)
}else{
    console.log("Total belanja anda adalah : " + belanja)
    console.log("Anda mendapatkan diskon sebesar 5%")
    console.log(belanja - 0.05 * belanja)
}
*/







//**Soal 5:**

/* let day1 = 150000
let day2 = 200000
let day3 = 175000
let day4 = 180000
let day5 = 165000
let day6 = 190000
let day7 = 145000
let pendapatMingguan = day1 + day2 + day3 + day4 + day5 + day6 + day7
let total = Math.floor(pendapatMingguan / 7)
console.log("rata-rata pendapatan mingguan adalah : Rp." + total) */







// **Soal 6:**

/*let stokKaos = 50

function beliKaos(jumlah){
    stokKaos -= jumlah
    console.log("beli " + jumlah + " pieces kaos, stok kaos sisa " + stokKaos + " pieces") 
}
console.log("Stok kaos tersisa " + stokKaos)
beliKaos(5)
beliKaos(20)
beliKaos(20)

let stokCelana = 30

function beliCelana(jumlah){
    stokCelana -= jumlah
    console.log("beli " + jumlah + " pieces celana, stok celana sisa " + stokCelana + " pieces") 
}
console.log("Stok celana tersisa " + stokCelana)
beliCelana(5)
beliCelana(17)

let stokJaket = 15

function beliJaket(jumlah){
    stokJaket -= jumlah
    console.log("beli " + jumlah + " pieces jaket, stok jaket sisa " + stokJaket + " pieces") 
}
console.log("Stok jaket tersisa " + stokJaket)
beliJaket(5)
beliJaket(6) 
 */






//**Soal 7:**

/* let jumlahPoin = 0
function belanja(poin){
    jumlahPoin += poin
    console.log("terimakasih telah belanja di toko kami, anda mendapatkan " + poin + " poin")
    console.log("tambah " + poin + " poin, jumlah poin anda sekarang " + jumlahPoin + " poin") 
}
belanja(1)
belanja(1) */








//**Soal 8:**


/* let stokKaos = 50

function beliKaos(jumlah){
    stokKaos -= jumlah
    console.log("beli " + jumlah + " pieces kaos, stok kaos sisa " + stokKaos + " pieces")
     if(stokKaos < 10){
    console.log("Selamat anda mendapat diskon CUCI GUDANG sebesar 5%")
    }else{
}
}

console.log("Stok kaos tersisa " + stokKaos)
beliKaos(5)
beliKaos(20)
beliKaos(15) */


// **Soal 9:**

/* let stokKaos = 50

function beliKaos(jumlah){
    stokKaos -= jumlah
    console.log("beli " + jumlah + " pieces kaos, stok kaos sisa " + stokKaos + " pieces")
    
     if(stokKaos < 10){
    console.log("Selamat anda mendapat diskon CUCI GUDANG sebesar 5%")
    }else{
}
cekStok()
}
function cekStok(){
    if(stokKaos < 20)
    console.log("Stock menipis,segera RESTOCK!")
}





console.log("Stok kaos tersisa " + stokKaos)
beliKaos(5)
beliKaos(10)
beliKaos(18) */  


//**Soal 10:**

/* let jumlahPoin = 0
function belanja(poin){
    jumlahPoin += poin
    console.log("terimakasih telah belanja di toko kami, anda mendapatkan " + poin + " poin")
    console.log("tambah " + poin + " poin, jumlah poin anda sekarang " + jumlahPoin + " poin") 
    cekLevel()
}


function cekLevel(){
    if(jumlahPoin < 100){
        console.log("level member : Bronze")
    }else if (jumlahPoin <= 500 && jumlahPoin >= 100){
        console.log("level member : Silver")
    }else{
        console.log("level member : Gold")
    }
}


belanja(1)
belanja(500)  */ 