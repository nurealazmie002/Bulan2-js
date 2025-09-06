// Buat variabel namaSekolah di global, lalu tampilkan di dalam fungsi.

/* const namaSekolah = "SDN 1 Sukarame"
function main(){
console.log(namaSekolah)
}

main() */





// Buat variabel namaGuru di dalam fungsi, coba tampilkan di luar fungsi.


/* function main(){
    const namaGuru = "Budi"
}

main()
console.log(namaGuru) */




// Buat perulangan for dengan let i, cek apakah i bisa dipakai di luar perulangan.


/* for (let i =1 ; i <= 10 ; i++){
    console.log(i)
}

console.log(i)// kalau make let i nya tidak bisa dipake karena let hanya di dalam block.sedangkan, kalau tidak pakai maka dia jadi global dan bisa di pakai.
for ( i =1 ; i <= 10 ; i++){
    console.log(i)
}

console.log(i) */




// Bandingkan var dan let di dalam perulangan (lihat bedanya).


/* for ( let i =1 ; i <= 10 ; i++){
    console.log(i)
}

console.log(i)//beda nya adalah let tidak bisa dipake di luar perulangan.sedangkan, var bisa. */ 







// Buat dua fungsi berbeda, masing-masing punya variabel namaSiswa. Apakah mereka bisa saling ganggu?

/* let namaSiswa = "sukijan"
let namaSiswa2 = "sukijem"

function main(){
  console.log(namaSiswa)
}
function main(){
  console.log(namaSiswa2)
}

main()//function yang dengan nama yang sama paling terakhir yang akan di tampilkan. */




// Coba tampilkan variabel var sebelum didefinisikan.


/* console.log(namaSiswa)
var namaSiswa = "sukijan"//undefinied karean di hoist tapi assignment belum dilakukan
 */


// Coba tampilkan variabel let sebelum didefinisikan.


/* console.log(namaSiswa2)
let namaSiswa2 = "sukijem"//uncaught error deklarasi nya di hoist tapi masuk ke TDZ temporal dead zone gitu pas baca" */





// Coba tampilkan variabel const sebelum didefinisikan.


/* console.log(namaSiswa3)
const namaSiswa3 = "sukiyem"//mirip kayak let masuk ke TDZ gitu. */

// Buat fungsi normal di bawah, lalu panggil di atas.

/* sapaAudience ("Hallo")

function sapaAudience(sapaan){
    console.log(sapaan)
} */




// Buat fungsi versi panah (const halo = () => {}), panggil di atas. Apa bedanya?

/* halo()
const halo = () => {}
{
    console.log("halo")
} */







// Buat fungsi buatCounter() yang setiap dipanggil nambah 1.



/* function buatPenambahan() {
    let nominal = 0

    function isiPenambahan(jumlah){
        nominal += jumlah;
        console.log ("nominal nya : " + nominal)
    }

    return isiPenambahan;
} 

let nominal = buatPenambahan()
nominal(1000)
nominal(245) */


 


// Buat fungsi buatTabungan() yang bisa menyimpan uang.


/* function buatTabungan(){
    let tabungan = 0

    function nabung(duit){
        tabungan += duit ;
        console.log("tabungan anda sekarang adalah :" + tabungan);
    }

    return nabung
}

let tabunganA = buatTabungan();
tabunganA(2000)
tabunganA(2341) */


// Buat fungsi buatKeranjangBelanja() yang bisa menambahkan barang baru.

/* function daftarBelanjaan(){
    let namaBarang = " " 

    function keranjang(barang){
        namaBarang += barang 
        console.log( namaBarang)
    }

    return keranjang
}

let belanjaan = daftarBelanjaan()
belanjaan("sayuran")
belanjaan(", keju")
belanjaan(", kismis") */







// Buat fungsi buatTimer() yang menyimpan detik setiap kali dipanggil.



/* function buatTimer(){
    let waktu = 0

    function timer(detik){
       waktu += detik;
       console.log(waktu + " detik");
    }
    return timer
}

let hitungan = buatTimer()
hitungan(1)
hitungan(1)
 */


// Buat fungsi buatCatatanNama() yang bisa menambahkan nama siswa ke daftar.

/* function buatCatatanNama(){
    let catatan = " "

    function catatanNama(nama){
        catatan += nama
        console.log(catatan)
    }

    return catatanNama
    }

    let catatan = buatCatatanNama()
    catatan("sukijan")
    catatan(", sukijem")
    catatan(", sukiyem") */
 


