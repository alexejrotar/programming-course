'use strict';

function bin(n,k,p) {
  return nCr(n,k) * p**k * (1-p)**(n-k);
}
