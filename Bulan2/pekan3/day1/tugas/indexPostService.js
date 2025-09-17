import { getPosts } from "./postService.js"

async function tampilkanPosts() {
  try {
    const posts = await getPosts()
    const firstFive = posts.slice(0, 5)

    console.log("5 Post Pertama:")
    firstFive.forEach(post => {
      console.log(`\nID: ${post.id}`)
      console.log(`Judul: ${post.title}`)
      console.log(`Isi: ${post.body}`)
    })
  } catch (error) {
    console.error("Error:", error.message)
  }
}

tampilkanPosts()
