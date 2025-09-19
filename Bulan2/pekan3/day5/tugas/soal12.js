const nama = "naufal"

function showData(data){
    return new Promise((resolve,reject) => {
        if (data === nama){
            resolve("data berhasil di proses")
        }else{
            reject("data gagal di proses")
        }
    })
}


showData("amin")
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})