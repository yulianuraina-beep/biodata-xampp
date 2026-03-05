function hitungUmur() {

let tanggalLahir = new Date(document.getElementById("ttl").innerText);
let hariIni = new Date();

let umur = hariIni.getFullYear() - tanggalLahir.getFullYear();
let bulan = hariIni.getMonth() - tanggalLahir.getMonth();

if (bulan < 0 || (bulan === 0 && hariIni.getDate() < tanggalLahir.getDate())) {
umur--;
}

document.getElementById("umur").innerText = umur;

}

hitungUmur();