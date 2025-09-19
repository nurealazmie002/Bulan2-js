import { names } from "./app.js";

export function tambahNama(nama){
    names.push(nama)
    return names
}

export function hapusNama(nama){
    names.splice(names.indexOf(nama), 1)
    return names
}

export function tampilNama(names){
    names.forEach(nama => console.log(nama))
    return names
}

