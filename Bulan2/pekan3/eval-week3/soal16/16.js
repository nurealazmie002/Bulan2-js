import { error } from "console"

function cekProduk(stok){
    return new Promise((resolve,reject) => {
        if(stok > 0){
            resolve("Produk Tersedia")
        }else{
            reject("Produk Habis")
        }
    })
}

cekProduk(0)
.then((value) => {
    console.log(value)})
.catch((error) => {
    console.log(error)
})