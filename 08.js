class Str {
  static lower(input){
    return input.toLowerCase();
  }
  static upper(input){
    return input.toUpperCase();
  }
  static capitalize(input){
    let result = [];
    input = input.split(' ');
    for(let i=0; i<input.length; i++){
      result.push(input[i].charAt(0).toUpperCase() + input[i].slice(1));
    }
    return result.join(' ');
  }
  static reverse(input){
    input = input.split('');
    return input.reverse().join('');
  }
  static contains(string, wordContain){
    if(typeof wordContain === 'string'){
      var word = new RegExp(wordContain,"g");
      if(string.match(word)===null){
        return false;
      }
      return true;
    }
    else{
      for(let i=0; i<wordContain.length;i++){
        var word = new RegExp(wordContain[i],"g");
        if(string.match(word)===null){
          return false;
        }
      }
      return true;
    }
  }
  static random(length) {
    var str = "";
    if(length== undefined){
      for ( ; str.length < 16; str += Math.random().toString( 36 ).substr( 2 ) );
      return str.substr( 0, 16 ); 
    }
    for ( ; str.length < length; str += Math.random().toString( 36 ).substr( 2 ) );
    return str.substr( 0, length );
  }
  static slug(...input){
    if(input.length==1){
      input = input.join('').toLowerCase().replace(/[^\w\s]/gi, '').replace(/ /g,'-');
      return input;
    }
    else{
      input[0] = input.join('').toLowerCase().replace(/[^\w\s]/gi, '').replace(/ /g,input[1]);
      return input[0];
    }
  }
  static count(input){
    return input.length;
  }
  static countWords(input){
    input = input.split(' ');
    return input.length;
  }
  static trim(...input){
    if(input.length==1){
      input = input.join('');
      let result ='';
      if(input.length<100){
        return input;
      }
      else{
        for(let i =0; i< 100; i++){
          result=result+input[i];
        }
        return result+'...';
      }
    }
    else if(input.length==2){
      let result ='';
      if(input[0].length<input[1]){
        return input[0];
      }
      else{
        for(let i =0; i< input[1]; i++){
          result=result+input[0][i];
        }
        return result+'...';
      }
    }
    else if(input.length==3){
      let result ='';
      if(input[0].length<input[1]){
        return input[0];
      }
      else{
        for(let i =0; i< input[1]; i++){
          result=result+input[0][i];
        }
        return result+input[2];
      }
    }
  }
  static trimWords(...input){
    if (input.length==1){
      input= input.join('').split(' ');
      let result ='';
      if(input.length<30){
        return input;
      }
      else{
        for(let i =0; i< 30; i++){
          result=result+' '+ input[i];
        }
        return result+'...';
      }
    }
    else if(input.length==2){
      let result ='';
      if(input[0].split(' ').length<input[1]){
        return input[0];
      }
      else{
        for(let i =0; i< input[1]; i++){
          result=result+' '+input[0].split(' ')[i];
        }
        return result+'...';
      }
    }
    else if(input.length==3){
      let result ='';
      if(input[0].split(' ').length<input[1]){
        return input[0];
      }
      else{
        for(let i =0; i< input[1]; i++){
          result=result+' '+input[0].split(' ')[i];
        }
        return result+input[2];
      }
    }
  }
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
console.log(Str.trimWords(text, 3, '·····'));
