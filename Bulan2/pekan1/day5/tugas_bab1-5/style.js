// Variabel, Tipe Data, Operator

// Buat variabel nama, umur, statusPelajar. Tampilkan semuanya dengan console.log().
/* const nama = "azmie"
let umur = 20
var statusPelajar = true
console.log(nama,umur,statusPelajar) */


// Buat variabel uangSaku = 50000, jajan = 15000, hitung sisa uangnya.
/* let uangSaku = 50000
let jajan = 15000
let sisaUang = uangSaku - jajan
console.log(sisaUang) */


// Buat variabel sudahLogin = true. Cek apakah user sudah login, jika iya tampilkan "Selamat datang".
/* let sudahLogin = true
alert("Selamat datang") */


// Buat variabel nilai = 75. Jika nilai ≥ 70 tampilkan "Lulus", jika tidak "Tidak Lulus".
/* let nilai = 75
let hasil =(nilai >= 70) ? "Lulus" : "Tidak Lulus"
console.log(hasil) */


// Coba deklarasikan const angka = 10, lalu ubah nilainya. Apa hasilnya?
/* const angka = 10
angka = 20
console.log(angka)//ERROR */






// Struktur Kontrol (If, Switch, Loop)

// Buat program cek ganjil/genap dari angka tertentu.
/* let angka = 10
if(angka % 2 === 0){
    console.log(angka + " adalah angka genap")
}else{
    console.log(angka + " adalah angka ganjil")
} */


// Buat program yang menampilkan nama bulan sesuai angka (1–12) menggunakan switch.
/* let bulan = 13
switch(bulan){
    case 1:
        console.log("Januari")
        break
    case 2:
        console.log("Februari")
        break
    case 3:
        console.log("Maret")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("Mei")
        break
    case 6:
        console.log("Juni")
        break
    case 7:
        console.log("Juli")
        break
    case 8:
        console.log("Agustus")
        break
    case 9:
        console.log("September")
        break
    case 10:
        console.log("Oktober")
        break
    case 11:
        console.log("November")
        break
    case 12:
        console.log("Desember")
        break
    default:
        console.log("Belajar dimana mas, kok ada bulan 13 ?")
} */


// Buat program untuk mencetak angka 1 sampai 20 dengan for.
/* for (let i =1 ; i <= 20 ; i++){
    console.log(i)
} */


// Buat program untuk mencetak bilangan kelipatan 5 dari 1–50.
/* for (let i =5 ; i <= 50 ;i += 5){
    console.log(i)
} */


// Buat program yang terus meminta input password hingga benar (while).
/* let password = "1234"
let input = ""
while (input !== password){
    input = prompt("Masukkan password")
} */






// Fungsi

// Buat fungsi sapa(nama) yang menampilkan "Halo, [nama]!".
/* function sapa(nama){
    console.log("Halo, " + nama + "!")
}
sapa("azmie") */


// Buat fungsi hitungLuasSegitiga(alas, tinggi) yang mengembalikan hasilnya.
/* function hitungLuasSegitiga(alas, tinggi){
    let luas = alas * tinggi / 2
    return luas
}
let luas = hitungLuasSegitiga(10, 5)
console.log(luas) */


// Buat fungsi cekUmur(umur) → tampilkan "Dewasa" jika ≥ 18, "Anak-anak" jika < 18.
/* function cekUmur(){
    let umur = prompt("Masukkan umurmu!")
    umur = Number(umur)
    50
    if(umur <= 18){
        console.log("Masih Kecil")
    }else if(umur > 18 && umur <= 50){
        console.log("Sudah Dewasa")
    }else{
        console.log("Kakek ngapain ke sini, kek...?")
    }
}
cekUmur() */


// Buat fungsi ekspresi untuk menghitung diskon belanja.
/* const diskon = function (totalBelanja) {
    if (totalBelanja >= 100000) {
        return totalBelanja * 0.1
    } else if (totalBelanja >= 50000) {
        return totalBelanja * 0.05
    } else {
        return 0
    }
}
console.log(diskon(100000))
console.log(diskon(50000)) */

// Buat arrow function untuk menghitung konversi suhu Celcius ke Fahrenheit.
/* function persamaanSuhu(celcius) {
    let fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit
}
console.log(persamaanSuhu(1))
console.log(persamaanSuhu(33))
console.log(persamaanSuhu(27)) */








// Scope, Hoisting, Closure

// Buat variabel sekolah di global, tampilkan di dalam fungsi.
/* const sekolah = "SDN 1 Sukarame"
function main(){
    console.log(sekolah)
}
main() */


// Buat variabel guru di dalam fungsi, coba tampilkan di luar fungsi. Apa yang terjadi?
/* function main(){
    const guru = "Budi"
    
}
main()
console.log(guru)
console.log(guru)//ERROR BANG!! */


// Coba tampilkan variabel var sebelum dideklarasikan. Apa hasilnya?
/* console.log(namaSiswa)
var namaSiswa = "sukijem"//uncaught error,  deklarasi nya di hoist tapi masuk ke TDZ temporal dead zone gitu pas baca" tadi :) */

// Buat fungsi buatCounter() yang tiap kali dipanggil menambah angka +1 (gunakan closure).
/* function buatCounter(){
    let counter = 0
    function tambah(nominal){
        counter += nominal
        console.log(counter)
    }
    function kali(nominal){
        counter *= nominal
        console.log(counter)
    }
    return {tambah, kali}
}

const {tambah, kali} = buatCounter()
tambah(1)
tambah(2)
tambah(3)
kali(3)
kali(27) */


// Buat fungsi pencatatanPengeluaran() yang menyimpan total pengeluaran dengan closure.
/* function catatPengeluaran(){
    let saldo =0

    function transport(nominal){
    saldo += nominal
    console.log("+ pengeluaran transport menjadi : " + saldo)
    }

    function makan(nominal){
    saldo += nominal
    console.log("+ pengeluaran makan menjadi : " + saldo)
    }
    return {transport,makan}
}

let pengeluaran = catatPengeluaran()
pengeluaran.makan(2000)
pengeluaran.transport(5000) */