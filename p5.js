function check_div(val,max_div) {
  for(var i=1; i<max_div; i++) {
    if(val % i != 0) return false;
  }
  return true;
}

var max=20,
    x=max;


while(true) {
  if(check_div(x,max)) {
    console.log(x);
    break;
  }
  x++;
}
