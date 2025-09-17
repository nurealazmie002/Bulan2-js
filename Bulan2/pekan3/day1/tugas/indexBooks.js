
import { getAllBooks, addBook, findBookByTitle } from "./serviceBooks.js"

//Tambah buku baru
addBook({ id: 4, judul: "Pulang", penulis: "Tere Liye", tahun: 2015 })

//Tampilkan semua buku
console.log("Daftar Buku:")
getAllBooks().forEach(b => {
  console.log(`${b.id}. ${b.judul} - ${b.penulis} (${b.tahun})`)
})

//Cari buku tertentu
const cari = "Bumi Manusia"
const hasil = findBookByTitle(cari)
console.log("\nHasil Pencarian:")
if (hasil) {
  console.log(`${hasil.judul} - ${hasil.penulis} (${hasil.tahun})`)
} else {
  console.log(`Buku "${cari}" tidak ditemukan.`)
}
