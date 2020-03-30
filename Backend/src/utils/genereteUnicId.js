const crypto = require('crypto');

module.exports = function genereteUnicId(){
    return crypto.randomBytes(4).toString('HEX');
}