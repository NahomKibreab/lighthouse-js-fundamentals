const range = function(start,end,step){
  let array = [];
  if((start !== undefined && end !== undefined && step !== undefined) && (start <= end) && (step > 0)) {
    for(let i = start; i <= end; i += step){
        array.push(i);   
    }
    return array;
  } else {
    return array;
  }
}

range(0, 10, 2);
range(10, 30, 5);
range(-5, 2, 3);
range(0,5);
range(5,1,1);
range(0,10,0);