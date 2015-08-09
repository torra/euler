'use strict';

function is_palindrome(x) {
  var xa = (x+'').split('');
  return xa.join() == xa.reverse().join();
}

var x = 0,
    y = 999,
    pal = 0;

    while(y > 0) {
      x = 999;
      while(x > 0) {
        var product = x--*y;
        if(is_palindrome(product) && product > pal) {
          pal = product;
        }
      }
      y--;
    }

    console.log(pal);
