function tentukanJuaraKelas(nilaiSiswa) {
  let juara = "";
  let nilaiTertinggi = 0;

  for (const siswa of nilaiSiswa) {
      if (siswa.nilai > nilaiTertinggi) {
          nilaiTertinggi = siswa.nilai;
          juara = siswa.nama;
      }
  }

  return juara;
}

const nilaiSiswa = [
  { nama: "Rifka", nilai: 89 },
  { nama: "Khairuna", nilai: 88 },
  { nama: "Aldi", nilai: 89 },
  { nama: "Mona", nilai: 78 },
];

const juaraKelas = tentukanJuaraKelas(nilaiSiswa);

console.log(`Juara kelas adalah: ${juaraKelas}`);
