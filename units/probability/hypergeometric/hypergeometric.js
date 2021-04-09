'use strict';

function hyper(N,K,n,k) {
  return nCr(K,k) * nCr(N-K, n-k) / nCr(N, n);
}
