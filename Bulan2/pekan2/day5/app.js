import dataSiswa from "./data.js";

import { tambahSiswa } from "./function.js"; 

//Tambah Siswa
console.log(tambahSiswa(7,"Riski","Programmer",79))
console.log(tambahSiswa(8,"Rifka","Bisnis Digital",83))

//Tampil Siswa
import { tampilSiswa } from "./function.js";
tampilSiswa(dataSiswa)


//Update Siswa
import { updateSiswa } from "./function.js";
console.log(updateSiswa(1,"Naufal","Programmer",100))
//Liat hasi update
console.log(dataSiswa)


