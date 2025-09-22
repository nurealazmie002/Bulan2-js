import { toJSON,toObject } from "./konversi.js"

const user = {nama : "naufal", umur : 21}

const string = toJSON(user)
console.log(string)


const obj = toObject(string)
console.log(obj)