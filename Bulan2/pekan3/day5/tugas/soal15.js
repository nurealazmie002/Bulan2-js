async function delayFetch(url,ms){
    return new Promise((resolve,reject) => {
        setTimeout(async() => {
            try{
                const res =await fetch(url)

                if(!res.ok){
                    throw new Error(res.status)
                }

                const data = await res.json()
                resolve(data)
            }catch(err){
                reject(err)
            }
        },ms)
    })
}

delayFetch("https://jsonplaceholder.typicode.com/posts/1", 2000)
  .then(data => console.log("Data:", data))
  .catch(err => console.log("Error:", err.message))