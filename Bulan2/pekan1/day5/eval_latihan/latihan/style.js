// 1. Buat variabel di global dan akses di dalam fungsi.

/* let namaSiswa = "sukiyem"
function main(){
    console.log(namaSiswa)
}

main()
 */







// 2. Uji coba hoisting dengan `var`, `let`, dan `const`

/* console.log (nama)
var nama = "sukiyem"

console.log (nama)
let nama = "sukiyem"

console.log (nama)
const nama = "sukiyem" */







// 3. Buat fungsi closure yang menyimpan nilai saldo dan bisa menambahkan saldo baru


/* function buatSaldo(){
  let saldo = 0  

  function tambahSaldo(saldoBaru){
    saldo += saldoBaru
    console.log("saldo tersisa: " + saldo)
  }
  return tambahSaldo
}

let deposit = buatSaldo()
deposit(1000)
deposit(2000) */