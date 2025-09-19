async function getImage(){
    try {
        const res =await fetch("https://picsum.photos/200/300")

        console.log("Status code :",res.status)
        if(!res.ok){
            throw new Error("Gagal ambil gambar")
        }
        console.log("Gambar:",res.url)
    }catch(err){
        console.log(err.message)
    }
}


getImage()