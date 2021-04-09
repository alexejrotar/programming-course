'use strict';

function nCr (n, k) {
    return fac(n) / (fac(k) * fac(n-k));
}