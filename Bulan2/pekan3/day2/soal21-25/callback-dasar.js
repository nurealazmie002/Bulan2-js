// 1. Kalkulasi dengan Callback
function kalkulasi(angka1, angka2, callback) {
  return callback(angka1, angka2);
}
const tambah = (a, b) => a + b;
const kali   = (a, b) => a * b;

console.log("Tambah:", kalkulasi(5, 3, tambah)); // 8
console.log("Kali:", kalkulasi(5, 3, kali));     // 15







function greet(nama, callback) {
  return callback(nama);
}

const formal = (n) => `Selamat pagi, Tuan ${n}.`;
const santai = (n) => `Hai ${n}! Apa kabar?`;

console.log(greet("Naufal", formal));
console.log(greet("Naufal", santai));







function filterAngka(arr, callback) {
  return arr.filter(callback);
}
const ganjil = (x) => x % 2 !== 0;
const genap  = (x) => x % 2 === 0;

console.log(filterAngka([1,2,3,4,5,6,7,8,9], ganjil)); // [1,3,5,7,9]
console.log(filterAngka([1,2,3,4,5,6,7,8,9], genap));  // [2,4,6,8]








function sortData(arr, callback) {
  return arr.sort(callback);
}
const ascending  = (a, b) => a - b;
const descending = (a, b) => b - a;

console.log(sortData([5,1,8,3,2], ascending));  // [1,2,3,5,8]
console.log(sortData([5,1,8,3,2], descending)); // [8,5,3,2,1]







function validasi(data, callback) {
  return callback(data);
}
const isNotEmpty = (str) => str.trim() !== "";
const isNumber   = (x) => !isNaN(x);

console.log(validasi("Halo", isNotEmpty)); // true
console.log(validasi("", isNotEmpty));     // false
console.log(validasi("123", isNumber));    // true
console.log(validasi("abc", isNumber));    // false
