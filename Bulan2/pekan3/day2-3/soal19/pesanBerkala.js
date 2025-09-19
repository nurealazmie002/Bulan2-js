import { clear } from "console"

let titik = ""
let hitung = 0


const loading = setInterval (() => {
    titik += "."
    console.log("Loading" + titik)
    hitung++

    if (hitung === 5){
        clearInterval(loading)
        console.log("Selesai!")
    }
},1000)