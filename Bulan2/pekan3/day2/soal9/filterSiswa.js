const datasiswa = `[
    {"nama": "andi", "nilai": 88 },
    {"nama": "budi", "nilai": 73 },
    {"nama": "citra", "nilai": 91 },
    {"nama": "dewi", "nilai": 65 }
]`

const siswa = JSON.parse(datasiswa)
const lulus = siswa.filter(s =>s.nilai > 75)

console.log(lulus)