async function ambilData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/sers/1")

    if (!res.ok) {
      throw new Error("Response tidak normal");
    }

        const data = await res.json()
        console.log(data.name)
    }catch(err){
        console.log("Gagal mengambil data API...", err.message)
    }
}

ambilData()