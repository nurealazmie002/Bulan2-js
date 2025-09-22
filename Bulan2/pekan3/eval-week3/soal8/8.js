function program(){
    return new Promise((resolve) => {
        resolve("Login User")
    })
}

program()
.then((value) => {
    console.log(value)
    return ("Ambil Data")
})
.then((value) => {
    console.log(value)
    return ("Tampilkan Dashboard")
})
.then((value) => {
    console.log(value)
})