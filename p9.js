var max = 1000;

for(var i=1;i<max;i++) {
  for(var j=i+1;j<max;j++) {
    for(var k=j+1;k<max;k++) {
      if( ((i*i) + (j*j)) == (k*k)
      &&  i+j+k === max) {
        console.log(i*j*k);
      }
    }
  }
}
