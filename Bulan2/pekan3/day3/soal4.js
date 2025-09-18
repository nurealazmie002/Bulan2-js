function login(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("login berhasil")
        },1000)
    })
}

function pilihBarang(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("barang berhasil dipilih")
        },1000)
    })
}

function bayar(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("pembayaran sukses")
        },1000)
    })
}

login()
.then((value) => {
    console.log(value)
    return pilihBarang()
})
.then((value) => {
    console.log(value)
    return bayar()
})
.then((value) => {
    console.log(value)
})
.catch((err) => {
    console.log(err)
})