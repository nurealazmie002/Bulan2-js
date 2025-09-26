Soal Pertanyaan (5 Soal)
1. Apa fungsi `localStorage` dalam JavaScript?  
   *Clue: digunakan untuk menyimpan data dalam browser.*
jawab:: menyimpan data dalam storage page lokal

2. Apa perbedaan `localStorage` dengan `sessionStorage`?  
   *Clue: salah satunya hilang setelah tab/browser ditutup.*
jawab: local itu benar" tersimpan dalam storage page jadi jika halaman di close data tetap ada, sedangkan session itu hanya sementara jika halaman di tutup maka data akan hilang. 

3. Bagaimana cara menyimpan data string ke `localStorage`?  
   *Clue: gunakan `.setItem(key, value)`.*
jawab:
localStorage.setItem("nama", "Naufal");
console.log(localStorage.getItem("nama")); 


4. Bagaimana cara mengambil data dari `localStorage`?  
   *Clue: gunakan `.getItem(key)`.*
jawab:
const nama = localStorage.getItem("nama");
console.log(nama); 


5. Bagaimana cara menghapus data tertentu di `localStorage`?  
   *Clue: gunakan `.removeItem(key)`.*
jawab:
ini kalau sudah ada data nya key = "nama"

localStorage.removeItem("nama");
console.log(localStorage.getItem("nama")); 
