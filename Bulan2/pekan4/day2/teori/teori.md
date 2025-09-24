A. Pertanyaan Teori — 5 soal
1. Apa fungsi dari atribut `required` pada form input?  
   **Clue:** Tidak bisa submit jika kosong.
jawab: fungsi nya untuk paksa harus diisi, kalo kosong form gak bisa di submit

2. Bagaimana cara menggunakan `pattern` untuk validasi email sederhana di HTML?  
   **Clue:** `pattern=".+@.+"
jawab : <input type="text" pattern=".+@.+" required>

3. Apa bedanya `min` dan `minlength` pada input?  
   **Clue:** `min` untuk angka/date, `minlength` untuk teks.
jawab: min itu untuk nilai minimal angka, kalo minlength untuk jumlah karakter teks minimal

4. Bagaimana cara mencegah form reload saat submit di JavaScript?  
   **Clue:** `event.preventDefault()`
jawab: dengan memakai event.preventDefault() yang mewncegah reload halaman

5. Apa perbedaan validasi di sisi HTML dan sisi JavaScript?  
   **Clue:** HTML = otomatis, JS = manual dengan logika custom.
jawab : kalo di html lebih enak untuk coding karena enak untuk melihat sambungan antar js dan html nya.sedangkan kalo dari js yang terpisah itu lebih rumit untuk di lihat tetapi lebih mudah untuk di custom.