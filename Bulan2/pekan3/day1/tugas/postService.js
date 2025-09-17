
export async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!response.ok) {
    throw new Error("Gagal mengambil data")
  }
  const data = await response.json()
  return data
}
