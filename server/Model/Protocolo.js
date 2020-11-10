const mongoose = require('mongoose');
const ProtocoloSchema =  new mongoose.Schema({
    protocolo : String,
});

module.exports = mongoose.model('Protocolo', ProtocoloSchema);