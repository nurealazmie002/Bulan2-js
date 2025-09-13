import dataSiswa from "./data.js"


export function tambahSiswa(id, nama, kelas, nilai){
    dataSiswa.push({id, nama, kelas, nilai})
    return dataSiswa
}


export function tampilSiswa(dataSiswa){
    dataSiswa.forEach(siswa => {
        console.log(`ID: ${siswa.id} | Nama: ${siswa.nama} | Kelas: ${siswa.kelas} | Nilai: ${siswa.nilai}`)
    })
    return dataSiswa
}


export function updateSiswa(id, namaBaru, kelasBaru, nilaiBaru){
    let s = dataSiswa.find(s => s.id === id)
    if(s) {
        s.nama = namaBaru
        s.kelas = kelasBaru
        s.nilai = nilaiBaru
        return ` Siswa dengan id ${id} telah diupdate `
     }else{
        return `Siswa dengan id ${id} tidak ditemukan`
     }
}


export function hapusSiswa(id){
    let s = dataSiswa.find(s => s.id === id)
    if(s) {
        dataSiswa.splice(dataSiswa.indexOf(s), 1)
        return ` Siswa dengan id ${id} telah dihapus `
     }else{
        return `Siswa dengan id ${id} tidak ditemukan`
     }
}


export function cariSiswa(nama) {
  return dataSiswa.find(siswa => siswa.nama.toLowerCase() === nama. toLowerCase())
}


export function rataRataNilai() {
  let totalNilai = 0
  dataSiswa.map(siswa => totalNilai += siswa.nilai)
  return totalNilai / dataSiswa.length
}