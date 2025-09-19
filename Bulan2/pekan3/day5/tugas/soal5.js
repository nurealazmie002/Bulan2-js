async function cekStatus() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1")

        if(res.ok === true){
            const data = await res.json()
            console.log(data)
        }else{
            throw new Error("API tidak bisa diakses")
        }

    }catch(err){
        console.log("Error massehh...", err.message)
    }
}

cekStatus()