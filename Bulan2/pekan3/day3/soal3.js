const nama = "naufal"
const email = "naufal@gmail.com"


function checkNama(name){
    return new Promise((resolve,reject) => {
        if (name === nama){
            resolve("Nama anda sesuai")
        }else{
            reject("Nama tidak cocok")
        }
    })
}

function checkEmail(gmail){
    return new Promise((resolve,reject) => {
        if (gmail === email){
            resolve("Email sesuai")
        }else{
            reject("Email tidak cocok")
        }
    })
}


checkNama("naufal")
.then((value) => {
    console.log(value)
    return checkEmail("naufal@gmail.com")
})
.then((value) => {
    console.log(value)
})
.catch((err) => {
    console.log(err)
})