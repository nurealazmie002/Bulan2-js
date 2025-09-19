import readline from "node:readline";
import { tebakAngka, buatTarget } from "./game.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const target = buatTarget(1, 10);
console.log(" Game Tebak Angka 1–10 ");

function main() {
  rl.question("Masukkan tebakanmu: ", (jawaban) => {
    const tebakan = parseInt(jawaban);

    if (isNaN(tebakan)) {
      console.log(" Harus angka!");
      return main();
    }

    const hasil = tebakAngka(tebakan, target);
    console.log(hasil);

    if (hasil === "Benar! ") {
      rl.close();
    } else {
      main(); 
    }
  });
}

main();
