function hitung(angka, callback) {
  return callback(angka)
}

console.log("Kuadrat:", hitung(5, function(x) {
  return x * x
}))






function tampilkanPesan(callback) {
  callback()
}

tampilkanPesan(function() {
  console.log("Halo")
});







[10, 20, 30, 40].forEach(function(item, i) {
  console.log(`Index ${i}: ${item}`)
})






let data = [1,2,3,4,5,6,7,8,9,10]
let genap = data.filter(function(x) {
  return x % 2 === 0
})

console.log("Angka genap:", genap)






let kuadrat = data.map(function(x) {
  return x * x
})

console.log("Kuadrat:", kuadrat)
