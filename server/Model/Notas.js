const mongoose = require('mongoose')

const NotasSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    materia_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Materia'
    },
    primeiroBim : Number,
    segundoBim : Number,
    terceiroBim : Number,
    quartoBim : Number
});

module.exports = mongoose.model('Notas', NotasSchema)