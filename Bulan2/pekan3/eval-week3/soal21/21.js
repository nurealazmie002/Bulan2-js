async function eachEmail(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await res.json()
        const filterData = data.filter((c) => c.email.includes("@gmail.com"))
        console.log(filterData)
    }catch(err){
        console.log(err)
    }
}

eachEmail()