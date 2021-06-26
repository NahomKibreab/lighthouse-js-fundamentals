const finalPosition = function(moves){
  let northSouth = 0;
  let eastWest = 0;
  for(let move of moves){
    switch(move){
      case 'north':
        northSouth++;
        break;
      case 'south':
        northSouth--;
        break;
      case 'east':
        eastWest++;
        break;
      case 'west':
        eastWest--;
        break;
    }
  }
  return [eastWest,northSouth];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));