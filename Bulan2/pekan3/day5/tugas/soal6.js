async function allPromise(){
    try {
        const [userRes,postsRes] = await Promise.all ([
            fetch("https://jsonplaceholder.typicode.com/users"),fetch("https://jsonplaceholder.typicode.com/posts")
        ])
        if(!userRes.ok || !postsRes.ok){
            throw new Error("Response tidak normal");
        }
        const users = await userRes.json()
        const posts = await postsRes.json()
        console.log([users,posts]) 
    }catch(err){
        console.log("Error bossss...", err.message)
    }
}

allPromise()