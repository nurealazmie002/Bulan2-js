async function checkError(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/svedsv")

      
      try{
        const data = await res.json()
        if(!res.ok){
            throw new Error(res.status)
        }else{
            console.log(data)
        }
      }catch(err){
        console.log("Error :",err.message)
      }
    }catch(err){
         console.log("Error : ",err.message)
        }
    }
 
    checkError()
