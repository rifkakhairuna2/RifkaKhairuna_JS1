//parameter function
function cetakBiodataSiswa(nama, usia, kelas, mataPelajaran) {
    console.log("Biodata Siswa:");
    console.log(`Nama: ${nama}`);
    console.log(`Usia: ${usia}`);
    console.log(`Kelas: ${kelas}`);

    if (mataPelajaran && mataPelajaran.length > 0) {
        console.log("Mata Pelajaran:");
        mataPelajaran.forEach(mapel => console.log(`- ${mapel}`));
    } else {
        console.log("Tidak ada mata pelajaran yang disebutkan.");
    }
}

const namaSiswa = "khairuna";
const usiaSiswa = 20;
const kelasSiswa = "X SMA";
const mataPelajaranSiswa = ["Matematika", "IPA", "Sejarah"];

cetakBiodataSiswa(namaSiswa, usiaSiswa, kelasSiswa, mataPelajaranSiswa);
