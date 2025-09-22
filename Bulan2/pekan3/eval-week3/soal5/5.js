function sayHello(sapa){
    setTimeout(() => {
        console.log("Halo Naufal")
        sapa()
    },2000)
}

sayHello(() => {
    console.log("Selamat Pagi")
})