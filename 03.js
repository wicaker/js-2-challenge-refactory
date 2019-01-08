//Read CSV file
var fs = require('fs');
var readStream = fs.readFileSync('03.csv', 'utf8').split('\n');

readStream.shift(); //delete first element
readStreamSort = []; //contain sorted of list product
for(let i=0; i<readStream.length; i++){
    readStreamSort.push(readStream[i].split(','))
}

//shorting function
readStreamSort.sort(sortFunction);
function sortFunction(a,b) {
    if (parseInt(a[2]) === parseInt(b[2])) {
        return 0;
    }
    else {
        return (parseInt(a[2]) < parseInt(b[2])) ? -1 : 1;
    }
}

//Create Object format
const myObject = []
for (i of readStreamSort) {
    myObject.push({
        name: i[0],
        price: `Rp ${i[2]}`,
        category: i[1]
    })
}

console.log(myObject);
