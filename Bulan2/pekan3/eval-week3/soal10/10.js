function bagi(a,b){
    try{
        if(a === 0 || b === 0){
            throw new Error("Tidak bisa membagi dengan 0")
        }else{
            return a / b
        }
    }catch(err){
        return err.message
    }
}

console.log(bagi (8,2))
console.log(bagi(4,0))