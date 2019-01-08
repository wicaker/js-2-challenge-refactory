let song ='Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali'

let aku = song.toLowerCase().match(/aku/g);
let ingin = song.toLowerCase().match(/ingin/g);
let dapat = song.toLowerCase().match(/dapat/g);
console.log(`Jumlah kata aku ${aku.length}`);
console.log(`Jumlah kata ingin ${ingin.length}`);
console.log(`Jumlah kata dapat ${dapat.length}`);
