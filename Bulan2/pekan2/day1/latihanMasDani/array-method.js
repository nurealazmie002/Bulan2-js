/* let nama = ["akbar", "yusuf", "syamsul", "dani", "wahyu"]

nama.unshift("robert")
nama.push("yusuf") 

nama.pop()
nama.shift() 

nama.splice(2,0,"robert")

console.log(nama.length)

console.log(nama) */









//STUDI KASUS
/* let buah = ["mangga","Durian","Manggis","Jeruk","Rambutan","salak"] 

buah.push("jambu","tin")
buah.unshift("pepaya","sawo")

console.log(buah) */


/* let daftarBelanja = ["mie","sayuran","tepung","micin"]

daftarBelanja.push("keju","kismis","susu")
daftarBelanja.unshift("minyak","gula","garam")


console.log(daftarBelanja) */


/* let pet = ["kucing","kelinci","anjing","kuda",]

pet.unshift("kura-kura")

console.log(pet) */

/* let film = ["transformer","spiderman","pacific rim","pearl harbor"]

film.unshift("batman")
console.log(film) */

/* let angka = [1,2,3,4,5]
angka.unshift(0)
console.log(angka) */










/* let mainan = ["bola","lego","puzzle","balon",]

mainan.pop()
console.log(mainan)


let baju = ["baju","celana","sepatu","tas"]

baju.shift()
console.log(baju)


let makanan = ["nasi","soto","mie","bakso"]

makanan.pop()
console.log(makanan)

let tugasSekolah = ["matematika","fisika","kimia","biologi"]

tugasSekolah.shift()
console.log(tugasSekolah)


let daftarAntrian = ["budi","andi","cindi","dandi"]

daftarAntrian.shift()
console.log(daftarAntrian) */









/* let buah = ["mangga","Durian","Manggis","Jeruk","Rambutan","salak"]
console.log(buah.length)

let teman = ["akbar", "yusuf", "syamsul", "dani", "wahyu"]
console.log(teman.length)


let angka = [1,2,3,4,5]
console.log(angka.length)

let barang = ["mie","sayuran","tepung","micin"]
console.log(barang.length)

let pet = ["kucing","kelinci","anjing","kuda","gajah","buaya","kura-kura","harimau","singa",,"kucing"]
console.log(pet.length) */







/* let warna = ["merah","kuning","hijau"]

warna.splice(2,0,"biru")
console.log(warna)


let teman = ["budi","andi","cindi","dandi"]

teman.splice(3,1)
console.log(teman)


let angka = [1,2,3,4,5]

angka.splice(2,1,30)
console.log(angka)


let makanan = ["nasi","soto","mie","bakso"]

makanan.splice(2,0,"sate")
console.log(makanan)


let atk = ["buku", "pensil", "penghapus"]

atk.splice(1,1,"pulpen")
console.log(atk) */







/* let daftarBelanja = ["mie","sayuran","tepung","micin"]

daftarBelanja.unshift("keju","kismis","susu")
daftarBelanja.shift()
console.log(daftarBelanja.length)
console.log(daftarBelanja)


let pet = ["kucing","kelinci","anjing","kuda","gajah","buaya",]

pet.push("kura-kura")
pet.shift()
pet.splice(1,1,"harimau")
console.log(pet)


let angka = [1,2,3,4,5,6,7,8,9,10]

angka.push(11)
angka.shift()
console.log(angka.length)
console.log(angka)


let teman = ["akbar", "yusuf", "syamsul", "dani", "wahyu"]

teman.unshift("robert")
teman.pop()
teman.splice(3,1,"camcul")
console.log(teman)


let makanan = ["nasi","soto","mie","bakso"]

makanan.unshift("sate")
makanan.pop()
makanan.splice(2,0,"rendang")
console.log(makanan.length)
console.log(makanan) */


//////////MATERI 2.2 Array method

//latihan Main



/* let angka = [1,2,3,4,5,6,7,8,9,10]


angka.forEach(function(n) {
  console.log("Aku punya angka: " + n);
});



let kaliLima = angka.map(function(n){
    return n * 5
})
console.log(kaliLima)


let genap = angka.filter(function(n){
    return n % 2 === 0
})
console.log(genap)



let jumlah = angka.reduce(function(total,n){
    return total + n
})
console.log(jumlah)



let angka1 = [5,2,9,6,3,1,4,8,7,12,11,17,15]

//let cari = angka1.find(n => n > 10)
let cari = angka1.find(function(n){
    return n > 10
})

console.log(cari) */



//STUDI KASUS


/* let buah = ["mangga","Durian","Manggis","Jeruk","Rambutan","salak"]

buah.forEach(function(n){
    console.log("aku punya buah " + n)
})



let harga = [1000,5000,2500,7000,4100,9600]

let inflasi = harga.map(n => Math.floor(n*1.1))

console.log("Harga awal adalah " + harga)
console.log("Inflasi sekarang jadi " + inflasi)




let daftarUmur = [23,12,16,20,25,18,14,19,22,17]

let filterUmur = daftarUmur.filter(n => n > 16)
console.log(filterUmur)



let nilaiUjian = [45,57,70,80,90,100,60,50,40,30,20,10]


let semua = nilaiUjian.reduce((total, n) => total + n, 0)
console.log(semua)



let daftarNomorKursi = [4,1,5,9,6,12,14,17,11,15,13,18,27,28,30,32,]

let cari = daftarNomorKursi.filter(n => n > 20)
console.log(cari) */