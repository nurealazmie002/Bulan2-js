function kali1(a,b){
    return new Promise((resolve,reject) => {
        if(typeof a === "number" && typeof b === "number"){
            resolve(a * b)
        }else{
            reject("input harus angka")
        }
    })
}

function kali2(a,b){
    return new Promise((resolve,reject) => {
        if(typeof a === "number" && typeof b === "number"){
            resolve(a * b)
        }else{
            reject("input harus angka")
        }
    })
}

kali1(10,2)
.then(hasilKali1 => {
    console.log("hasil kali1 :" + hasilKali1)
    return kali2(hasilKali1,3)
})
.then(hasilKali2 => {
    console.log("hasil kali2 :" + hasilKali2)
})
.catch(err => {
    console.log(err)
})