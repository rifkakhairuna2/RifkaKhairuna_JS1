var jam = prompt("Inputkan jam anda saat ini :");
var keteranganwaktu = "";
if(jam >= 7 && jam <= 10) keteranganwaktu = "pagi"   
else if(jam > 10 && jam <= 14) keteranganwaktu = "siang"
else if(jam > 14 && jam <=18) keteranganwaktu= "Sore"
else if(jam > 18 && jam <=23) keteranganwaktu= "Malam"

else keteranganwaktu = "waktu tidak terdeteksi";
document.write(`keterangan : ${keteranganwaktu}`)