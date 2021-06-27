const carPassing = function (cars, speed) {
  // Your code in here ...
  let newObj = {
    time: Date.now(),
    speed: speed
  };
  cars.push(newObj);
  return cars;
}
