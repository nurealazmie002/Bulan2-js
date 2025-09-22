async function fetchData(){
    return await fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        if(!res.ok){
            throw new Error(`Error! status: ${res.status}`)
        }
        return res.json()
    })  
}

fetchData()
.then(data => {console.log(data)})
.catch(err => console.log(err.message))