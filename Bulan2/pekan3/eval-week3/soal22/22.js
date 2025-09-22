async function cekData(data){
    try{
        if(!data || data.length === 0){
            throw new Error("Data tidak boleh kosong")
        }
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data berhasil di proses")
            }, 1000)
           
        }) 
        console.log(data)
    }catch(err){
        console.log(err.message)
    }
}

cekData ([])
cekData (["satu", "dua", "tiga"   ])