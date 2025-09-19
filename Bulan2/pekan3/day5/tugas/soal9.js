async function getPostById(id){
    try {
        if (id > 100){
            throw new Error("Post tidak ada")
        }

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        if (!res.ok) {
         throw new Error("Gagal mengambil data dari API...")
    }
    const data = await res.json()
    console.log("Title : ",data.title)
    }
    catch(err){
    console.log("Error : ",err.message)
}  
}

getPostById(20)
getPostById(200)