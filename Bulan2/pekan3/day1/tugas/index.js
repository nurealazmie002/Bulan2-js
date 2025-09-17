import { produk } from "./produk.js";
import { formatRupiah } from "./helper.js";

produk.forEach(p => {
  console.log(`Produk: ${p.nama}, Harga: ${formatRupiah(p.harga)}`);
});
