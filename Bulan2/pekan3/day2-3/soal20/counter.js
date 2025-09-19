let counter = 0;

const naik = setInterval(() => {
  console.log(counter);
  counter++;

  if (counter > 10) {
    clearInterval(naik);
    console.log("Done!");
  }
}, 2000);
