const leapYear = year => {
  if(year % 400 === 0){
    return true;
  }
  else if(year%100===0){
    return false;
  }
  else if(year%4===0){
    return true;
  }
  else{
    return false;
  }
}

console.log(leapYear(2018));
console.log(leapYear(2004));
