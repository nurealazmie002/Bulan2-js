import { user } from "./userAuth.js"


export function login(username, password) {
  const foundUser = user.find(
    u => u.username === username && u.password === password
  )

  if (foundUser) {
    return { success: true, message: "Login berhasil", user: foundUser }
  } else {
    return { success: false, message: "Username atau password salah" }
  }
}


export function register(username, password, email) {
  const exists = user.find(u => u.username === username)

  if (exists) {
    return { success: false, message: "Username sudah digunakan" }
  }

  const newUser = {
    id: user.length + 1,
    username,
    email,
    password
  }

  user.push(newUser)

  return { success: true, message: "Registrasi berhasil", user: newUser }
}

