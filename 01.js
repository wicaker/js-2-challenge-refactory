let a = 'ibu ratna antar ubi';
let b = 'kasur ini rusak';

a = a.split(' ');
b = b.split(' ');

const array = a.reverse().concat(b.reverse());

console.log(array);