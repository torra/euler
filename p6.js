function sum_squares(up_to) {
  var sum = 0;
  while(up_to > 0) {
    sum += up_to*up_to--;
  }
  return sum;
}

function square_sum(up_to) {
  var sum = 0;
  while(up_to > 0) {
    sum += up_to--;
  }
  return sum*sum;
}

var up_to = 100;

console.log(square_sum(up_to) - sum_squares(up_to));
