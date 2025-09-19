async function cekGanjilGenap(num) {
    try{
        if(num % 2 !== 0){
            throw new Error("Angka ganjil forbidden!!!")
        }
        console.log("Angka valid")
    }catch(err){
        console.log("kayaknya ada kesalahan nih....", err.message)
    }
}


cekGanjilGenap(8)
cekGanjilGenap(9)