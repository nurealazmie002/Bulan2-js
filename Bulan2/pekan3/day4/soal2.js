function tambah(a,b){
    return new Promise((resolve,reject)=> {
        if (typeof a === "number" && typeof b === "number"){
            resolve( a + b )
        }else{
            reject("input harus angka")
        }
    })
}

function kali(a,b){
    return new Promise( (resolve,reject)=> {
        if (typeof a === "number" && typeof b === "number"){
            resolve(a * b)
        }else{
            reject("input harus angka")
        }
    })
}



tambah(5,7)
.then(hasilTambah => {
    console.log("hasil Tambah : " + hasilTambah)
    return kali(hasilTambah,3)
})
.then(hasilKali => {
    console.log("hasil Kali" + hasilKali)
})
.catch(err => {
    console.log(err)
})