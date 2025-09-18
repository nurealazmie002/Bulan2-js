let countDown = 10

const timer = setInterval(() => {
    console.log(countDown)
    countDown--

    if (countDown === 0) {
        clearInterval(timer)
        console.log("Time out!!")
    }
},1000)