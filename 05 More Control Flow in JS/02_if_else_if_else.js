var isEven = function(number) {
  // Your code goes here!
  if (number % 2 === 0) {
  	return true;
  }
  else if (isNaN(number) === true){
  	return "Input is not a valid number";
  }
  else {
  	return false;
  };
};