export const books = []

function tambahBuku(buku) {
    books.push(buku)
    return buku
}


function cariBuku(namaBuku) {
    return books.find(buku => buku === namaBuku)
}


function hapusBuku(namaBuku) {
   const index = books.indexOf(namaBuku)
    if (index !== -1){
        books.splice(index, 1)
        return true
    }
    return false
}


export { tambahBuku, cariBuku, hapusBuku }