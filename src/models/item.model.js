const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    preco:{
        type: Number,
        required: true,
    },
    qtdEstoque:{
        type: Number,
        required: true,
    },
    tipo:{
        type:String,
        required: true,
    }
})

module.exports = mongoose.model('Item', itemSchema)