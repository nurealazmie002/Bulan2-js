import { cekGanjilGenap, balikString, randomNumber } from "./utils.js";
import { angka } from "./data.js";


angka.forEach(num => {
  console.log(`${num} adalah ${cekGanjilGenap(num)}`);
});

console.log(balikString("Lampung")); 

console.log(randomNumber(1, 10));
