'use strict';


const QRCode = require('qrcode');

async function generateCode (value) {
    if(!value){
        // Create Error Event
        return false;
    }
    try {
        return await QRCode.toDataURL(JSON.stringify(value));
    }catch (e) {
         logger.error('generateCode error',e);
        return e;
    }
}

module.exports = generateCode;

