function is_prime(num) {
  for(var i=2,m=Math.sqrt(num); i<=m; i++) {
    if(num%i==0) return false;
  }
  return true;
}

var curr = 1,
    count = 0,
    target = 10001;

while(count < target) {
  if(is_prime(++curr)) {
    count++;
  }
}

console.log(curr);
