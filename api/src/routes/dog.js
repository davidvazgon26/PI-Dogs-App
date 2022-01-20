const { Router } = require('express');
const {Dog} = require('../db')
const routerD= Router();

routerD.get('/', async (req,res,next)=>{
    try {
        const dog = await Dog.findAll()
        res.send(dog)
    } catch (error) {
        next(error)
    }
})

routerD.post('/', async (req,res,next)=>{
    try {
        const {name, height, weight, life_span} = req.body;
        const newDog = await Dog.create({
        name, height, weight, life_span
    })
    res.status(201).send(newDog)
    } catch (error) {
        next(error)
    }
})

routerD.put('/', (req,res,next)=>{
    res.send('soy put /Dogs')
})

routerD.delete('/', (req,res,next)=>{
    res.send('soy delete /Dogs')
})

// [ ] GET /dogs/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados
// [ ] GET /temperament:
// Obtener todos los temperamentos posibles
// En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí


module.exports = routerD;