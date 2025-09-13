import barang from "./barang.js";

//Tambah Barang
const itemBaru = [
    { id: 4, nama: "Roti", harga: 2000, stok: 20 },
    { id: 5, nama: "Krimer", harga: 10000, stok: 18 },
    { id: 6, nama: "Paper filter", harga: 10000, stok: 25 }    
]
export function tambahBarang(barangBaru =itemBaru) {
  barang.push(...barangBaru)
  return barang
}


//CARI BARANG
export function cariBarang(nama) {
  return barang.find(item => item.nama.toLowerCase() === nama. toLowerCase())
}

//TOTAL BELANJAAN
export function hitungTotal(belanjaan) {
  let totalHarga = 0
  
  belanjaan.map(b =>{
    let item = barang.find(i => i.id === b.id)
    if (item) totalHarga += item.harga * b.jumlah
  })
  return totalHarga
}

// UPDATE STOK BARANG
export function updateStok(id, jumlahBeli) {

  let item = barang.find(i => i.id === id)

  if(item){
    let {stok} = item
    stok = stok - jumlahBeli

    item.stok = stok

    return item
  }

  return null
}