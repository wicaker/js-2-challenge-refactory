let sensor = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum'];

let paragraf = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

paragraf = paragraf.split(' ');

//this function will return how many '*' will show based on how many character will be censoring
const sensorLength = (sensor) => {
  let simbol= [];
  for(let k=0; k<sensor.length; k++){
    simbol.push('*');
  }
  return simbol.join('');
}


for(let i=0;i<paragraf.length;i++){
  for(let j=0;j<sensor.length;j++){
    if(paragraf[i]===sensor[j]){
      paragraf.splice(i,1,sensorLength(sensor[j]));
    }
  }
}

console.log(paragraf.join(' '));
