const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1 && num !== 0;
}
const isEven = num => num%2===0 ;
const isOdd = num => num%2!=0 ;
const isMultipliesBy5 = num => num%5===0 ;

let result = [[],[],[],[],[]];

for(let i=1;i<=1000;i++){
  if(isPrime(i)== true && i<100){
    result[4].push(i);
    continue
  }
  else if(isPrime(i)== true){
    result[3].push(i);
  }
  else if(isMultipliesBy5(i)== true){
    result[2].push(i);
  }
  else if(isOdd(i)==true){
    result[1].push(i);
  }
  else if(isEven(i)==true){
    result[0].push(i);
  }
}