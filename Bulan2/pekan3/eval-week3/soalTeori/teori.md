/* Apa perbedaan mendasar antara *callback function* dan *Promise* dalam menangani proses asynchronous?
jawab : beda nya ialah fungsi yang berjalan ketika fungsi yang lain dipanggil, sedangkan promise itu untuk res atau rej / berhasil atau error nya */









/Mengapa `async/await` sering dianggap lebih mudah dibaca dibandingkan Promise chaining? Berikan contoh singkat.
jawab : karena async/await lebih simple dalam kode nya dibandingkan promise chaining yang sering pakai then 









Jelaskan apa fungsi `try...catch` dalam JavaScript, dan berikan contoh kasus nyata yang membutuhkan error handling.  
jawab : try untuk menjalankan yang berhasil kalau catch itu untuk menangkap yang error nya.
contoh yang error :
async function fetchApi() {
  try {
    const res = await fetch("https://api.myqurn.com/v2/sholat/kota/semua");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("terjadi kesalahan : ", err.message);
  }
}

fetchApi(); 








Sebutkan perbedaan antara `JSON.stringify()` dan `JSON.parse()`, lalu berikan contoh penggunaan keduanya pada data objek JavaScript.  
jawab : stringify itu untuk mengubah objek jadi string kalau parse kebalikan Nya.
contoh :
const data =`[
    {"nama": "andi", "nilai": 88 },
]` 

const siswa = JSON.parse(data)
console.log(siswa)

const mulai = JSON.stringify(siswa)
console.log(mulai)







Mengapa modularisasi (`import/export`) sangat penting dalam proyek besar? Apa resiko kalau semua code ditulis dalam satu file? 
jawab : coba bayangin aja kalau di satu file .js ada ribuan line yang isi nya banyak fitur kan repot kalau mau nyari fitur" nya, nah dengan modularisasi kita bisa membuat per fitur atau data itu dengan file tersendiri agar main file nya tidak ruwet.  
