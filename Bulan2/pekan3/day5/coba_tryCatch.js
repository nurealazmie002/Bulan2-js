async function fetchApi() {
  try {
    const res = await fetch("https://api.myquran.com/v2/sholat/kota/semua");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("terjadi kesalahan : ", err.message);
  }
}

fetchApi();
