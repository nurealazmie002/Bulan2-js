async function ambilUser(id){
    try {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        const res = await fetch(url)
    
    if(!res.ok){
        throw new Error(`Error gagla ambil data! status: ${res.status}`)
    }

    const data = await res.json()
    console.log(data.name)
    }catch(err){
        console.log(err.message)
    }
}

ambilUser(1)
.then(data => {
    return(data)
})