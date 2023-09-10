const {Router}= require('express')

const route= Router()

const {getCliente, postCliente, putCliente, deleteCliente}= require('../controller/cliente')


route.get('/', getCliente)

route.post('/', postCliente)

route.put('/', putCliente)

route.delete('/', deleteCliente)


module.exports = route