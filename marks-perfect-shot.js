const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(arr_moves) {
  let res = [0,0];
  for (let dir of arr_moves){
    switch(dir){
      case 'north':
        res[1] += 1;
        break;
      case 'south':
        res[1] -= 1;
        break;
      case 'east':
        res[0] += 1;
        break;
      case 'west':
        res[0] -= 1;
        break;
    }
  }
  return res;
}

console.log(finalPosition(moves));