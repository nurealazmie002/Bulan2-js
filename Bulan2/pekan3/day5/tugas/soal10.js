async function ambilTigaUser(){
    try {
        for (let id = 1; id <= 3; id++){
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

            if(!res.ok){
                throw new Error(`Gagal ambil user`)
            }
            const data = await res.json()
            console.log(`User${id}:`,data.name)
        }
    } catch(err){
        console.log("ada Error nich....",err.message)
    }
}


ambilTigaUser()