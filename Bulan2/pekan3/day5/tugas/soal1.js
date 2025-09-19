async function tampilUser() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1")

        if(!res.ok){
            throw new Error(`Error! status: ${res.status}`)
        }

        const data = await res.json()
        console.log(data.name)
    }catch(err){
        console.log("Error massehh...", err.message)
    }
}

tampilUser()