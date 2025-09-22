const string = `{"nama":" Naufal","status":"unactive"}`

const obj = JSON.parse(string)
obj.status = "active"

const ubahString = JSON.stringify(obj)
console.log(ubahString)

console.log("sebelum : ",string)
console.log("sesudah : ",ubahString)