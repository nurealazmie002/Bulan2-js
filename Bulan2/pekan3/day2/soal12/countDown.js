function hitungMundur(n){
    if (n === 0) return

    console.log(n)
    setTimeout(() => {hitungMundur(n-1)},1000)
}

hitungMundur(5)