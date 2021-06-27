const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let largest = 0;
  let name = '';
  for(let vegetable of vegetables){
    if(vegetable[metric] > largest){
      largest = vegetable[metric];
      name = vegetable.submitter;
    }
  }
  console.log(name);
  return name;
};


