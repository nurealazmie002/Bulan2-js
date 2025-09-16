import dataBuku from './buku.js'


//FITUR TAMBAH BUKU
function tambahBuku (judul,penulis,tahunTerbit,tersedia){
if(!judul || !penulis){
    return "Judul dan Penulis tidak boleh kosong"
}else{
    const bukuBaru = 
        {
            id :dataBuku.length + 1,
            judul ,
            penulis ,
            tahunTerbit ,
            tersedia 
        }

    dataBuku.push(bukuBaru)
    return bukuBaru
}
}

console.log(tambahBuku(" luka "," mr.entah ",2016,true))
console.log(tambahBuku(" lara ","",1999,true))
console.log(tambahBuku(""," Cak lol ",2045,false))

console.log(dataBuku)



//FITUR TAMPIL BUKU
function tampilBuku(dataBuku){
    dataBuku.forEach(buku => {
        console.log(`ID : ${buku.id} | Judul : ${buku.judul} | Penulis : ${buku.penulis} | Tahun Terbit : ${buku.tahunTerbit} | Tersedia : ${buku.tersedia}`)
    })

    return dataBuku
}

tampilBuku(dataBuku)


//FITUR UPDATE BUKU 
function updateBuku(id,judulBaru,penulisBaru,tahunTerbitBaru,tersediaBaru){
    let b =  dataBuku.find(b => b.id === id)
    if(b) {
        b.judul = judulBaru
        b.penulis = penulisBaru
        b.tahunTerbit = tahunTerbitBaru
        b.tersedia = tersediaBaru
        return `Buku dengan id ${id} telah di update`
    }else{
        return `Buku dengan id ${id} tidak ditemukan`
    }
}

console.log(updateBuku(1,"ngalor ngidul ","tere liyo",2023,false))


//FITUR HAPUS BUKU
function hapusBuku(id){
    let b = dataBuku.find(b => b.id === id)
    if(b) {
        dataBuku.splice(dataBuku.indexOf(b),1)
        return` Buku dengan id ${id} telah dihapus`
    }else{
        return`Siswa dengan id ${id} tidak ditemukan`
    }
}

console.log(hapusBuku(1))
console.log(dataBuku)



//FITUR TAMBAHAN

//FITUR TAMPIL BUKU
function cariBuku(judul){
let c = dataBuku.find( j => j.judul === judul )
    if(c) {
        return `ID : ${c.id} | Judul : ${c.judul} | Penulis : ${c.penulis} | Tahun Terbit : ${c.tahunTerbit} | Tersedia : ${c.tersedia}`
    }else{
        return `Buku tidak ditemukan`
    }
}


console.log(cariBuku("your name"))
  


//FITUR TAMPIL YANG TERSEDIA
function cekTersedia(item){
    return item.tersedia === true
}

let stokBuku = dataBuku.filter(cekTersedia)
console.log(stokBuku)