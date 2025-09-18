const user = [
    {nama : "Naufal", umur : 20, status : "Pelajar", sekolah : "Pondok IT"},
    {nama : "Ridho", umur : 20, status : "Pelajar", sekolah : "Pondok IT"},
    {nama : "Habib", umur : 20, status : "Pelajar", sekolah : "Pondok IT"},
    {nama : "Habil", umur : 20, status : "Pelajar", sekolah : "Pondok IT"},
    {nama : "Ilham", umur : 20, status : "Pelajar", sekolah : "Pondok IT"},
]


const ubahJson= JSON.stringify(user)
console.log(ubahJson)

const ubahParse = JSON.parse(ubahJson)
console.log(ubahParse)