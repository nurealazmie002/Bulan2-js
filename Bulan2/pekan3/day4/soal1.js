function getUser(){
    return new Promise((resolve)=> {
        setTimeout( ()=> {
            resolve ("User ditemukan")
        },1000)
    })
}

function getPost(){
    return new Promise( (resolve)=> {
        setTimeout( ()=> {
            resolve ("Post ditemukan")
        },1000)
    })
}

function getComment(){
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve("Comment ditemukan")
        },1000)
    })
}


getUser()
.then((value) => {
    console.log(value)
    return getPost()
})
.then((value) => {
    console.log(value)
    return getComment()
})
.then((value) => {
    console.log(value)
})




