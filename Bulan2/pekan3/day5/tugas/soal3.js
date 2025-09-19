function delay(ms){
    return new Promise((resolve) => {
        setTimeout(resolve,ms)
    })
}

async function main() {
    console.log("Mulai menunggu...")
    await delay(2000)
    console.log("Selesai menunggu")
}

main()