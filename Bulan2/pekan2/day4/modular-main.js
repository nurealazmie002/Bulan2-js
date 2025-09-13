import {luasPersegi,luasLingkaran} from "./bangun-datar.js"

console.log (luasPersegi(10))
console.log (luasLingkaran(14))



import { besar } from "./pengolahan-string.js" 
console.log(besar("belajar modular"))


import { jamSekarang } from "./waktu.js"
console.log ("jam sekarang : ",jamSekarang())

import sapa from "./salam-default.js"
console.log (sapa("Naufal"))


import versi , {hitung} from "./utility-campuran.js"

console.log(versi())
console.log(hitung(25,27))