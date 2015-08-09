function is_prime(num) {
  for(var i=2,m=Math.sqrt(num); i<=m; i++) {
    if(num%i==0) return false;
  }
  return true;
}

var max = 2000000,
    sum = 0;

for(var i=2;i<max;i++) {
  if(is_prime(i)) {
    sum += i;
  }
}

console.log(sum);
