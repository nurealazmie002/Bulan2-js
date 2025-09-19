function progress (step){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Progress ${step}`)
        }, 1000)
    })
}

progress("25 %")
.then((value) => {
    console.log(value)
    return progress("50 %")
})
.then((value) => {
    console.log(value)
    return progress("75 %")
})
.then((value) => {
    console.log(value)
    return progress("100 %")
})
.then((value) => {
    console.log(value)
    console.log("Progress Selesai")
})
.catch((err) => {
    console.log(err)
})