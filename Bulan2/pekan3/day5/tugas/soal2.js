async function ambilPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }

    const posts = await res.json();

    if (posts.length > 50) {
      console.log("post banyak sekali");
    } else {
      console.log("jumlah post : " + posts.length);
    }
  } catch (err) {
    console.log("Error massehh...", err.message);
  }
}

ambilPost();
