'use strict';

function encryptSingle (a, x) {

    let memory = a.charCodeAt(0);
    let encryption = memory + x;
    if (encryption >= 123) {
      encryption = encryption - 26;
    }

    return String.fromCharCode(encryption);
}
