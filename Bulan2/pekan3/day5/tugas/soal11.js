async function dataToDo(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/5")

        if(!res.ok){
            throw new Error ("Belum selesai....")

        }
        const user = await res.json()
        if(user.completed){
            console.log("Selesai")
        }else{
            console.log("Belum selesai")
        }
    }catch(err){
        console.log("Error : ",err.message)
    }
}


dataToDo()