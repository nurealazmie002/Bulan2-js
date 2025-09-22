async function tampilPost() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")

        if(!res.ok){
            throw new Error(`Error! status: ${res.status}`)
        }

        const data = await res.json()
        console.log(data)
    }catch(err){
        console.log("Oyyy salah kode te ni .....", err.message)
    }
}

tampilPost()