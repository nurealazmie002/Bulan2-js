let user = `{"nama": "doni", "umur": 20}` 
const user2 = `{"status": "Pelajar", "sekolah": "Pondok IT"}`

const gabungUser = {...JSON.parse(user), ...JSON.parse(user2)}
console.log(gabungUser) 