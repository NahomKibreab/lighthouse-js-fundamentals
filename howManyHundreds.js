const howManyHundreds = function(num){
  if(num % 100 >= 0){
    return Math.floor(num / 100);
  } else {
    return 0;
  }
}