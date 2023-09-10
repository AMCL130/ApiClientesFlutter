const { Schema, model } = require('mongoose')

const ClienteSchema = Schema({
    tipo: {
        type: String,
        enum: {
            values: ['Cc', 'Otro'],
            message: 'Tipo: solo se permite "Cc" u "Otro" '
        },
        required: [true, 'tipo de documento necesario']
    },

    doc: {
        type: Number,
        minlength: [5, 'Minimimo 5 numeros'],
        maxlength: [11, 'maximo 11 numeros'],
        required: [true, 'El numero de documento es necesari'],
    },

    nombre: {
        type: String,
        required: [true, 'Nombre necesario']
    },

    celular: {
        type: Number,
        required: [true, 'El numero de celular es necesario'],
        minlength: [10, 'Minimi 10 numeros'],

    },

    direccion: {
        type: String,
        require: [true, 'direccion necesaria']
    },

    correo: {
        type: String,
        require: [true, 'correo necesario']
    },

    estado: {
        type: String,
        enum: {
            values: ['activo', 'inactivo'],
            message: 'Estado: solo se permite "activo" o "inactivo" '
        },
        required: [true, 'Estado obligatorio']
    },

    contrasena: {
        type: String,
        required: [true, 'contraseña necesaria'],
        minlength: [8, 'Minimo 8 caracteres'],
        maxlength: [12, 'Maximo 12 caracteres']
    }

})

module.exports = model('Cliente', ClienteSchema)