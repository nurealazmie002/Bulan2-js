function conDatabase(){
    return new Promise((resolve)=> {
        setTimeout( ()=> {
            resolve ("Berhasil connect database")
        },1000)
    })
}

function getProduct(){
    return new Promise( (resolve)=> {
        setTimeout( ()=> {
            resolve ("Berhasil ambil produk")
        },1000)
    })
}

function showData(){
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve("Tampilkan data")
        },1000)
    })
}


conDatabase()
.then((value) => {
    console.log(value)
    return getProduct()
})
.then((value) => {
    console.log(value)
    return showData()
})
.then((value) => {
    console.log(value)
})




