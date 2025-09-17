import {nilai} from "./nilai.js";

function rataRata(){
    const total = nilai.reduce((total,n) => total + n, 0)
    return total / nilai.length
} 

console.log("Nilai rata-rata :",rataRata())


function nilaiTertinggi(){
    return Math.max(...nilai)
}

console.log(nilaiTertinggi())


function nilaiTerendah(){
    return Math.min(...nilai)
}

console.log(nilaiTerendah())