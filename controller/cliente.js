
const { response } = require('express');

//crando objeto del modelo
const Cliente = require('../model/cliente');


//creacion de los metodos de las apis


//para consultar los clientes

const getCliente = async (req, res = response) => {
    let mensaje = '';
    try {
        const cliente = await Cliente.find();
        mensaje = cliente
    } catch (error) {
        mensaje = error
    }
    res.json({
        msg: mensaje
    })
}

//crear un cliente

const postCliente = async (req, res = response) => {
    const body = req.body//desestructurar el cuerpo
    let mensaje = '';
    const cliente = new Cliente(body)
    

    try {
        await cliente.save();
        mensaje = 'cliente registrado con exito'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })


}


//modificar datos de un cliente

const putCliente = async (req, res = response) => {
    const body = req.body
    console.log(body)

    let mensaje = '';

    try {

        await Cliente.findOneAndUpdate({ _id: body._id },
            {
                tipo: body.tipo, doc: body.doc, nombre: body.nombre, celular: body.celular,
                direccion: body.direccion, correo: body.correo, estado: body.estado,
                contrasena: body.contrasena
            })
        mensaje = `cliente modificado con exito`;


    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje: mensaje
    })
}


const deleteCliente = async (req, res = response) => {
    const body = req.body;
    let mensaje = '';

    try {
        await Cliente.deleteOne({_id: body._id })
        mensaje = `Cliente eliminado con exito`
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })

}

module.exports = {
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
}

